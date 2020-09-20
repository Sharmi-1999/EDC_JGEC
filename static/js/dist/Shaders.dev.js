"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shaders = void 0;

var _demo = _interopRequireDefault(require("./vertex/demo-01.glsl"));

var _demo2 = _interopRequireDefault(require("./vertex/demo-02.glsl"));

var _demo3 = _interopRequireDefault(require("./vertex/demo-03.glsl"));

var _demo4 = _interopRequireDefault(require("./vertex/demo-04.glsl"));

var _demo5 = _interopRequireDefault(require("./vertex/demo-05.glsl"));

var _demo6 = _interopRequireDefault(require("./vertex/demo-06.glsl"));

var _demo7 = _interopRequireDefault(require("./fragment/demo-01.glsl"));

var _demo8 = _interopRequireDefault(require("./fragment/demo-02.glsl"));

var _demo9 = _interopRequireDefault(require("./fragment/demo-03.glsl"));

var _demo10 = _interopRequireDefault(require("./fragment/demo-04.glsl"));

var _demo11 = _interopRequireDefault(require("./fragment/demo-05.glsl"));

var _demo12 = _interopRequireDefault(require("./fragment/demo-06.glsl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var shaders = [{
  vertex: _demo["default"],
  fragment: _demo7["default"]
}, {
  vertex: _demo2["default"],
  fragment: _demo8["default"]
}, {
  vertex: _demo3["default"],
  fragment: _demo9["default"]
}, {
  vertex: _demo4["default"],
  fragment: _demo10["default"]
}, {
  vertex: _demo5["default"],
  fragment: _demo11["default"]
}, {
  vertex: _demo6["default"],
  fragment: _demo12["default"]
}];
exports.shaders = shaders;