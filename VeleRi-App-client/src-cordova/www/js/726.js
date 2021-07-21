(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[726],{

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Administration)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Administration.vue?vue&type=template&id=19085a1b&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-19085a1b");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-19085a1b");

const _hoisted_1 = {
  class: "row"
};

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Sign out ");

const _hoisted_3 = {
  class: "row"
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "col-10"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", {
  class: "text-h4 q-mt-md"
}, "Unesite osobne podatke:")], -1);

const _hoisted_5 = {
  class: "col-12 q-mb-md"
};
const _hoisted_6 = {
  class: "col-12 q-mb-md"
};
const _hoisted_7 = {
  class: "col-12 q-mb-md"
};
const _hoisted_8 = {
  class: "col-12 q-mb-md"
};
const _hoisted_9 = {
  class: "col-2 q-mb-md"
};

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Spremi");

const _hoisted_11 = {
  class: "col-1 q-ml-md"
};

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Izmijeni");

const _hoisted_13 = {
  class: "row"
};

const _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "col-10"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", {
  class: "text-h4 q-mt-md"
}, "Omogucite vidljivost podataka:")], -1);

const _hoisted_15 = {
  class: "col-12"
};
const _hoisted_16 = {
  class: "col-12"
};
const _hoisted_17 = {
  class: "col-12"
};
const _hoisted_18 = {
  class: "col-12"
};
const _hoisted_19 = {
  class: "col-12"
};

const _hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "row"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", {
  class: "text-h4 q-mt-md col-12"
}, "Pripadni QR kod:"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
  id: "qr-code",
  class: "col-6 justify-center items-center",
  alt: ""
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("a", {
  id: "img-download",
  download: "qr-code.png"
}, "Download image")], -1);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-checkbox");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: $options.logout
    }, {
      default: _withId(() => [_hoisted_2]),
      _: 1
    }, 8, ["onClick"])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      outlined: "",
      modelValue: $data.email,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.email = $event),
      label: "Unesite email",
      disable: $data.disabledInput
    }, null, 8, ["modelValue", "disable"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      outlined: "",
      modelValue: $data.telephone,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.telephone = $event),
      label: "Unesite broj telefona",
      disable: $data.disabledInput
    }, null, 8, ["modelValue", "disable"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      outlined: "",
      modelValue: $data.cabinet,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.cabinet = $event),
      label: "Unesite pripadni kabinet",
      disable: $data.disabledInput
    }, null, 8, ["modelValue", "disable"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      outlined: "",
      modelValue: $data.carrier,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.carrier = $event),
      label: "Unesite kolegije gdje je profesor nositelj",
      disable: $data.disabledInput
    }, null, 8, ["modelValue", "disable"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_9, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: $options.submit
    }, {
      default: _withId(() => [_hoisted_10]),
      _: 1
    }, 8, ["onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_11, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: $options.editForms
    }, {
      default: _withId(() => [_hoisted_12]),
      _: 1
    }, 8, ["onClick"])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_13, [_hoisted_14, (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_15, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      modelValue: $data.emailCB,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.emailCB = $event),
      label: "Vidljiv email",
      onClick: $options.submitCheckboxes
    }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_16, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      modelValue: $data.telephoneCB,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.telephoneCB = $event),
      label: "Vidljiv broj telefona",
      onClick: $options.submitCheckboxes
    }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_17, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      modelValue: $data.cabinetCB,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.cabinetCB = $event),
      label: "Vidljiv kabinet",
      onClick: $options.submitCheckboxes
    }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_18, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      modelValue: $data.consultationsCB,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $data.consultationsCB = $event),
      label: "Vidljivo vrijeme konzultacija",
      onClick: $options.submitCheckboxes
    }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_19, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      modelValue: $data.carrierCB,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.carrierCB = $event),
      label: "Vidljive informacije o nositelju kolegija",
      onClick: $options.submitCheckboxes
    }, null, 8, ["modelValue", "onClick"])]), _hoisted_20])]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/Administration.vue?vue&type=template&id=19085a1b&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Administration.vue?vue&type=script&lang=js

/* harmony default export */ const Administrationvue_type_script_lang_js = ({
  data() {
    return {
      emailCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      telephoneCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      cabinetCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      consultationsCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      carrierCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      email: '',
      telephone: '',
      cabinet: '',
      consultations: '',
      carrier: '',
      menuId: '',
      usersDataId: '',
      disabledInput: true
    };
  },

  methods: {
    logout() {
      this.$auth.signOut().then(this.$router.push('/'));
    },

    submit() {
      this.disabledInput = true;
      const docRef = this.$db.collection('UsersData').doc(this.usersDataId);
      return docRef.update({
        Email: this.email,
        Telephone: this.telephone,
        Cabinet: this.cabinet,
        Consultations: this.consultations,
        Carrier: this.carrier
      });
    },

    editForms() {
      this.disabledInput = false;
    },

    submitCheckboxes() {
      // updating data
      this.disabledInput = true;
      const docRef = this.$db.collection('Menu').doc(this.menuId);
      return docRef.update({
        isEmail: this.emailCB,
        isTelephone: this.telephoneCB,
        isCabinet: this.cabinetCB,
        isConsultations: this.consultationsCB,
        isCarrier: this.carrierCB
      });
    }

  },

  mounted() {
    const userId = this.$auth.currentUser.uid;
    const menuRef = this.$db.collection('Menu').where('UserId', '==', userId);
    const userRef = this.$db.collection('UsersData').where('UserId', '==', userId);
    menuRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = doc.data(); // get menu id

        this.menuId = doc.id; // This modifies the checkboxes

        this.emailCB = !!data.isEmail;
        this.telephoneCB = !!data.isTelephone;
        this.cabinetCB = !!data.isCabinet;
        this.consultationsCB = !!data.isConsultations;
        this.carrierCB = !!data.isCarrier;
      });
    }).catch(error => {
      console.log('Error getting documents: ', error);
    });
    userRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // get usersData id
        const data = doc.data();
        this.usersDataId = doc.id; // This fills in the input forms

        this.email = data.Email;
        this.telephone = data.Telephone;
        this.cabinet = data.Cabinet;
        this.consultations = data.Consultations;
        this.carrier = data.Carrier;
      });
    }); // qr code picture

    const img = document.getElementById('qr-code');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`;
    const btnDownloadImg = document.getElementById('img-download');
    btnDownloadImg.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`;
  }

});
;// CONCATENATED MODULE: ./src/pages/Administration.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 3 modules
var QBtn = __webpack_require__(6114);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 9 modules
var QInput = __webpack_require__(1206);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js + 3 modules
var QCheckbox = __webpack_require__(1420);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Administration.vue




;
Administrationvue_type_script_lang_js.render = render
Administrationvue_type_script_lang_js.__scopeId = "data-v-19085a1b"

/* harmony default export */ const Administration = (Administrationvue_type_script_lang_js);
;




runtime_auto_import_default()(Administrationvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QBtn: QBtn/* default */.Z,QInput: QInput/* default */.Z,QCheckbox: QCheckbox/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=726.js.map