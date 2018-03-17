import 'mesh.dart';
import 'texture_info.dart';

class Model {
  final Mesh _mesh;
  final TextureInfo _texture;
  Model(this._mesh, this._texture);
  Mesh get mesh => _mesh;
  TextureInfo get texture => _texture;
}
