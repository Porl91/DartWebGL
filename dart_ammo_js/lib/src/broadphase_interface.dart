part of ammo;

@JS('Ammo.btBroadphaseInterface')
abstract class BroadphaseInterface {
}

@JS('Ammo.btDbvtBroadphase')
class DbvtBroadphase extends BroadphaseInterface {
  external DbvtBroadphase();
}