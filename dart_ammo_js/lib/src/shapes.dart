part of ammo;

@JS('Ammo.btCollisionShape')
abstract class CollisionShape {
  external void calculateLocalInertia(double mass, Vector3 localInertia);
  external void setLocalScaling(Vector3 scaling);
  external void setMargin(double margin);
}

@JS('Ammo.btConvexShape')
abstract class ConvexShape extends CollisionShape {
}

@JS('Ammo.btConvexInternalShape')
abstract class ConvexInternalShape extends ConvexShape {
}

@JS('Ammo.btConcaveShape')
abstract class ConcaveShape extends CollisionShape {
}

@JS('Ammo.btPolyhedralConvexShape')
abstract class PolyhedralConvexShape extends ConvexInternalShape {
  external bool isInside(Vector3 point, double tolerance);
}

@JS('Ammo.btBoxShape')
class BoxShape extends PolyhedralConvexShape {
  external BoxShape(Vector3 extents);
  external Vector3 getHalfExtentsWithMargin();
}

@JS('Ammo.btSphereShape')
class SphereShape extends ConvexInternalShape {
  external SphereShape(double radius);
}

@JS('Ammo.btHeightfieldTerrainShape')
class HeightfieldTerrainShape extends ConcaveShape {
  external HeightfieldTerrainShape(
    int heightStickWidth, int heightStickLength, 
    int heightFieldData, double heightScale, 
    double minHeight, double maxHeight, 
    int upAxis, String heightDataType, bool flipQuadEdges
  );
}

@JS('Ammo.btStaticPlaneShape')
class StaticPlaneShape extends ConcaveShape {
  external StaticPlaneShape(Vector3 planeNormal, double planeConstant);
  external void getAabb(Transform transform, Vector3 aabbMin, Vector3 aabbMax);
}