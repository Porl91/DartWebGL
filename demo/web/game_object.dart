import 'models/mesh.dart';
import 'package:dart_ammo_js/dart_ammo_js.dart';

class GameObject {
  // TODO: Cache model matrix from rigid body transform.
  final Mesh _mesh;
  final RigidBody _rigidBody;
  GameObject(this._mesh, this._rigidBody);
  Mesh get mesh => _mesh;
  RigidBody get rigidBody => _rigidBody;
}
