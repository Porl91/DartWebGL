part of ammo;

@JS('Ammo.btConstraintSolver')
abstract class ConstraintSolver {
}

@JS('Ammo.btSequentialImpulseConstraintSolver')
class SequentialImpulseConstraintSolver extends ConstraintSolver {
  external SequentialImpulseConstraintSolver();
}