part of ammo;

@JS('Ammo.btCollisionDispatcher')
abstract class Dispatcher {
}

@JS('Ammo.btCollisionDispatcher')
class CollisionDispatcher extends Dispatcher {
  external CollisionDispatcher(CollisionConfiguration collisionConfiguration);
}