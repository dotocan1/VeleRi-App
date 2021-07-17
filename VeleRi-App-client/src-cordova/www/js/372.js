(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[372],{

/***/ 4372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginIndex)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/LoginIndex.vue?vue&type=template&id=3a9d7e74

const _hoisted_1 = {
  class: "q-pa-lg row justify-center"
};
const _hoisted_2 = {
  class: "col",
  style: {
    "max-width": "400px"
  }
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "text-h6"
}, " Login ", -1);

const _hoisted_4 = {
  class: "q-gutter-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
    onSubmit: $options.onLogin
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          filled: "",
          type: "email",
          modelValue: $data.email,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.email = $event),
          label: "Your email *",
          hint: "Email to login",
          "lazy-rules": "",
          rules: [val => $data.emailPattern.test(val) || 'Please type valid email']
        }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          filled: "",
          type: "password",
          modelValue: $data.password,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.password = $event),
          label: "Password *",
          hint: "Password to login",
          "lazy-rules": "",
          rules: [val => val && val.length > 0 || 'Please type password']
        }, null, 8, ["modelValue", "rules"])])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
        align: "right"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          label: "Login",
          type: "submit",
          color: "primary"
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["onSubmit"])])]);
}
;// CONCATENATED MODULE: ./src/pages/Login/LoginIndex.vue?vue&type=template&id=3a9d7e74

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/LoginIndex.vue?vue&type=script&lang=js
/* harmony default export */ const LoginIndexvue_type_script_lang_js = ({
  name: 'LoginIndex',

  data() {
    return {
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
      email: null,
      password: null
    };
  },

  mounted: function () {
    if (this.$auth.currentUser) {
      this.$router.push('/Administration');
    }
  },
  methods: {
    onLogin() {
      this.$auth.signInWithEmailAndPassword(this.email, this.password).then(response => {
        this.$router.push('/Administration');
      }).catch(error => {
        console.log(error);
        this.$q.notify({
          type: 'negative',
          message: 'Login failed.'
        });
      });
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/Login/LoginIndex.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 9 modules
var QInput = __webpack_require__(1206);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__(6114);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Login/LoginIndex.vue



LoginIndexvue_type_script_lang_js.render = render

/* harmony default export */ const LoginIndex = (LoginIndexvue_type_script_lang_js);
;






runtime_auto_import_default()(LoginIndexvue_type_script_lang_js, 'components', {QForm: QForm/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QInput: QInput/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=372.js.map