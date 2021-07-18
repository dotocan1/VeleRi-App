(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[105],{

/***/ 2105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Registration)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/Registration.vue?vue&type=template&id=169545e3

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.onSubmit,
      onReset: _ctx.onReset
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        type: "name",
        modelValue: $data.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.name = $event),
        label: "Vase ime"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        type: "lastName",
        modelValue: $data.lastName,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.lastName = $event),
        label: "Vase prezime"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        modelValue: $data.email,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.email = $event),
        label: "Vas email"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        type: "password",
        modelValue: $data.password,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.password = $event),
        label: "Vasa sifra"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        label: "Submit",
        type: "submit",
        color: "primary"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        label: "Reset",
        type: "reset",
        color: "primary",
        flat: "",
        class: "q-ml-sm"
      })])]),
      _: 1
    }, 8, ["onSubmit", "onReset"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/Registration.vue?vue&type=script&lang=js
/* harmony default export */ const Registrationvue_type_script_lang_js = ({
  data() {
    return {
      email: '',
      password: '',
      name: '',
      lastName: ''
    };
  },

  methods: {
    registerUser() {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password).then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.$router.push('/Administration'); // ...
      });
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/Login/Registration.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 9 modules
var QInput = __webpack_require__(1206);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__(6114);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Login/Registration.vue



Registrationvue_type_script_lang_js.render = render

/* harmony default export */ const Registration = (Registrationvue_type_script_lang_js);
;




runtime_auto_import_default()(Registrationvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=105.js.map