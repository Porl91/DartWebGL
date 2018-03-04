import 'dart:math';
import 'dart:web_gl';
import 'model_info.dart';

class SphereModel {
  static const int _maxLatitudinalBands = 30;
  static const int _maxLongitudinalBands = 30;
  final double _radius;
  ModelInfo _model;
  SphereModel.fromRadius(RenderingContext gl, this._radius) {
    final vertices = <double>[];
    final textureCoordinates = <double>[]; // TODO
    final normals = <double>[];
    final indices = <int>[];
    for (var lat = 0; lat <= _maxLatitudinalBands; lat++) {
      var theta = lat * PI / _maxLatitudinalBands.toDouble();
      var sinTheta = sin(theta);
      var cosTheta = cos(theta);
      for (var lon = 0; lon <= _maxLongitudinalBands; lon++) {
        var phi = lon * 2.0 * PI / _maxLongitudinalBands;
        var sinPhi = sin(phi);
        var cosPhi = cos(phi);
        var x = cosPhi * sinTheta;
        var y = cosTheta;
        var z = sinPhi * sinTheta;
        var u = 1.0 - lon / _maxLongitudinalBands.toDouble();
        var v = 1.0 - lat / _maxLatitudinalBands.toDouble();
        normals.addAll([x, y, z]);
        textureCoordinates.addAll([u, v]);
        vertices.addAll([radius * x, radius * y, radius * z]);
      }
    }
    for (var lat = 0; lat < _maxLatitudinalBands; lat++) {
      for (var lon = 0; lon < _maxLongitudinalBands; lon++) {
        var first = lat * (_maxLongitudinalBands + 1) + lon;
        var second = first + _maxLongitudinalBands + 1;
        indices.addAll([
          first, second, first + 1, 
          second, second + 1, first + 1
        ]);
      }
    }
    _model = new ModelInfo(
      gl, 
      vertices,
      textureCoordinates, 
      normals,
      indices
    );
  }
  double get radius => _radius;
  ModelInfo get model => _model;
}