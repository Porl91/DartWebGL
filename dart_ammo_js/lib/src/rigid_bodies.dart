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
  external Vector3 getLinearVelocity();
  external Vector3 getAngularVelocity();
  external void setSleepingThresholds(double linear, double angular);
  external void setLinearVelocity(Vector3 linearFactor);
  external void setAngularVelocity(Vector3 angularFactor);
}