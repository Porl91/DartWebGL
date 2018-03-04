import 'chunk.dart';
import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:web_gl';
import 'game_context.dart';
import 'game_object.dart';
import 'program_builder.dart';
import 'program_info.dart';

import 'package:dart_ammo_js/dart_ammo_js.dart';
import 'package:dart_ammo_js/dart_ammo_js.dart' as ammo;
import 'package:vector_math/vector_math.dart';
import 'package:vector_math/vector_math.dart' as vec;
import 'sphere_model.dart';

class Demo {
  final GameContext _gameContext;
  final Map<double, Chunk> _chunks = {};
  SphereModel _sphereModel;
  ProgramInfo _programInfo;

  final SimplexNoise _noise;

  Matrix4 _projectionMatrix;

  static const _halfPI = PI / 2.0;

  static const _fovDegrees = 45.0;
  static final double fovRadians = _fovDegrees * PI / 180.0;

  static const double _chunkWidth = 100.0;
  static const double _chunkDepth = 100.0;

  double _x = 0.0, _y = 0.0, _z = 0.0;
  double _xv = 0.0, _yv = 0.0, _zv = 0.0;
  double _xa = 0.0, _ya = 0.0, _za = 0.0;
  double _xRot = 0.0;
  double _yRot = PI / 2.0;
  bool _jumping = false;

  static const double maxWalkAcceleration = 0.2;
  final Map<String, bool> _keyStates = {};
  final List<_MouseMovement> _mouseBuffer = [];
  static const double _moveSpeed = 15.5;
  static const double _rotateSpeed = 0.2;
  num _lastUpdate = 0;

  CollisionConfiguration _collisionConfiguration;
  CollisionDispatcher _dispatcher;
  DbvtBroadphase _overlappingPairCache;
  SequentialImpulseConstraintSolver _solver;
  DiscreteDynamicsWorld _dynamicsWorld;
  final List<GameObject> _gameObjects = [];

  Demo(this._gameContext) : _noise = new SimplexNoise(new Random(3));//new DateTime.now().millisecondsSinceEpoch));

  void _initialiseAmmo() {
    _collisionConfiguration = new DefaultCollisionConfiguration();
    _dispatcher = new CollisionDispatcher(_collisionConfiguration);
    _overlappingPairCache = new DbvtBroadphase();
    _solver = new SequentialImpulseConstraintSolver();
    _dynamicsWorld = new DiscreteDynamicsWorld(_dispatcher, _overlappingPairCache, _solver, _collisionConfiguration);

    _dynamicsWorld.setGravity(new ammo.Vector3(0.0, -0.1, 0.0));
  }

  // void _addBox() {
  //   var boxShape = new BoxShape(new ammo.Vector3(10000.0, 1.0, 10000.0));
  //   // boxShape.setMargin(0.05);
  //   var transform = new ammo.Transform();
  //   transform.setOrigin(new ammo.Vector3(0.0, 0.0, 0.0));
  //   var motionState = new DefaultMotionState(transform);
  //   var constructionInfo = new RigidBodyConstructionInfo(0.0, motionState, boxShape, new ammo.Vector3(0.0, 0.0, 0.0));
  //   var rigidBody = new RigidBody(constructionInfo);
  //   rigidBody.setSleepingThresholds(0.0, 0.0);
  //   _dynamicsWorld.addRigidBody(rigidBody);
  //   _gameObjects.add(
  //     new GameObject(null, rigidBody)
  //   );
  // }

  void _addSphere({ double x = null, double y = null, double z = null }) {
    const double sphereMass = 1.0;
    var sphereShape = new SphereShape(_sphereModel.radius);
    var startTransform = new Transform();
    startTransform.setIdentity();
    var localInertia = new ammo.Vector3(0.0, 0.0, 0.0);
    sphereShape.calculateLocalInertia(sphereMass, localInertia);
    const placementDistance = 20.0;
    var xSphere = x ?? _x + cos(_yRot - PI / 2.0) * cos(_xRot) * placementDistance;
    var ySphere = y ?? _y - sin(_xRot) * placementDistance;
    var zSphere = z ?? _z + sin(_yRot - PI / 2.0) * cos(_xRot) * placementDistance;
    startTransform.setOrigin(new ammo.Vector3(xSphere, ySphere, zSphere));
    var motionState = new DefaultMotionState(startTransform);
    var rigidBodyInfo = new RigidBodyConstructionInfo(sphereMass, motionState, sphereShape, localInertia);
    var rigidBody = new RigidBody(rigidBodyInfo);
    rigidBody.setSleepingThresholds(0.0, 0.0);
    _dynamicsWorld.addRigidBody(rigidBody);
    _gameObjects.add(new GameObject(_sphereModel.model, rigidBody));
  }

  void _cleanupAmmo() {
    Ammo.destroy(_dynamicsWorld);
    Ammo.destroy(_solver);
    Ammo.destroy(_overlappingPairCache);
    Ammo.destroy(_dispatcher);
    Ammo.destroy(_collisionConfiguration);
  }

  void _renderChunk(Chunk chunk) {
    _gameContext.gl.bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.vertexBuffer);
    _gameContext.gl.vertexAttribPointer(_programInfo.vertexPosition, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.vertexPosition);

    _gameContext.gl.bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.textureBuffer);
    _gameContext.gl.vertexAttribPointer(_programInfo.textureCoord, 2, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.textureCoord);

    _gameContext.gl.bindBuffer(RenderingContext.ARRAY_BUFFER, chunk.model.normalsBuffer);
    _gameContext.gl.vertexAttribPointer(_programInfo.normal, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.normal);

    _gameContext.gl.bindBuffer(RenderingContext.ELEMENT_ARRAY_BUFFER, chunk.model.indexBuffer);
    _gameContext.gl.useProgram(_programInfo.program);

    var modelViewMatrix = new Matrix4.identity()
      ..rotateX(_xRot)
      ..rotateY(_yRot)
      ..translate(-_x, -2.0 - _y, -_z);

    // TODO: Set the normals matrix based on the model orientation
    var normalsMatrix = new Matrix4.identity()..transpose();

    _gameContext.gl.uniformMatrix4fv(_programInfo.projectionMatrix, false, _projectionMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(_programInfo.modelViewMatrix, false, modelViewMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(_programInfo.normalsMatrix, false, normalsMatrix.storage);

    _gameContext.gl.activeTexture(RenderingContext.TEXTURE0);
    _gameContext.gl.bindTexture(RenderingContext.TEXTURE_2D, chunk.texture.texture);
    _gameContext.gl.uniform1i(_programInfo.sampler, 0);

    _gameContext.gl.drawElements(RenderingContext.TRIANGLES, chunk.model.indices.length, RenderingContext.UNSIGNED_SHORT, 0);
  }

  void _render() {
    _gameContext.gl.viewport(0, 0, _gameContext.canvas.width, _gameContext.canvas.height);
    _gameContext.gl.clearColor(0, 0, 0, 1);
    _gameContext.gl.clearDepth(1.0);
    _gameContext.gl.enable(RenderingContext.DEPTH_TEST);
    _gameContext.gl.depthFunc(RenderingContext.LEQUAL);
    _gameContext.gl.clear(RenderingContext.COLOR_BUFFER_BIT | RenderingContext.DEPTH_BUFFER_BIT);

    for (var chunk in _chunks.values) {
      _renderChunk(chunk);
    }

    for (var obj in _gameObjects.where((obj) => obj.model != null)) {
      _renderSphere(obj);
    }
  }

  void _renderSphere(GameObject gameObject) {
    _gameContext.gl.bindBuffer(RenderingContext.ARRAY_BUFFER, _sphereModel.model.vertexBuffer);
    _gameContext.gl.vertexAttribPointer(_programInfo.vertexPosition, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.vertexPosition);

    _gameContext.gl.bindBuffer(RenderingContext.ARRAY_BUFFER, _sphereModel.model.normalsBuffer);
    _gameContext.gl.vertexAttribPointer(_programInfo.normal, 3, RenderingContext.FLOAT, false, 0, 0);
    _gameContext.gl.enableVertexAttribArray(_programInfo.normal);

    _gameContext.gl.bindBuffer(RenderingContext.ELEMENT_ARRAY_BUFFER, _sphereModel.model.indexBuffer);
    _gameContext.gl.useProgram(_programInfo.program);

    var modelTransform = new Transform();
    var motionState = gameObject.rigidBody.getMotionState();
    motionState.getWorldTransform(modelTransform);
    var position = modelTransform.getOrigin();
    var rotation = modelTransform.getRotation();

    var modelMatrix = new Matrix4.compose(
        new vec.Vector3(0.0, 0.0, 0.0),
        new vec.Quaternion(rotation.x(), rotation.y(), rotation.z(), rotation.w()),
        new vec.Vector3(1.0, 1.0, 1.0));
    var modelViewMatrix = new Matrix4.identity()
      ..rotateX(_xRot)
      ..rotateY(_yRot)
      ..translate(-_x + position.x(), -2.0 - _y + position.y(), -_z + position.z())
      ..multiply(modelMatrix);

    var normalsMatrix = modelMatrix..invert()..transpose();

    _gameContext.gl.uniformMatrix4fv(_programInfo.projectionMatrix, false, _projectionMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(_programInfo.modelViewMatrix, false, modelViewMatrix.storage);
    _gameContext.gl.uniformMatrix4fv(_programInfo.normalsMatrix, false, normalsMatrix.storage);

    _gameContext.gl.drawElements(RenderingContext.TRIANGLES, _sphereModel.model.indices.length, RenderingContext.UNSIGNED_SHORT, 0);
  }

  Future _generateNewChunkIfRequired() async {
    var xChunk = _x ~/ _chunkWidth * _chunkWidth;
    var zChunk = _z ~/ _chunkDepth * _chunkDepth;
    if (xChunk.isNegative || zChunk.isNegative)
      return;
    var key = generateCantor(xChunk, zChunk);
    if (!_chunks.containsKey(key)) {
      _chunks[key] = await Chunk.createFromFunc(_gameContext, xChunk, zChunk, _chunkWidth, _chunkDepth,
        (x, z) => _getHeightForPoint(_noise, x, z, [
            1.0,
            1.0 / 4.0,
            1.0 / 8.0,
            1.0 / 16.0
          ])
        );

      var transform = new Transform();
      transform.setIdentity();
      // Bullet defaults origin based on the bounding box. This needs to be shifted to the vertical centre-point between the lowest & highest points in the terrain.
      transform.setOrigin(new ammo.Vector3(
        _chunks[key].width * 0.5,
        (_chunks[key].getMinimumHeight() + _chunks[key].getMaximumHeight()) * 0.5,
        _chunks[key].depth * 0.5)
      );

      var heightDataPtr = Ammo.malloc(4 * (_chunks[key].width.toInt() + 1) * (_chunks[key].depth.toInt() + 1));
      var terrainHeightMap =_chunks[key].getTerrainHeightData();
      for (var j = 0; j <= _chunks[key].depth; j++) {
        for (var i = 0; i <= _chunks[key].width; i++) {
          var index = j * _chunks[key].width.toInt() + i;
          // There are 4 bytes per float (height value)
          Ammo.heapF32[heightDataPtr + index * 4 >> 2] = terrainHeightMap[index];
        }
      }
      var terrainMeshShape = new HeightfieldTerrainShape(
        _chunks[key].width.toInt(), _chunks[key].depth.toInt(),
        heightDataPtr, 1.0,
        _chunks[key].getMinimumHeight(), _chunks[key].getMaximumHeight(),
        1, "PHY_FLOAT", false
      );

      var motionState = new DefaultMotionState(transform);
      var constructionInfo = new RigidBodyConstructionInfo(0.0, motionState, terrainMeshShape, new ammo.Vector3(0.0, 0.0, 0.0));
      var rigidBody = new RigidBody(constructionInfo);

      _dynamicsWorld.addRigidBody(rigidBody);
    }
  }

  // Cantor pairing function. Creates a unique natural number from the provided numbers.
  double generateCantor(double a, double b) => ((a + b) * (a + b + 1)) / 2.0 + b;

  void _updatePhysics(num delta) {
    _dynamicsWorld.stepSimulation(delta.toDouble(), 10);
  }

  Future _update(num delta) async {
    await _generateNewChunkIfRequired();
    _ya -= 0.0005;
    _xv += _xa;
    _yv += _ya;
    _zv += _za;
    _x += _xv;
    _y += _yv;
    _z += _zv;
    _xv *= 0.5;
    _zv *= 0.5;
    _xa *= 0.5;
    _za *= 0.5;
    if (_y < 0) {
      _y = 0.0;
      _xv = 0.0;
      _yv = 0.0;
      _zv = 0.0;
      _xa = 0.0;
      _ya = 0.0;
      _za = 0.0;
      _jumping = false;
    }
    if (_keyStates[' '] && !_jumping) {
      _yv += 0.2;
      _jumping = true;
    }
    if (_keyStates['w']) {
      _xa -= cos(_yRot + PI / 2.0) * _moveSpeed * delta;
      _za -= sin(_yRot + PI / 2.0) * _moveSpeed * delta;
    }
    if (_keyStates['s']) {
      _xa += cos(_yRot + PI / 2.0) * _moveSpeed * delta;
      _za += sin(_yRot + PI / 2.0) * _moveSpeed * delta;
    }
    if (_keyStates['a']) {
      _xa -= cos(_yRot) * _moveSpeed * delta;
      _za -= sin(_yRot) * _moveSpeed * delta;
    }
    if (_keyStates['d']) {
      _xa += cos(_yRot) * _moveSpeed * delta;
      _za += sin(_yRot) * _moveSpeed * delta;
    }
    for (var mouseMovement in _mouseBuffer) {
      var normalisedVerticalDirectionScalar = mouseMovement.verticalDirection == _VerticalMouseMovementDirection.Up ? -1 : 1;
      _xRot += _rotateSpeed * delta * mouseMovement.verticalDistance * normalisedVerticalDirectionScalar;
      var normalisedHorizontalDirectionScalar = mouseMovement.horizontalDirection == _HorizontalMouseMovementDirection.Left ? -1 : 1;
      _yRot += _rotateSpeed * delta * mouseMovement.horizontalDistance * normalisedHorizontalDirectionScalar;
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
      var vertShaderSource = (await HttpRequest.request('asset/shader/3d_vertex_shader.glsl')).responseText;
      var fragShaderSource = (await HttpRequest.request('asset/shader/3d_fragment_shader.glsl')).responseText;
      var program = new ProgramBuilder(_gameContext.gl)
        .addVertexShader(vertShaderSource)
        .addFragmentShader(fragShaderSource)
        .build();

      _programInfo = new ProgramInfo(program,
        _gameContext.gl.getAttribLocation(program, 'aVertexPosition'),
        _gameContext.gl.getAttribLocation(program, 'aTextureCoord'),
        _gameContext.gl.getAttribLocation(program, 'aVertexNormal'),
        _gameContext.gl.getUniformLocation(program, 'uProjectionMatrix'),
        _gameContext.gl.getUniformLocation(program, 'uModelViewMatrix'),
        _gameContext.gl.getUniformLocation(program, 'uNormalMatrix'),
        _gameContext.gl.getUniformLocation(program, 'uSampler'));
    } catch(e) {
      // 'e' is a ProgressEvent, not Error -- https://github.com/dart-lang/api.dartlang.org/issues/29.
      final error = 'Failed to load shader source files.';
      window.console.error(error);
      return new Future<String>.error(error);
    }

    _projectionMatrix = makePerspectiveMatrix(fovRadians, _gameContext.getCanvasAspectRatio(), 0.1, 1000.0);
    _sphereModel = new SphereModel.fromRadius(_gameContext.gl, 2.0);
    _initialiseAmmo();
  }

  static double _getHeightForPoint(SimplexNoise noise, double x, double z, List<double> elevationLevels) {
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
    var average = summedElevation / elevationLevels.fold(0.0, (double prev, current) => prev + current);
    return pow(average * 8.0, exponent).toDouble()  - 25.0;
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
        ev.movement.x > 0 ? _HorizontalMouseMovementDirection.Right : _HorizontalMouseMovementDirection.Left,
        ev.movement.y > 0 ? _VerticalMouseMovementDirection.Down : _VerticalMouseMovementDirection.Up,
        ev.movement.x.abs().toDouble(),
        ev.movement.y.abs().toDouble(),
      ));
    });
    _gameContext.correctCanvasProportions();
    await _initialiseResources();
    _gameContext.canvas.onMouseDown.listen((ev) => _gameContext.canvas.requestPointerLock());
    window.onMouseUp.listen((ev) =>  _addSphere());
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
  _MouseMovement(
    this.horizontalDirection,
    this.verticalDirection,
    this.horizontalDistance,
    this.verticalDistance
  );
}