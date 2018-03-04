import 'model_info.dart';
import 'package:dart_ammo_js/dart_ammo_js.dart';

class GameObject {
  // TODO: Cache model matrix from rigid body transform.
  final ModelInfo _model;
  final RigidBody _rigidBody;
  GameObject(this._model, this._rigidBody);
  ModelInfo get model => _model;
  RigidBody get rigidBody => _rigidBody;
}