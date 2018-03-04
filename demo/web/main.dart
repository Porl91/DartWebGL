import 'dart:async';
import 'dart:html';
import 'demo.dart';
import 'game_context.dart';
import 'package:dart_ammo_js/dart_ammo_js.dart';

Future main() async {
  var canvas = document.createElement('canvas') as CanvasElement;
  var gameContext = new GameContext(canvas, 0.5625, await AmmoUtility.create());
  new Demo(gameContext).start();
}