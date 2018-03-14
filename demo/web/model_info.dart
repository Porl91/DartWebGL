import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:typed_data';
import 'dart:web_gl' as GL;

class ModelInfo {
  Float32List _vertices;
  Float32List _textureCoordinates;
  Float32List _normals;
  Uint16List _indices;

  GL.Buffer _vertexBuffer;
  GL.Buffer _textureBuffer;
  GL.Buffer _normalsBuffer;
  GL.Buffer _indexBuffer;

  ModelInfo._internal(
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

  factory ModelInfo(
          GL.RenderingContext gl,
          List<double> vertices,
          List<double> textureCoordinates,
          List<double> normals,
          List<int> indices) =>
      new ModelInfo._internal(
          gl, vertices, textureCoordinates, normals, indices);

  static Future<ModelInfo> createFromWavefrontObjFile(
      GL.RenderingContext gl, String filename) async {
    try {
      var lines = (await HttpRequest.getString(filename)).split('\n');
      var vertices = <double>[];
      var textureCoordinates = <double>[];
      var normals = <double>[];
      var indices = <int>[];
      var x = 0;
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
        else if (line.startsWith('f ')) {
          var points = line.substring(2).trim().split(' ');
          if (points.length >= 3) {
            x++;
            var index1 = int.parse(points[0].split('/').first) - 1;
            var index2 = int.parse(points[1].split('/').first) - 1;
            var index3 = int.parse(points[2].split('/').first) - 1;
            if (points.length == 4) {
              var index4 = int.parse(points[3].split('/').first) - 1;
              indices.addAll([index1, index2, index3, index1, index3, index4]);
            } else if (points.length == 3) {
              indices.addAll([index1, index2, index3]);
            } else {
              window.console.log(line);
            }
          }
        }
      }
      window.console.log(vertices.length);
      window.console.log(x);
      window.console.log(indices.length);
      window.console.log(indices.reduce(max));
      return new ModelInfo._internal(
          gl, vertices, textureCoordinates, normals, indices);
    } catch (e) {
      return new Future<ModelInfo>.error(
          'Failed to load model: $filename\n ${e.toString()}');
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
