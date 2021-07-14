<template>
<div class="row">
  <div>
      <q-btn
  @click="logout"
  >Sign out
      </q-btn>
  </div>
  <div>
      <q-btn
        @click="consoleLog">
        Console log
      </q-btn>
  </div>
</div>
<!-- Konfiguriranje podataka -->
<div class="row">
  <div class="col-10">
      <h4 class="text-h4 q-mt-md">Unesite osobne podatke:</h4>
  </div>
  <div class="col-12 q-mb-md">
    <q-input disable outlined v-model="email" label="Unesite email" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input disable outlined v-model="telephone" label="Unesite broj telefona" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input disable outlined v-model="cabinet" label="Unesite pripadni kabinet" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input disable outlined v-model="carrier" label="Unesite kolegije gdje je profesor nositelj" />
  </div>
  <div class="col-2 q-mb-md">
    <q-btn>Spremi</q-btn>
  </div>
  <div class="col-1 q-ml-md">
    <q-btn
    @click="editForms"
    >Izmijeni</q-btn>
  </div>
</div>
<!-- Konfiguriranje vidljivih podataka: -->
<div class="row">
  <div class="col-10">
      <h4 class="text-h4 q-mt-md">Omogucite vidljivost podataka:</h4>
  </div>
  <div class="col-12">
    <q-checkbox v-model="emailCB" label="Vidljiv email" />
  </div>
  <div class="col-12">
    <q-checkbox v-model="telephoneCB" label="Vidljiv broj telefona" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="cabinetCB" label="Vidljiv kabinet" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="consultationsCB" label="Vidljivo vrijeme konzultacija" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="carrierCB" label="Vidljive informacije o nositelju kolegija" />
  </div>

</div>

</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      emailCB: ref(false),
      telephoneCB: ref(false),
      cabinetCB: ref(false),
      consultationsCB: ref(false),
      carrierCB: ref(false),
      email: '',
      telephone: '',
      cabinet: '',
      consultations: '',
      carrier: ''
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
        .then(this.$router.push('/'))
    },
    editForms () {
      // this.email.removeAttribute('disabled')
    },
    consoleLog () {
      // console.log(this.$auth.currentUser)
      // const docRef = this.$db.collection('Menu').doc('D6AZT8jGkbZ6CSFItOdc')s
    }
  },
  mounted () {
    const docRef = this.$db.collection('Menu').doc('D6AZT8jGkbZ6CSFItOdc')

    docRef.get().then((doc) => {
      if (doc.exists) {
        // console.log('Document data:', doc.data())
        const data = doc.data()
        // This modifies the checkboxes
        this.emailCB = !!(data.isEmail)
        this.telephoneCB = !!(data.isTelephone)
        this.cabinetCB = !!(data.isCabinet)
        this.consultationsCB = !!(data.isConsultations)
        this.carrierCB = !!(data.isCarrier)

        // This fills in the input forms

        this.email = data.Email
        this.telephone = data.Telephone
        this.cabinet = data.Cabinet
        this.consultations = data.Consultations
        this.carrier = data.Carrier
      } else {
        console.log('No such document!')
      }
    }).catch((error) => {
      console.log('Error getting document:', error)
    })
  }

}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
</style>
