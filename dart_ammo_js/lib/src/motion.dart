part of ammo;

@JS('Ammo.btMotionState')
class MotionState {
  external void getWorldTransform(Transform worldTrans);
  external void setWorldTransform(Transform worldTrans);
}

@JS('Ammo.btDefaultMotionState')
class DefaultMotionState extends MotionState {
  external DefaultMotionState(Transform transform);
}