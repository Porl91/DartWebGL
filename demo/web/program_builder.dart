import 'dart:web_gl';

class ProgramBuilder {
  final RenderingContext _gl;

  ProgramBuilder(this._gl);

  ProgramBuilderWithVertexShader addVertexShader(String source) {
    var shader = _gl.createShader(RenderingContext.VERTEX_SHADER);

    _gl.shaderSource(shader, source);
    _gl.compileShader(shader);

    var success = _gl.getShaderParameter(shader, RenderingContext.COMPILE_STATUS) as bool;
    if (!success) {
      var info = _gl.getShaderInfoLog(shader);
      _gl.deleteShader(shader);
      throw new Exception('Unable to compile vertex shader: $info');
    }

    return new ProgramBuilderWithVertexShader(_gl, shader);
  }
}

class ProgramBuilderWithVertexShader {
  final RenderingContext _gl;
  final Shader _vertexShader;

  ProgramBuilderWithVertexShader(this._gl, this._vertexShader);

  ProgramBuilderWithVertexAndFragmentShader addFragmentShader(String source) {
    var shader = _gl.createShader(RenderingContext.FRAGMENT_SHADER);

    _gl.shaderSource(shader, source);
    _gl.compileShader(shader);

    var success = _gl.getShaderParameter(shader, RenderingContext.COMPILE_STATUS) as bool;
    if (!success) {
      var info = _gl.getShaderInfoLog(shader);
      _gl.deleteShader(shader);
      throw new Exception('Unable to compile fragment shader: $info');
    }

    return new ProgramBuilderWithVertexAndFragmentShader(_gl, _vertexShader, shader);
  }
}

class ProgramBuilderWithVertexAndFragmentShader {
  final RenderingContext _gl;
  final Shader _vertexShader, _fragmentShader;

  ProgramBuilderWithVertexAndFragmentShader(this._gl, this._vertexShader, this._fragmentShader);

  Program build() {
    var program = _gl.createProgram();

    _gl.attachShader(program, _vertexShader);
    _gl.attachShader(program, _fragmentShader);
    _gl.linkProgram(program);

    var success = _gl.getProgramParameter(program, RenderingContext.LINK_STATUS) as bool;
    if (!success) {
      var info = _gl.getProgramInfoLog(program);
      _gl.deleteProgram(program);
      throw new Exception('Unable to link program: $info');
    }

    return program;
  }
}