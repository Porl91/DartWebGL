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

  ModelInfo(GL.RenderingContext gl, 
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

  Float32List get vertices => _vertices;
  Float32List get textureCoordinates => _textureCoordinates;
  Float32List get normals => _normals;
  Uint16List get indices => _indices;

  GL.Buffer get vertexBuffer => _vertexBuffer;
  GL.Buffer get textureBuffer => _textureBuffer;
  GL.Buffer get normalsBuffer => _normalsBuffer;
  GL.Buffer get indexBuffer => _indexBuffer;
}