(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[685],{

/***/ 8685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ QRCodeScanner)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./src/assets/qr-code-scanner-no-qr.png
var qr_code_scanner_no_qr = __webpack_require__(1013);
var qr_code_scanner_no_qr_default = /*#__PURE__*/__webpack_require__.n(qr_code_scanner_no_qr);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/QRCodeScanner.vue?vue&type=template&id=061082fc&scoped=true



const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-061082fc");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-061082fc");

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "transparent-div"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
  src: (qr_code_scanner_no_qr_default()),
  class: "qr-scanner fixed-center",
  alt: ""
})], -1);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: _withId(() => [_hoisted_1]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/QRCodeScanner.vue?vue&type=template&id=061082fc&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js + 3 modules
var vue_router_esm_bundler = __webpack_require__(8493);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/QRCodeScanner.vue?vue&type=script&lang=js

/* harmony default export */ const QRCodeScannervue_type_script_lang_js = ({
  mounted() {
    // pocetno destroyanje qr da se sacuvaju resursi
    const destroyQR = async function () {
      window.QRScanner.destroy();
    };

    const $router = (0,vue_router_esm_bundler/* useRouter */.tv)(); // Make the webview transparent so the video preview is visible behind it.

    window.QRScanner.show(); // Be sure to make any opaque HTML elements transparent here to avoid
    // covering the video.

    const callback = function (err, contents) {
      if (err) {
        alert(err._message);
      } else {
        destroyQR().then(function () {
          $router.push(`/Professor/${contents}`);
        });
      } // this pushes to scanned content

    };

    window.QRScanner.scan(callback);
  }

});
;// CONCATENATED MODULE: ./src/pages/QRCodeScanner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/QRCodeScanner.vue




;
QRCodeScannervue_type_script_lang_js.render = render
QRCodeScannervue_type_script_lang_js.__scopeId = "data-v-061082fc"

/* harmony default export */ const QRCodeScanner = (QRCodeScannervue_type_script_lang_js);
;

runtime_auto_import_default()(QRCodeScannervue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ }),

/***/ 1013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/qr-code-scanner-no-qr.png";

/***/ })

}]);
//# sourceMappingURL=685.js.map