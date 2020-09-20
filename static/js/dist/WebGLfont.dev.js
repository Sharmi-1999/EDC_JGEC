"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

global.THREE = require("three");
var THREE = global.THREE;

var OrbitControls = require("three-orbit-controls")(THREE);

var loadFont = require("load-bmfont");

var createGeometry = require("three-bmfont-text");

var MSDFShader = require("three-bmfont-text/shaders/msdf"); // Font assets


var fontFile = require("../../assets/Lato-Black.fnt");

var fontAtlas = require("../../assets/Lato-Black.png"); // Nice colors


var colors = require("nice-color-palettes");

var palette = colors[73];
var background = palette[0];
var fontColor = parseInt(palette[2].replace("#", "0x"));

var WebGLFont =
/*#__PURE__*/
function () {
  function WebGLFont() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WebGLFont);

    // Options obj
    this.options = opts; // Variables

    this.vars = {
      word: this.options.word,
      position: _toConsumableArray(this.options.position),
      rotation: _toConsumableArray(this.options.rotation),
      zoom: this.options.zoom,
      vertex: this.options.vertex,
      fragment: this.options.fragment
    }; // Scene

    this.scene = new THREE.Scene(); // Camera

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000);
    this.camera.position.z = this.vars.zoom; // Renderer

    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#app"),
      antialias: true
    });
    this.renderer.setClearColor(background);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio); // Clock

    this.clock = new THREE.Clock(); // Controls

    this.controls = new OrbitControls(this.camera, this.renderer.domElement); // Load font files to initialize renderer

    this.loadBMF();
  }

  _createClass(WebGLFont, [{
    key: "loadBMF",
    value: function loadBMF() {
      var _this = this;

      // Create geometry of packed glyphs
      loadFont(fontFile, function (err, font) {
        _this.geometry = createGeometry({
          font: font,
          text: _this.vars.word
        });
      }); // Load texture containing font glyphs

      this.loader = new THREE.TextureLoader();
      this.loader.load(fontAtlas, function (texture) {
        setTimeout(function () {
          _this.init(_this.geometry, texture);

          _this.animate();
        }, 1500);
      });
    }
  }, {
    key: "init",
    value: function init(geometry, texture) {
      var _this2 = this;

      this.createMesh(geometry, texture);
      this.onResize();
      window.addEventListener("resize", function () {
        return _this2.onResize();
      }, false);
      this.render();
    }
  }, {
    key: "createMesh",
    value: function createMesh(geometry, texture) {
      var _this$mesh$position, _this$mesh$rotation;

      // Material
      this.material = new THREE.RawShaderMaterial(MSDFShader({
        vertexShader: this.vars.vertex,
        fragmentShader: this.vars.fragment,
        color: fontColor,
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        negate: false
      })); // Create time variable from prestablished shader uniforms

      this.material.uniforms.time = {
        type: "f",
        value: 0.0
      }; // Mesh

      this.mesh = new THREE.Mesh(geometry, this.material);

      (_this$mesh$position = this.mesh.position).set.apply(_this$mesh$position, _toConsumableArray(this.vars.position));

      (_this$mesh$rotation = this.mesh.rotation).set.apply(_this$mesh$rotation, _toConsumableArray(this.vars.rotation));

      this.scene.add(this.mesh);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      w < 640 ? this.camera.position.z = 250 : this.camera.position.z = this.vars.zoom;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    }
  }, {
    key: "animate",
    value: function animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      // Update time uniform
      this.mesh.material.uniforms.time.value = this.clock.getElapsedTime();
      this.mesh.material.uniformsNeedUpdate = true;
      this.renderer.render(this.scene, this.camera);
    }
  }]);

  return WebGLFont;
}();

exports["default"] = WebGLFont;