import 'chunk.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:web_gl';
import 'game_context.dart';
import 'game_object.dart';
import 'models/mesh.dart';
import 'program_builder.dart';
import 'program_info.dart';

import 'package:dart_ammo_js/dart_ammo_js.dart';
import 'package:dart_ammo_js/dart_ammo_js.dart' as ammo;
import 'package:vector_math/vector_math.dart';
import 'package:vector_math/vector_math.dart' as vec;
import 'sphere_mesh.dart';
import 'models/texture_info.dart';

class Demo {
  final GameContext _gameContext;
  final Map<double, Chunk> _chunks = {};
  SphereMesh _sphereMesh;
  Mesh _appleMesh;
  ProgramInfo _programInfo;

  final SimplexNoise _noise;

  Matrix4 _projectionMatrix;

  static const _halfPI = pi / 2.0;

  static const _fovDegrees = 45.0;
  static final double fovRadians = _fovDegrees * pi / 180.0;

  static const double _chunkWidth = 100.0;
  static const double _chunkDepth = 100.0;

  double _xRot = 0.0;
  double _yRot = pi / 2.0;

  final Map<String, bool> _keyStates = {};
  final List<_MouseMovement> _mouseBuffer = [];
  static const double _rotateSpeed = 0.2;
  num _lastUpdate = 0;

  CollisionConfiguration _collisionConfiguration;
  CollisionDispatcher _dispatcher;
  DbvtBroadphase _overlappingPairCache;
  SequentialImpulseConstraintSolver _solver;
  DiscreteDynamicsWorld _dynamicsWorld;
  final List<GameObject> _gameObjects = [];
  GameObject _player;

  TextureInfo _appleTexture;

  Demo(this._gameContext)
      : _noise = new SimplexNoise(
            new Random(3)); //new DateTime.now().millisecondsSinceEpoch));

  void _initialiseAmmo() {
    _collisionConfiguration = new DefaultCollisionConfiguration();
    _dispatcher = new CollisionDispatcher(_collisionConfiguration);
    _overlappingPairCache = new DbvtBroadphase();
    _solver = new SequentialImpulseConstraintSolver();
    _dynamicsWorld = new DiscreteDynamicsWorld(
        _dispatcher, _overlappingPairCache, _solver, _collisionConfiguration);

    _dynamicsWorld.setGravity(new ammo.Vector3(0.0, -0.2, 0.0));
    _addBox(40.0, 40.0, 40.0, 2.0, 2.0, 2.0);
    // _addSphere(x: 10.0, y: 10.0, z: 10.0);
    _player = _gameObjects.first;
  }

  void _addBox(
      double x, double y, double z, double width, double height, double depth) {
    const double boxMass = 1.0;
    var boxShape = new BoxShape(new ammo.Vector3(width, height, depth));
    var transform = new ammo.Transform();
    transform.setIdentity();
    transform.setOrigin(new ammo.Vector3(x, y, z));
    var motionState = new DefaultMotionState(transform);
    var constructionInfo = new RigidBodyConstructionInfo(
        boxMass, motionState, boxShape, new ammo.Vector3(0.0, 0.0, 0.0));
    var rigidBody = new RigidBody(constructionInfo);
    rigidBody.setSleepingThresholds(0.0, 0.0);
    _dynamicsWorld.addRigidBody(rigidBody);
    _gameObjects.add(new GameObject(null, rigidBody));
  }

  void _addSphere(
      {double x = null,
      double y = null,
      double z = null,
      double xVel = 0.0,
      double yVel = 0.0,
      double zVel = 0.0}) {
    var playerPosition = _player == null
        ? new ammo.Vector3(0.0, 0.0, 0.0)
        : _getPositionForRigidBody(_player.rigidBody);
    const double sphereMass = 1.0;
    var sphereShape = new SphereShape(_sphereMesh.radius);
    var startTransform = new Transform();
    startTransform.setIdentity();
    var localInertia = new ammo.Vector3(0.0, 0.0, 0.0);
    sphereShape.calculateLocalInertia(sphereMass, localInertia);
    const placementDistance = 10.0;
    var xSphere = x ??
        playerPosition.x() +
            cos(_yRot - pi / 2.0) * cos(_xRot) * placementDistance;
    var ySphere = (y ?? playerPosition.y() - sin(_xRot) * placementDistance) +
        _sphereMesh.radius;
    var zSphere = z ??
        playerPosition.z() +
            sin(_yRot - pi / 2.0) * cos(_xRot) * placementDistance;
    startTransform.setOrigin(new ammo.Vector3(xSphere, ySphere, zSphere));
    var motionState = new DefaultMotionState(startTransform);
    var rigidBodyInfo = new RigidBodyConstructionInfo(
        sphereMass, motionState, sphereShape, localInertia);
    var rigidBody = new RigidBody(rigidBodyInfo);
    rigidBody.setSleepingThresholds(0.0, 0.0);
    rigidBody.setLinearVelocity(new ammo.Vector3(xVel, yVel, zVel));
    _dynamicsWorld.addRigidBody(rigidBody);
    _gameObjects.add(new GameObject(_sphereMesh.mesh, rigidBody));
  }

  void _cleanupAmmo() {
    Ammo.destroy(_dynamicsWorld);
    Ammo.destroy(_solver);
    Ammo.destroy(_overlappingPairCache);
    Ammo.destroy(_dispatcher);
    Ammo.destroy(_collisionConfiguration);
  }

  void _renderChunk(Chunk chunk) {
    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.vertexBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.vertexPosition, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.vertexPosition);

    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.textureBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.textureCoord, 2, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.textureCoord);

    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.normalsBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.normal, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.normal);

    _gameContext.gl.bindBuffer(
        RenderingContext.ELEMENT_ARRAY_BUFFER, chunk.model.indexBuffer);
    _gameContext.gl.useProgram(_programInfo.program);

    var modelTransform = new Transform();
    var motionState = _player.rigidBody.getMotionState();
    motionState.getWorldTransform(modelTransform);
    var position = modelTransform.getOrigin();
    var rotation = modelTransform.getRotation();

    var modelMatrix = new Matrix4.compose(
        new vec.Vector3(0.0, 0.0, 0.0),
        new vec.Quaternion(
            rotation.x(), rotation.y(), rotation.z(), rotation.w()),
        new vec.Vector3(1.0, 1.0, 1.0));
    var modelViewMatrix = new Matrix4.identity()
      ..rotateX(_xRot)
      ..rotateY(_yRot)
      ..translate(-position.x(), -position.y(), -position.z())
      ..multiply(modelMatrix);

    // TODO: Set the normals matrix based on the model orientation
    var normalsMatrix = new Matrix4.identity()..transpose();

    _gameContext.gl.uniformMatrix4fv(
        _programInfo.projectionMatrix, false, _projectionMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.modelViewMatrix, false, modelViewMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.normalsMatrix, false, normalsMatrix.storage);

    _gameContext.gl.activeTexture(RenderingContext.TEXTURE0);
    _gameContext.gl
        .bindTexture(RenderingContext.TEXTURE_2D, chunk.texture.texture);
    _gameContext.gl.uniform1i(_programInfo.sampler, 0);

    _gameContext.gl.drawElements(RenderingContext.TRIANGLES,
        chunk.model.indices.length, RenderingContext.UNSIGNED_SHORT, 0);
  }

  void _render() {
    _gameContext.gl
        .viewport(0, 0, _gameContext.canvas.width, _gameContext.canvas.height);
    _gameContext.gl.clearColor(0, 0, 0, 1);
    _gameContext.gl.clearDepth(1.0);
    _gameContext.gl.enable(RenderingContext.DEPTH_TEST);
    _gameContext.gl.depthFunc(RenderingContext.LEQUAL);
    _gameContext.gl.clear(
        RenderingContext.COLOR_BUFFER_BIT | RenderingContext.DEPTH_BUFFER_BIT);

    for (var chunk in _chunks.values) {
      _renderChunk(chunk);
    }

    for (var obj
        in _gameObjects.where((obj) => obj != _player && obj.mesh != null)) {
      _renderSphere(obj);
    }

    _renderApple(_appleMesh);
  }

  void _renderApple(Mesh appleModel) {
    _gameContext.gl
        .bindTexture(RenderingContext.TEXTURE_2D, _appleTexture.texture);

    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, appleModel.vertexBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.vertexPosition, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.vertexPosition);

    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, appleModel.textureBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.textureCoord, 2, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.textureCoord);

    _gameContext.gl
        .bindBuffer(RenderingContext.ARRAY_BUFFER, appleModel.normalsBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.normal, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.normal);

    _gameContext.gl.bindBuffer(
        RenderingContext.ELEMENT_ARRAY_BUFFER, appleModel.indexBuffer);
    _gameContext.gl.useProgram(_programInfo.program);

    var playerPosition = _getPositionForRigidBody(_player.rigidBody);

    var modelMatrix = new Matrix4.compose(new vec.Vector3(0.0, 0.0, 0.0),
        new vec.Quaternion(0.0, 0.0, 0.0, 0.0), new vec.Vector3(1.0, 1.0, 1.0));
    var modelViewMatrix = new Matrix4.identity()
      ..rotateX(_xRot)
      ..rotateY(_yRot)
      ..translate(-playerPosition.x(), -playerPosition.y(), -playerPosition.z())
      ..multiply(modelMatrix);

    var normalsMatrix = modelMatrix
      ..invert()
      ..transpose();

    _gameContext.gl.uniformMatrix4fv(
        _programInfo.projectionMatrix, false, _projectionMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.modelViewMatrix, false, modelViewMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.normalsMatrix, false, normalsMatrix.storage);

    _gameContext.gl.drawElements(RenderingContext.TRIANGLES,
        appleModel.indices.length, RenderingContext.UNSIGNED_SHORT, 0);
  }

  void _renderSphere(GameObject gameObject) {
    _gameContext.gl.bindBuffer(
        RenderingContext.ARRAY_BUFFER, _sphereMesh.mesh.vertexBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.vertexPosition, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.vertexPosition);

    _gameContext.gl.bindBuffer(
        RenderingContext.ARRAY_BUFFER, _sphereMesh.mesh.normalsBuffer);
    _gameContext.gl.vertexAttribPointer(
        _programInfo.normal, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.normal);

    _gameContext.gl.bindBuffer(
        RenderingContext.ELEMENT_ARRAY_BUFFER, _sphereMesh.mesh.indexBuffer);
    _gameContext.gl.useProgram(_programInfo.program);

    var modelTransform = new Transform();
    var motionState = gameObject.rigidBody.getMotionState();
    motionState.getWorldTransform(modelTransform);
    var spherePosition = modelTransform.getOrigin();
    var sphereRotation = modelTransform.getRotation();
    var playerPosition = _getPositionForRigidBody(_player.rigidBody);

    var modelMatrix = new Matrix4.compose(
        new vec.Vector3(0.0, 0.0, 0.0),
        new vec.Quaternion(sphereRotation.x(), sphereRotation.y(),
            sphereRotation.z(), sphereRotation.w()),
        new vec.Vector3(1.0, 1.0, 1.0));
    var modelViewMatrix = new Matrix4.identity()
      ..rotateX(_xRot)
      ..rotateY(_yRot)
      ..translate(
          -playerPosition.x() + spherePosition.x(),
          -playerPosition.y() + spherePosition.y(),
          -playerPosition.z() + spherePosition.z())
      ..multiply(modelMatrix);

    var normalsMatrix = modelMatrix
      ..invert()
      ..transpose();

    _gameContext.gl.uniformMatrix4fv(
        _programInfo.projectionMatrix, false, _projectionMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.modelViewMatrix, false, modelViewMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(
        _programInfo.normalsMatrix, false, normalsMatrix.storage);

    _gameContext.gl.drawElements(RenderingContext.TRIANGLES,
        _sphereMesh.mesh.indices.length, RenderingContext.UNSIGNED_SHORT, 0);
  }

  static ammo.Vector3 _getPositionForRigidBody(RigidBody rigidBody) {
    var worldTrans = new Transform();
    rigidBody.getMotionState().getWorldTransform(worldTrans);
    return worldTrans.getOrigin();
  }

  Future _generateNewChunkIfRequired() async {
    var position = _getPositionForRigidBody(_player.rigidBody);
    var xChunk = position.x() ~/ _chunkWidth * _chunkWidth;
    var zChunk = position.z() ~/ _chunkDepth * _chunkDepth;
    if (xChunk.isNegative || zChunk.isNegative) return;
    var key = generateCantor(xChunk, zChunk);
    if (!_chunks.containsKey(key)) {
      _chunks[key] = await Chunk.createFromFunc(
          _gameContext,
          xChunk,
          zChunk,
          _chunkWidth,
          _chunkDepth,
          (x, z) => _getHeightForPoint(
              _noise, x, z, [1.0, 1.0 / 4.0, 1.0 / 8.0, 1.0 / 16.0]));

      var transform = new Transform();
      transform.setIdentity();
      // Bullet defaults origin based on the bounding box. This needs to be shifted to the vertical centre-point between the lowest & highest points in the terrain.
      transform.setOrigin(new ammo.Vector3(
          _chunks[key].width * 0.5 + xChunk,
          (_chunks[key].getMinimumHeight() + _chunks[key].getMaximumHeight()) *
              0.5,
          _chunks[key].depth * 0.5 + zChunk));

      var heightDataPtr = Ammo.malloc(4 *
          (_chunks[key].width.toInt() + 1) *
          (_chunks[key].depth.toInt() + 1));
      var terrainHeightMap = _chunks[key].getTerrainHeightData();
      for (var j = 0; j <= _chunks[key].depth; j++) {
        for (var i = 0; i <= _chunks[key].width; i++) {
          var index = j * (_chunks[key].width.toInt() + 1) + i;
          // There are 4 bytes per float (height value)
          Ammo.heapF32[heightDataPtr + index * 4 >> 2] =
              terrainHeightMap[index];
        }
      }
      var terrainMeshShape = new HeightfieldTerrainShape(
          _chunks[key].width.toInt(),
          _chunks[key].depth.toInt(),
          heightDataPtr,
          1.0,
          _chunks[key].getMinimumHeight(),
          _chunks[key].getMaximumHeight(),
          1,
          "PHY_FLOAT",
          false);

      var motionState = new DefaultMotionState(transform);
      var constructionInfo = new RigidBodyConstructionInfo(
          0.0, motionState, terrainMeshShape, new ammo.Vector3(0.0, 0.0, 0.0));
      var rigidBody = new RigidBody(constructionInfo);

      _dynamicsWorld.addRigidBody(rigidBody);
    }
  }

  // Cantor pairing function. Creates a unique natural number from the provided numbers.
  double generateCantor(double a, double b) =>
      ((a + b) * (a + b + 1)) / 2.0 + b;

  void _updatePhysics(num delta) {
    _dynamicsWorld.stepSimulation(delta.toDouble(), 10);
  }

  Future _update(num delta) async {
    await _generateNewChunkIfRequired();
    var currentVelocity = _player.rigidBody.getLinearVelocity();
    var x = currentVelocity.x();
    var y = currentVelocity.y();
    var z = currentVelocity.z();
    if (_keyStates[' ']) {
      y += 1.0;
    }
    if (_keyStates['w']) {
      x += cos(_yRot - pi / 2.0) * cos(_xRot);
      z += sin(_yRot - pi / 2.0) * cos(_xRot);
    }
    if (_keyStates['s']) {
      x -= cos(_yRot - pi / 2.0) * cos(_xRot);
      z -= sin(_yRot - pi / 2.0) * cos(_xRot);
    }
    if (x < -2.0) x = -2.0;
    if (x > 2.0) x = 2.0;
    if (y < -2.0) y = -2.0;
    if (y > 2.0) y = 2.0;
    if (z < -2.0) z = -2.0;
    if (z > 2.0) z = 2.0;
    if (x != 0 || y != 0 || z != 0)
      _player.rigidBody.setLinearVelocity(new ammo.Vector3(x, y, z));
    for (var mouseMovement in _mouseBuffer) {
      var normalisedVerticalDirectionScalar =
          mouseMovement.verticalDirection == _VerticalMouseMovementDirection.Up
              ? -1
              : 1;
      _xRot += _rotateSpeed *
          delta *
          mouseMovement.verticalDistance *
          normalisedVerticalDirectionScalar;
      var normalisedHorizontalDirectionScalar =
          mouseMovement.horizontalDirection ==
                  _HorizontalMouseMovementDirection.Left
              ? -1
              : 1;
      _yRot += _rotateSpeed *
          delta *
          mouseMovement.horizontalDistance *
          normalisedHorizontalDirectionScalar;
      if (_xRot < -_halfPI) _xRot = -_halfPI;
      if (_xRot > _halfPI) _xRot = _halfPI;
    }
    _mouseBuffer.clear();
  }

  int _updateCount = 0;
  Future _process(num now) async {
    _updateCount++;
    if (now ~/ 1000 != _lastUpdate.floor()) {
      window.console.log('${_updateCount} updates/sec');
      _updateCount = 0;
    }
    now *= 0.001; // Convert to seconds
    final delta = now - _lastUpdate;
    _lastUpdate = now;
    _updatePhysics(now);
    await _update(delta);
    _render();
    window.requestAnimationFrame(_process);
  }

  Future _initialiseResources() async {
    try {
      var vertShaderSource =
          (await HttpRequest.request('asset/shader/3d_vertex_shader.glsl'))
              .responseText;
      var fragShaderSource =
          (await HttpRequest.request('asset/shader/3d_fragment_shader.glsl'))
              .responseText;
      var program = new ProgramBuilder(_gameContext.gl)
          .addVertexShader(vertShaderSource)
          .addFragmentShader(fragShaderSource)
          .build();

      _programInfo = new ProgramInfo(
          program,
          _gameContext.gl.getAttribLocation(program, 'aVertexPosition'),
          _gameContext.gl.getAttribLocation(program, 'aTextureCoord'),
          _gameContext.gl.getAttribLocation(program, 'aVertexNormal'),
          _gameContext.gl.getUniformLocation(program, 'uProjectionMatrix'),
          _gameContext.gl.getUniformLocation(program, 'uModelViewMatrix'),
          _gameContext.gl.getUniformLocation(program, 'uNormalMatrix'),
          _gameContext.gl.getUniformLocation(program, 'uSampler'));
    } catch (e) {
      // 'e' is a ProgressEvent, not Error -- https://github.com/dart-lang/api.dartlang.org/issues/29.
      final error = 'Failed to load shader source files.\n${e.toString()}';
      window.console.error(error);
      return new Future<String>.error(error);
    }

    try {
      _appleMesh = await Mesh.createFromWavefrontObjFile(
          _gameContext.gl, 'asset/models/apple/data.obj');
      window.console.log(
          '${_appleMesh.textureCoordinates.length} -- ${_appleMesh.indices.length}');
      _appleTexture = new TextureInfo.fromImage(
          _gameContext.gl,
          await _gameContext
              .loadImage('asset/models/apple/textures/appleD.jpg'));
    } catch (e) {
      final error = 'Failed to load model.\n${e.toString()}';
      window.console.error(error);
      return new Future<String>.error(error);
    }

    _projectionMatrix = makePerspectiveMatrix(
        fovRadians, _gameContext.getCanvasAspectRatio(), 0.1, 1000.0);
    _sphereMesh = new SphereMesh.fromRadius(_gameContext.gl, 2.0);
    _initialiseAmmo();
  }

  static double _getHeightForPoint(
      SimplexNoise noise, double x, double z, List<double> elevationLevels) {
    //return (x + z) / 2.0;
    const exponent = 2.20;
    var summedElevation = 0.0;
    for (var i = 0; i < elevationLevels.length; i++) {
      var depth = pow(2, i).toDouble();
      var nx = x / _chunkWidth - 0.5;
      var nz = z / _chunkDepth - 0.5;
      // Need to shift the noise value from the range (-1,+1) to (0,1) as we can't raise a negative base with pow().
      var shiftedNoise = noise.noise2D(depth * nx, depth * nz) / 2.0 + 0.5;
      summedElevation += elevationLevels[i] * shiftedNoise;
    }
    var average = summedElevation /
        elevationLevels.fold(0.0,
            (double currentTotal, currentValue) => currentTotal + currentValue);
    return pow(average * 8.0, exponent).toDouble() - 25.0;
  }

  Future start() async {
    window.onKeyDown.listen((ev) {
      _keyStates[ev.key] = true;
      if (ev.key == 'h') {
        for (var z = 0.0; z < _chunkDepth; z += 10.0) {
          for (var x = 0.0; x < _chunkWidth; x += 10.0) {
            _addSphere(x: x, y: 50.0, z: z);
          }
        }
      }
    });
    window.onKeyUp.listen((ev) => _keyStates[ev.key] = false);
    window.onMouseMove.listen((ev) {
      _mouseBuffer.add(new _MouseMovement(
        ev.movement.x > 0
            ? _HorizontalMouseMovementDirection.Right
            : _HorizontalMouseMovementDirection.Left,
        ev.movement.y > 0
            ? _VerticalMouseMovementDirection.Down
            : _VerticalMouseMovementDirection.Up,
        ev.movement.x.abs().toDouble(),
        ev.movement.y.abs().toDouble(),
      ));
    });
    _gameContext.correctCanvasProportions();
    await _initialiseResources();
    _gameContext.canvas.onMouseDown
        .listen((ev) => _gameContext.canvas.requestPointerLock());
    window.onMouseUp.listen((ev) {
      var xVel = cos(_yRot - pi / 2.0) * cos(_xRot);
      var yVel = sin(_xRot);
      var zVel = sin(_yRot - pi / 2.0) * cos(_xRot);
      _addSphere(xVel: xVel * 10.0, yVel: -yVel * 10.0, zVel: zVel * 10.0);
    });
    window.onResize.listen((ev) => _gameContext.correctCanvasProportions());
    window.requestAnimationFrame(await _process);
  }
}

enum _HorizontalMouseMovementDirection { Left, Right }
enum _VerticalMouseMovementDirection { Up, Down }

class _MouseMovement {
  final _HorizontalMouseMovementDirection horizontalDirection;
  final _VerticalMouseMovementDirection verticalDirection;
  final double horizontalDistance;
  final double verticalDistance;
  _MouseMovement(this.horizontalDirection, this.verticalDirection,
      this.horizontalDistance, this.verticalDistance);
}
