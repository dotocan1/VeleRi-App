(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[97],{

/***/ 7097:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/Registration.vue?vue&type=template&id=30f13a96&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-30f13a96");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-30f13a96");

const _hoisted_1 = {
  class: "row wrap justify-center items-center content-center"
};
const _hoisted_2 = {
  class: "col q-ma-lg",
  style: {
    "max-width": "400px"
  }
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "text-h6"
}, "Registracija", -1);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [_hoisted_3]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
          onSubmit: $options.registerUser,
          onReset: $options.goBack
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            filled: "",
            type: "name",
            modelValue: $data.name,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.name = $event),
            label: "Vase ime",
            "lazy-rules": "",
            rules: [val => !!val || 'Ovo polje ne moze ostati prazno']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            filled: "",
            type: "lastName",
            modelValue: $data.lastName,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.lastName = $event),
            label: "Vase prezime",
            "lazy-rules": "",
            rules: [val => !!val || 'Ovo polje ne moze ostati prazno']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            filled: "",
            modelValue: $data.email,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.email = $event),
            label: "Vas email",
            "lazy-rules": "",
            rules: [val => !!val || 'Ovo polje ne moze ostati prazno', val => $data.emailPattern.test(val) || 'Please type valid email']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            filled: "",
            type: "password",
            modelValue: $data.password,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.password = $event),
            label: "Vasa sifra",
            "lazy-rules": "",
            rules: [val => !!val || 'Ovo polje ne moze ostati prazno', val => val.length > 5 || 'Sifra mora sadrzavati barem 6 znamenka']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, null, {
            default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              label: "Potvrdi",
              type: "submit",
              color: "primary"
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              label: "Natrag",
              type: "reset",
              color: "primary",
              flat: "",
              class: "q-ml-sm"
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["onSubmit", "onReset"])]),
        _: 1
      })]),
      _: 1
    })])])]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/Login/Registration.vue?vue&type=template&id=30f13a96&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login/Registration.vue?vue&type=script&lang=js
/* harmony default export */ const Registrationvue_type_script_lang_js = ({
  data() {
    return {
      email: '',
      password: '',
      name: '',
      lastName: '',
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    };
  },

  methods: {
    registerUser() {
      function generateUID() {
        return Math.random().toString(36).substr(2, 9);
      }

      this.$auth.signOut();
      this.$auth.createUserWithEmailAndPassword(this.email, this.password).then(userCredential => {
        // Signed in
        this.$db.collection('UsersData').doc(generateUID()).set({
          Name: this.name,
          LastName: this.lastName,
          Email: this.email,
          Telephone: '',
          Cabinet: '',
          Consultations: '',
          Carrier: '',
          UserId: this.$auth.currentUser.uid
        }).then(() => {
          this.$db.collection('Menu').doc(generateUID()).set({
            isEmail: true,
            isTelephone: true,
            isCabinet: true,
            isConsultations: true,
            isCarrier: true,
            UserId: this.$auth.currentUser.uid
          }).then(() => {
            console.log('Should push now ngl');
            this.$router.push('/Administration');
          });
        });
      });
    },

    goBack() {
      this.$router.push('/');
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/Login/Registration.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 9 modules
var QInput = __webpack_require__(1206);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__(6114);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Login/Registration.vue




;
Registrationvue_type_script_lang_js.render = render
Registrationvue_type_script_lang_js.__scopeId = "data-v-30f13a96"

/* harmony default export */ const Registration = (Registrationvue_type_script_lang_js);
;







runtime_auto_import_default()(Registrationvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=97.js.map