part of ammo;

@JS('Ammo.btRigidBodyConstructionInfo')
class RigidBodyConstructionInfo {
  external RigidBodyConstructionInfo(double mass, MotionState motionState, CollisionShape shape, Vector3 localInertia);
}

@JS('Ammo.btCollisionObject')
abstract class CollisionObject {
  external CollisionShape getCollisionShape();
}

@JS('Ammo.btRigidBody')
class RigidBody extends CollisionObject {
  external RigidBody(RigidBodyConstructionInfo constructionInfo);
  external MotionState getMotionState();
  external void setSleepingThresholds(double linear, double angular);
}