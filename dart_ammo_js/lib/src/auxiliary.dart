part of ammo;

@JS('Ammo.btTransform')
class Transform {
  external Transform();
  external void setIdentity();
  external Vector3 getOrigin();
  external void setOrigin(Vector3 origin);
  external Quaternion getRotation();
  external void setRotation(Quaternion rotation);
}

@JS('Ammo.btVector3')
class Vector3 {
  external Vector3(double x, double y, double z);
  external double x();
  external double y();
  external double z();
}

@JS('Ammo.btQuaternion')
class Quaternion {
  external Quaternion(double x, double y, double z, double w);
  external double x();
  external double y();
  external double z();
  external double w();
}