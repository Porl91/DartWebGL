import 'dart:html';
import 'dart:web_gl' as GL;

class TextureInfo {
  GL.Texture _texture;
  ImageElement _image;

  TextureInfo.fromImage(GL.RenderingContext gl, ImageElement image) {
    var texture = gl.createTexture();
    gl.bindTexture(GL.TEXTURE_2D, texture);
    // TODO: Add parameter for this
    gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, image);

    if (numberIsPowerOf2(image.width) && numberIsPowerOf2(image.height)) {
      gl.generateMipmap(GL.TEXTURE_2D);
    } else {
      gl.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
      gl.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
      gl.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
    }

    this._texture = texture;
    this._image = image;
  }

  static bool numberIsPowerOf2(int source) => source & (source - 1) == 0;

  GL.Texture get texture => _texture;
  ImageElement get image => _image;
}
