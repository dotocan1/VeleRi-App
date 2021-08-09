(self["webpackChunkveleri_app"] = self["webpackChunkveleri_app"] || []).push([[882],{

/***/ 5882:
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
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Administration.vue?vue&type=template&id=07a236d9&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-07a236d9");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-07a236d9");

const _hoisted_1 = {
  class: "q-pa-md q-gutter-sm"
};
const _hoisted_2 = {
  class: "text-h5"
};
const _hoisted_3 = {
  class: "row justify-center q-pa-md"
};
const _hoisted_4 = {
  class: "col-12",
  style: {
    "max-width": "400px"
  }
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "text-h5 q-mt-md"
}, "Unesite osobne podatke:", -1);

const _hoisted_6 = {
  class: "col-12 q-mt-md",
  style: {
    "max-width": "400px"
  }
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "text-h5 q-mt-md"
}, "Odredite vidljivost podataka:", -1);

const _hoisted_8 = {
  class: "col-12 q-mt-md",
  style: {
    "text-align": "center"
  }
};

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
  class: "text-h5 q-mt-md"
}, "Pripadni QR kod:", -1);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-banner");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_file = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-file");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-checkbox");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_banner, {
      class: "bg-red-7 text-black"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, "Dobrodošli nazad, " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.name) + " " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.lastName) + "!", 1)]),
      _: 1
    })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "max-width": "400px"
      },
      class: "bg-grey-2"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [_hoisted_5]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          outlined: "",
          modelValue: $data.email,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.email = $event),
          label: "Unesite email",
          disable: $data.disabledInput
        }, null, 8, ["modelValue", "disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          class: "q-mt-sm",
          outlined: "",
          modelValue: $data.telephone,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.telephone = $event),
          label: "Unesite broj telefona",
          disable: $data.disabledInput
        }, null, 8, ["modelValue", "disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          class: "q-mt-sm",
          outlined: "",
          modelValue: $data.consultations,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.consultations = $event),
          label: "Unesite vrijeme konzultacija",
          disable: $data.disabledInput
        }, null, 8, ["modelValue", "disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          class: "q-mt-sm",
          outlined: "",
          modelValue: $data.cabinet,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.cabinet = $event),
          label: "Unesite pripadni kabinet",
          disable: $data.disabledInput
        }, null, 8, ["modelValue", "disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          class: "q-mt-sm",
          outlined: "",
          modelValue: $data.carrier,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.carrier = $event),
          label: "Unesite kolegije gdje je profesor nositelj",
          disable: $data.disabledInput
        }, null, 8, ["modelValue", "disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_file, {
          filled: "",
          class: "q-mt-md",
          "bottom-slots": "",
          modelValue: $data.pictureUpload,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $data.pictureUpload = $event),
          label: "Odaberite ili izmijenite sliku",
          counter: "",
          disable: $data.disabledInput
        }, {
          prepend: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "cloud_upload",
            onClick: _cache[6] || (_cache[6] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => {}, ["stop"]))
          })]),
          append: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "close",
            onClick: _cache[7] || (_cache[7] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)($event => $data.pictureUpload = null, ["stop"])),
            class: "cursor-pointer"
          })]),
          _: 1
        }, 8, ["modelValue", "disable"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
        align: "right"
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "primary",
          onClick: $options.submit,
          label: "Spremi"
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "primary",
          onClick: $options.editForms,
          label: "Izmijeni"
        }, null, 8, ["onClick"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "max-width": "400px"
      },
      class: "bg-grey-2"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [_hoisted_7]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.imageCB,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.imageCB = $event),
        label: "Vidljiva slika profila",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.emailCB,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $data.emailCB = $event),
        label: "Vidljiv email",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.telephoneCB,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => $data.telephoneCB = $event),
        label: "Vidljiv broj telefona",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.cabinetCB,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => $data.cabinetCB = $event),
        label: "Vidljiv kabinet",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.consultationsCB,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => $data.consultationsCB = $event),
        label: "Vidljivo vrijeme konzultacija",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
        modelValue: $data.carrierCB,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => $data.carrierCB = $event),
        label: "Vidljive informacije o nositelju kolegija",
        onClick: $options.submitCheckboxes
      }, null, 8, ["modelValue", "onClick"])])]),
      _: 1
    })])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "max-width": "400px"
      },
      class: "bg-grey-2"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: _withId(() => [_hoisted_9]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        width: "50%",
        height: "50%",
        alt: "",
        src: $data.url,
        class: "q-mb-md"
      }, null, 8, ["src"])]),
      _: 1
    })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      label: "Preuzmi sliku QR koda",
      class: "background-color-white q-mt-md",
      style: {
        "width": "400px"
      },
      onClick: $options.imageDownload
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: $options.logout,
      label: "Odjava",
      class: "background-color-white q-mt-md",
      style: {
        "width": "400px"
      }
    }, null, 8, ["onClick"])])]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/Administration.vue?vue&type=template&id=07a236d9&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__(1185);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Administration.vue?vue&type=script&lang=js

;
/* harmony default export */ const Administrationvue_type_script_lang_js = ({
  data() {
    return {
      name: '',
      lastName: '',
      emailCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      telephoneCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      cabinetCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      consultationsCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      carrierCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      imageCB: (0,reactivity_esm_bundler/* ref */.iH)(false),
      email: '',
      telephone: '',
      cabinet: '',
      consultations: '',
      carrier: '',
      menuId: '',
      usersDataId: '',
      disabledInput: true,
      q: (0,use_quasar/* default */.Z)(),
      pictureUpload: null,
      downloadURL: '',
      url: ''
    };
  },

  methods: {
    DownloadToDevice(fileurl) {
      this.$q.notify({
        type: 'positive',
        message: 'Slika uspješno spremljena!'
      });
      let blob = null;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileurl);
      xhr.responseType = 'blob'; // force the HTTP response, response-type header to be blob

      xhr.onload = function () {
        blob = xhr.response; // xhr.response is now a blob object

        console.log(blob);
        const storageLocation = 'file:///storage/emulated/0/';
        const folderpath = storageLocation + 'Download';
        console.log(folderpath);
        const filename = 'myimg.png';
        const DataBlob = blob;
        window.resolveLocalFileSystemURL(folderpath, function (dir) {
          dir.getFile(filename, {
            create: true
          }, function (file) {
            file.createWriter(function (fileWriter) {
              fileWriter.write(DataBlob); // Download was succesfull
            }, function (err) {
              // failed
              console.log(err);
            });
          });
        });
      };

      xhr.send();
    },

    imageDownload() {
      this.DownloadToDevice(this.url);
    },

    logout() {
      this.$auth.signOut().then(this.$router.push('/'));
    },

    // FIXME: Fix this callback hell
    submit() {
      this.$q.loadingBar.start(); // uploading image here

      const storageRef = this.$storage.ref();
      const professorsRef = storageRef.child(`professors/${(0,uid/* default */.Z)()}`);

      if (this.pictureUpload === null) {
        console.log('Its null');
        this.disabledInput = true;
        const docRef = this.$db.collection('UsersData').doc(this.usersDataId);
        return docRef.update({
          Email: this.email,
          Telephone: this.telephone,
          Cabinet: this.cabinet,
          Consultations: this.consultations,
          Carrier: this.carrier
        }).then(() => {
          this.$q.loadingBar.stop();
          this.$q.notify({
            type: 'positive',
            message: 'Podaci uspješno spremljeni'
          });
        }).catch(error => {
          this.$q.loadingBar.stop(); // The document probably doesn't exist.

          console.error('Error updating document: ', error);
          this.$q.notify({
            type: 'negative',
            message: 'Podaci nisu uspješno spremljeni'
          });
        });
      } else {
        const uploadTask = professorsRef.put(this.pictureUpload); // upload task

        uploadTask.on('state_changed', snapshot => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case this.$storage.TaskState.PAUSED:
              // or 'paused'
              console.log('Upload is paused');
              break;

            case this.$storage.TaskState.RUNNING:
              // or 'running'
              console.log('Upload is running');
              break;
          }
        }, error => {
          // Handle unsuccessful uploads
          console.log(error);
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            this.downloadURL = downloadURL;
          }).then(() => {
            this.disabledInput = true;
            const docRef = this.$db.collection('UsersData').doc(this.usersDataId);
            return docRef.update({
              Email: this.email,
              Telephone: this.telephone,
              Cabinet: this.cabinet,
              Consultations: this.consultations,
              Carrier: this.carrier,
              DownloadURL: this.downloadURL
            }).then(() => {
              this.$q.loadingBar.stop();
              this.$q.notify({
                type: 'positive',
                message: 'Podaci uspješno spremljeni'
              });
            }).catch(error => {
              this.$q.loadingBar.stop(); // The document probably doesn't exist.

              console.error('Error updating document: ', error);
              this.$q.notify({
                type: 'negative',
                message: 'Podaci nisu uspješno spremljeni'
              });
            });
          });
        });
      }
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
        isCarrier: this.carrierCB,
        isImage: this.imageCB
      }).then(() => {
        this.$q.notify({
          type: 'positive',
          message: 'Podaci uspješno spremljeni'
        });
      }).catch(error => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        this.$q.notify({
          type: 'negative',
          message: 'Podaci nisu uspješno spremljeni'
        });
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
        this.imageCB = !!data.isImage;
      });
    }).catch(error => {
      console.log('Error getting documents: ', error);
    });
    userRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // get usersData id
        const data = doc.data();
        this.usersDataId = doc.id; // This fills in the input forms

        this.name = data.Name;
        this.lastName = data.LastName;
        this.email = data.Email;
        this.telephone = data.Telephone;
        this.cabinet = data.Cabinet;
        this.consultations = data.Consultations;
        this.carrier = data.Carrier;
      });
    }); // qr code picture

    this.url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`;
  }

});
;// CONCATENATED MODULE: ./src/pages/Administration.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(5607);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(2426);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/file/QFile.js + 2 modules
var QFile = __webpack_require__(4816);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js + 3 modules
var QCheckbox = __webpack_require__(1420);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Administration.vue




;
Administrationvue_type_script_lang_js.render = render
Administrationvue_type_script_lang_js.__scopeId = "data-v-07a236d9"

/* harmony default export */ const Administration = (Administrationvue_type_script_lang_js);
;











runtime_auto_import_default()(Administrationvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QBanner: QBanner/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QInput: QInput/* default */.Z,QFile: QFile/* default */.Z,QIcon: QIcon/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z,QCheckbox: QCheckbox/* default */.Z,QImg: QImg/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=882.js.map