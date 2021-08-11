(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[292],{

/***/ 8292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Professor)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Professor.vue?vue&type=template&id=7969b2c6&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-7969b2c6");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-7969b2c6");

const _hoisted_1 = {
  class: "row justify-center q-pa-md"
};
const _hoisted_2 = {
  class: "col-12",
  style: {
    "max-width": "400px"
  }
};
const _hoisted_3 = {
  class: "q-pa-md q-gutter-sm"
};
const _hoisted_4 = {
  class: "text-h5 q-md-lg"
};
const _hoisted_5 = {
  key: 1,
  class: "text-h6"
};
const _hoisted_6 = {
  key: 2,
  class: "text-h6"
};
const _hoisted_7 = {
  key: 3,
  class: "text-h6"
};
const _hoisted_8 = {
  key: 4,
  class: "text-h6"
};
const _hoisted_9 = {
  key: 5,
  class: "text-h6"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "max-width": "400px"
      },
      class: "bg-grey-2"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [$data.isImage ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_img, {
          key: 0,
          style: {
            "max-height": "400px"
          },
          src: $data.url
        }, null, 8, ["src"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, " Ime i prezime profesora: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.name) + " " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.lastName), 1), $data.isEmail ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_5, "E-mail: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.email), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.isTelephone ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_6, "Broj telefona: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.telephone), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.isCabinet ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_7, "Broj kabineta: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.cabinet), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.isConsultations ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_8, " Konzultacije: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.consultations), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.isCarrier ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_9, "Nositelj kolegija: " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.carrier), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    })])])])]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/Professor.vue?vue&type=template&id=7969b2c6&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Professor.vue?vue&type=script&lang=js
/* harmony default export */ const Professorvue_type_script_lang_js = ({
  data() {
    return {
      name: 'Ime',
      lastName: 'Prezime',
      email: '',
      isEmail: true,
      telephone: '',
      isTelephone: true,
      cabinet: '',
      isCabinet: true,
      consultations: '',
      isConsultations: true,
      carrier: '',
      isCarrier: true,
      isImage: false,
      url: ''
    };
  },

  mounted() {
    // id je ovdje prethodno iscitan iz qr koda
    const id = this.$route.params.id;
    const userRef = this.$db.collection('UsersData').where('UserId', '==', id);
    userRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const userData = doc.data();
        this.name = userData.Name;
        this.lastName = userData.LastName;
        this.email = userData.Email;
        this.telephone = userData.Telephone;
        this.cabinet = userData.Cabinet;
        this.consultations = userData.Consultations;
        this.carrier = userData.Carrier;
        this.url = userData.DownloadURL;
      });
    }).catch(error => {
      console.log('Error getting documents: ', error);
    });
    const menuRef = this.$db.collection('Menu').where('UserId', '==', id);
    menuRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const menuData = doc.data();
        this.isEmail = menuData.isEmail;
        this.isTelephone = menuData.isTelephone;
        this.isCabinet = menuData.isCabinet;
        this.isConsultations = menuData.isConsultations;
        this.isCarrier = menuData.isCarrier;
        this.isImage = menuData.isImage;

        if (this.url !== '' && this.isImage === true) {
          this.isImage = true;
        }
      });
    }).catch(error => {
      console.log('Error getting documents: ', error);
    });
  }

});
;// CONCATENATED MODULE: ./src/pages/Professor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Professor.vue




;
Professorvue_type_script_lang_js.render = render
Professorvue_type_script_lang_js.__scopeId = "data-v-7969b2c6"

/* harmony default export */ const Professor = (Professorvue_type_script_lang_js);
;




runtime_auto_import_default()(Professorvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QImg: QImg/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=292.js.map