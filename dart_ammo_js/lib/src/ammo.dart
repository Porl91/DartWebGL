part of ammo;

typedef void OnAmmoLoad(AmmoInstance a);

@JS('Ammo')
external AmmoInstance _ammo();

@JS()
abstract class AmmoInstance {
  external void then(OnAmmoLoad callback);
}

class AmmoUtility {
  static Future<AmmoInstance> create() async {
    var completer = new Completer<AmmoInstance>();
    _ammo().then(allowInterop((AmmoInstance instance) {
      completer.complete(instance);
    }));
    return completer.future;
  }
}

@JS()
class Ammo {
  @JS('_malloc')
  external static int malloc(int sizeInBytes);

  @JS('HEAPF32')
  external static List<double> get heapF32;

  @JS('HEAPF32')
  external static set heapF32(List<double> a);
  
  @JS('destroy')
  external static void destroy(Object obj);
}