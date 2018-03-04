part of ammo;

@JS('Ammo.btCollisionWorld')
abstract class CollisionWorld {
}

@JS('Ammo.btDynamicsWorld')
abstract class DynamicsWorld {
}

@JS('Ammo.btDiscreteDynamicsWorld')
class DiscreteDynamicsWorld {
  external DiscreteDynamicsWorld(
    CollisionDispatcher dispatcher, 
    DbvtBroadphase overlappingPairCache, 
    SequentialImpulseConstraintSolver solver, 
    CollisionConfiguration collisionConfiguration
  );

  external void setGravity(Vector3 gravity);
  external void addRigidBody(RigidBody body);
  // TODO: Look into whether a non-generated method can provide defaults for the latter arguments.
  external void stepSimulation(double timeStep, int maxSubSteps);
}