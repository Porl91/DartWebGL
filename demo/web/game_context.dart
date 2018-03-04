import 'dart:async';
import 'dart:html';
import 'dart:web_gl';

import 'package:dart_ammo_js/dart_ammo_js.dart';

class GameContext {
	final CanvasElement canvas;
	final double idealAspectRatio;
  final AmmoInstance ammo;
	RenderingContext _gl;

  RenderingContext get gl => _gl;

	GameContext(this.canvas, this.idealAspectRatio, this.ammo) {
    _gl = _getRenderingContext();
    if (_gl == null)
      throw new UnsupportedError('Browser does not support WebGL');
		document.body.append(canvas);
	}

  RenderingContext _getRenderingContext() {
    var context = canvas.getContext('experimental-webgl');
    if (context == null)
      context = canvas.getContext('webgl');
    return context as RenderingContext;
  }

	void correctCanvasProportions() {
    var actualAspectRatio = window.innerHeight / window.innerWidth;

    // Normal monitor
    if (actualAspectRatio <= idealAspectRatio) {
      canvas.width = window.innerHeight ~/ idealAspectRatio;
      canvas.height = window.innerHeight;
    } else { // Nokia 3310
      canvas.width = window.innerWidth;
      canvas.height = (window.innerWidth * idealAspectRatio).toInt();
    }

    // Calculate & apply margins to keep in centre
    var marginLeft = (window.innerWidth - canvas.width) / 2;
    var marginTop = (window.innerHeight - canvas.height) / 2;
    canvas.style.marginLeft = marginLeft.toString();
    canvas.style.marginTop = marginTop.toString();
  }

  double getCanvasAspectRatio() {
    if (canvas == null)
      return 1.0;
    return canvas.width / canvas.height.toDouble();
  }

	Future<ImageElement> loadImage(String url) async {
    var newImage = document.createElement('img') as ImageElement;
    newImage.src = url;
    return (await newImage.onLoad.first).currentTarget as ImageElement;
  }
}