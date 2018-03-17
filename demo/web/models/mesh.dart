import 'dart:async';
import 'dart:html';
import 'dart:typed_data';
import 'dart:web_gl' as GL;

class Mesh {
  Float32List _vertices;
  Float32List _textureCoordinates;
  Float32List _normals;
  Uint16List _indices;

  GL.Buffer _vertexBuffer;
  GL.Buffer _textureBuffer;
  GL.Buffer _normalsBuffer;
  GL.Buffer _indexBuffer;

  Mesh._internal(
      GL.RenderingContext gl,
      List<double> vertices,
      List<double> textureCoordinates,
      List<double> normals,
      List<int> indices) {
    _vertices = new Float32List.fromList(vertices);
    _textureCoordinates = new Float32List.fromList(textureCoordinates);
    _normals = new Float32List.fromList(normals);
    _indices = new Uint16List.fromList(indices);

    _vertexBuffer = gl.createBuffer();
    _textureBuffer = gl.createBuffer();
    _normalsBuffer = gl.createBuffer();
    _indexBuffer = gl.createBuffer();

    gl.bindBuffer(GL.ARRAY_BUFFER, _vertexBuffer);
    gl.bufferData(GL.ARRAY_BUFFER, _vertices, GL.STATIC_DRAW);

    gl.bindBuffer(GL.ARRAY_BUFFER, _textureBuffer);
    gl.bufferData(GL.ARRAY_BUFFER, _textureCoordinates, GL.STATIC_DRAW);

    gl.bindBuffer(GL.ARRAY_BUFFER, _normalsBuffer);
    gl.bufferData(GL.ARRAY_BUFFER, _normals, GL.STATIC_DRAW);

    gl.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, _indexBuffer);
    gl.bufferData(GL.ELEMENT_ARRAY_BUFFER, _indices, GL.STATIC_DRAW);
  }

  factory Mesh(
          GL.RenderingContext gl,
          List<double> vertices,
          List<double> textureCoordinates,
          List<double> normals,
          List<int> indices) =>
      new Mesh._internal(gl, vertices, textureCoordinates, normals, indices);

  static Future<Mesh> createFromWavefrontObjFile(
      GL.RenderingContext gl, String filename) async {
    try {
      var lines = (await HttpRequest.getString(filename)).split('\n');
      var vertices = <double>[];
      var textureCoordinates = <double>[];
      var normals = <double>[];
      var meshData = new _PackedMeshData();
      for (var line in lines) {
        if (line.startsWith('v '))
          vertices.addAll(line
              .substring(2)
              .trim()
              .split(' ')
              .map((component) => double.parse(component.trim())));
        else if (line.startsWith('vt '))
          textureCoordinates.addAll(line
              .substring(3)
              .trim()
              .split(' ')
              .take(2)
              .map((component) => double.parse(component.trim())));
        else if (line.startsWith('vn '))
          normals.addAll(line
              .substring(3)
              .trim()
              .split(' ')
              .map((component) => double.parse(component.trim())));
        else if (line.startsWith('f '))
          // vertices, textureCoordinates & normals will be pre-populated by this point as faces come after them in .obj files.
          // A second pass can be avoided.
          loadMeshDataFromFileLine(
              meshData, line, vertices, textureCoordinates, normals);
      }
      return new Mesh._internal(gl, meshData.vertices,
          meshData.textureCoordinates, meshData.normals, meshData.indices);
    } catch (e) {
      return new Future<Mesh>.error(
          'Failed to load model: $filename\n ${e.toString()}');
    }
  }

  static void loadMeshDataFromFileLine(
      _PackedMeshData meshData,
      String line,
      List<double> vertices,
      List<double> textureCoordinates,
      List<double> normals) {
    var dataRow = line.substring(2).trim();
    var segments = dataRow.split(' ');
    var quad = false;
    for (var i = 0; i < segments.length; i++) {
      if (i == 3 && !quad) {
        i = 2;
        quad = true;
      }
      if (meshData.cachedIndices.containsKey(segments[i])) {
        meshData.indices.add(meshData.cachedIndices[segments[i]]);
      } else {
        var indices = segments[i]
            .split('/')
            .map((index) => int.parse(index.trim()))
            .toList();
        // Vertices
        meshData.vertices.addAll([vertices[(indices[0] - 1) * 3 + 0]]);
        meshData.vertices.addAll([vertices[(indices[0] - 1) * 3 + 1]]);
        meshData.vertices.addAll([vertices[(indices[0] - 1) * 3 + 2]]);
        // Texture coordinates
        meshData.textureCoordinates
            .addAll([textureCoordinates[(indices[1] - 1) * 2 + 0]]);
        meshData.textureCoordinates
            .addAll([textureCoordinates[(indices[1] - 1) * 2 + 1]]);
        // Surface normals
        meshData.normals.addAll([normals[(indices[2] - 1) * 3 + 0]]);
        meshData.normals.addAll([normals[(indices[2] - 1) * 3 + 1]]);
        meshData.normals.addAll([normals[(indices[2] - 1) * 3 + 2]]);
        // Indices
        meshData.cachedIndices.putIfAbsent(segments[i], () => meshData.index);
        meshData.indices.add(meshData.index);
        meshData.index++;
      }
      if (i == 3 && quad) {
        meshData.indices.add(meshData.cachedIndices[segments[0]]);
      }
    }
  }

  Float32List get vertices => _vertices;
  Float32List get textureCoordinates => _textureCoordinates;
  Float32List get normals => _normals;
  Uint16List get indices => _indices;

  GL.Buffer get vertexBuffer => _vertexBuffer;
  GL.Buffer get textureBuffer => _textureBuffer;
  GL.Buffer get normalsBuffer => _normalsBuffer;
  GL.Buffer get indexBuffer => _indexBuffer;
}

class _PackedMeshData {
  final List<double> vertices;
  final List<double> normals;
  final List<double> textureCoordinates;
  final List<int> indices;
  final Map<String, int> cachedIndices;
  int index = 0;
  _PackedMeshData()
      : vertices = [],
        normals = [],
        textureCoordinates = [],
        indices = [],
        cachedIndices = {};
}
