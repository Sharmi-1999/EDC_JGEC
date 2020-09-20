"use strict";

require("./css/style.css");

var _WebGLFont = _interopRequireDefault(require("./WebGLFont"));

var _shaders = require("./shaders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var type = new _WebGLFont["default"]({
  word: "DISTORT",
  position: [-90, -10, 0],
  rotation: [Math.PI, 0, 0],
  zoom: 150,
  vertex: _shaders.shaders[3].vertex,
  fragment: _shaders.shaders[3].fragment
});