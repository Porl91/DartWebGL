import 'dart:web_gl';

class ProgramInfo {
  final Program program;

  final int vertexPosition;
  final int textureCoord;
  final int normal;

  final UniformLocation projectionMatrix;
  final UniformLocation modelViewMatrix;
  final UniformLocation normalsMatrix;
  final UniformLocation sampler;

  ProgramInfo(this.program, 
    this.vertexPosition, 
    this.textureCoord,
    this.normal, 
    this.projectionMatrix, 
    this.modelViewMatrix, 
    this.normalsMatrix, 
    this.sampler);
}