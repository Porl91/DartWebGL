import 'dart:async';
import 'dart:typed_data';
import 'game_context.dart';
import 'models/mesh.dart';
import 'package:vector_math/vector_math.dart';
import 'models/texture_info.dart';

class Chunk {
  final double x, z;
  final double width, depth;
  final TextureInfo _floorTextureInfo;
  Mesh _floorMesh;

  static const componentsPerVertex = 3;
  static const verticesPerQuad = 4;
  static const vertexComponentsPerQuad = verticesPerQuad * componentsPerVertex;

  TextureInfo get texture => _floorTextureInfo;
  Mesh get mesh => _floorMesh;

  Chunk._internal(
      GameContext gameContext,
      this._floorTextureInfo,
      this.x,
      this.z,
      this.width,
      this.depth,
      double getHeightForPoint(double x, double z)) {
    var vertexComponents = <double>[];
    var indices = <int>[];
    var textureCoords = <double>[];
    var normals = <double>[];
    for (var xx = x; xx < x + this.width; xx++) {
      for (var zz = z; zz < z + this.depth; zz++) {
        var y0 = getHeightForPoint(xx, zz);
        var y1 = getHeightForPoint(xx, zz + 1);
        var y2 = getHeightForPoint(xx + 1, zz + 1);
        var y3 = getHeightForPoint(xx + 1, zz);
        vertexComponents.addAll([
          xx,
          y0,
          zz,
          xx,
          y1,
          zz + 1.0,
          xx + 1.0,
          y2,
          zz + 1.0,
          xx + 1.0,
          y3,
          zz
        ]);
      }
    }

    // There are 3 x 4 = 12 floats that define a quadrilateral. Each quad is specified as sets of two triangles.
    // Each triangles is defined by 3 vertices. 2 x 3 = 6 indices.
    // Every 12 vertex components defined 6 associated indices.
    if (vertexComponents.length % vertexComponentsPerQuad != 0)
      throw new AssertionError(
          'Total vertex component count for chunks must be divisible by $vertexComponentsPerQuad. ${vertexComponents.length} vertex components were created.');

    var quadCount = vertexComponents.length / vertexComponentsPerQuad;
    for (var i = 0; i < quadCount; i++) {
      var indexOffset = i * verticesPerQuad;
      indices.addAll([
        indexOffset + 0, indexOffset + 1, indexOffset + 2, // First triangle
        indexOffset + 0, indexOffset + 2, indexOffset + 3 // Second triangle
      ]);
      textureCoords.addAll([
        0.0, 0.0, // Top left
        1.0, 0.0, // Bottom left
        1.0, 1.0, // Bottom right
        0.0, 1.0 // Top right
      ]);
      var vertexOffset = i * vertexComponentsPerQuad;
      var v0 = new Vector3(
          vertexComponents[vertexOffset + 0],
          vertexComponents[vertexOffset + 1],
          vertexComponents[vertexOffset + 2]);
      var v1 = new Vector3(
          vertexComponents[vertexOffset + 3],
          vertexComponents[vertexOffset + 4],
          vertexComponents[vertexOffset + 5]);
      var v2 = new Vector3(
          vertexComponents[vertexOffset + 6],
          vertexComponents[vertexOffset + 7],
          vertexComponents[vertexOffset + 8]);
      var edge0 = v1 - v0;
      var edge1 = v2 - v0;
      var normal = edge0.cross(edge1)..normalize();
      normals.addAll([
        normal.x,
        normal.y,
        normal.z,
        normal.x,
        normal.y,
        normal.z,
        normal.x,
        normal.y,
        normal.z,
        normal.x,
        normal.y,
        normal.z
      ]);
    }
    _floorMesh = new Mesh(
        gameContext.gl, vertexComponents, textureCoords, normals, indices);
  }

  // TODO: Cache result
  double getMinimumHeight() {
    var minHeight = double.maxFinite;
    for (var i = 1; i < mesh.vertices.length; i += 3) {
      if (mesh.vertices[i] < minHeight) {
        minHeight = mesh.vertices[i];
      }
    }
    return minHeight;
  }

  // TODO: Cache result
  double getMaximumHeight() {
    var maxHeight = -double.maxFinite;
    for (var i = 1; i < mesh.vertices.length; i += 3) {
      if (mesh.vertices[i] > maxHeight) {
        maxHeight = mesh.vertices[i];
      }
    }
    return maxHeight;
  }

  Float32List getTerrainHeightData() {
    var data = new Float32List(((width + 1) * (depth + 1)).toInt());
    // For every quad's worth of vertices the only component that's required to produce a height map is the Y component of the top-left vertex.
    for (var i = 0; i < mesh.vertices.length; i += vertexComponentsPerQuad) {
      var index = i ~/ vertexComponentsPerQuad;
      // TODO: Figure out why the X and Z components are flipped in the vertex array *or* why Bullet is reading the height data array in this order.
      var zz = index / width;
      var xx = index % width;
      var flippedIndex = (xx * width + zz).toInt();
      data[flippedIndex] = mesh.vertices[i + 1];
    }
    return data;
  }

  static Future<Chunk> createFromFunc(
      GameContext gameContext,
      double x,
      double z,
      double width,
      double depth,
      double getHeightForPoint(double x, double z)) async {
    var floorTexture = new TextureInfo.fromImage(
        gameContext.gl, await gameContext.loadImage('asset/resources.png'));
    return new Chunk._internal(
        gameContext, floorTexture, x, z, width, depth, getHeightForPoint);
  }
}
