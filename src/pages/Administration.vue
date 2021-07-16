<template>
<div class="row">
  <div>
      <q-btn
  @click="logout"
  >Sign out
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
    <q-checkbox v-model="emailCB" label="Vidljiv email" @click="submitCheckboxes"/>
  </div>
  <div class="col-12">
    <q-checkbox v-model="telephoneCB" label="Vidljiv broj telefona" @click="submitCheckboxes" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="cabinetCB" label="Vidljiv kabinet" @click="submitCheckboxes"/>
  </div>
  <div class="col-12">
   <q-checkbox v-model="consultationsCB" label="Vidljivo vrijeme konzultacija" @click="submitCheckboxes"/>
  </div>
  <div class="col-12">
   <q-checkbox v-model="carrierCB" label="Vidljive informacije o nositelju kolegija" @click="submitCheckboxes"/>
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
      carrier: '',
      menuId: ''
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
    submitCheckboxes () {
      // updating data
      const docRef = this.$db.collection('Menu').doc(this.menuId)

      return docRef.update({
        isEmail: this.emailCB,
        isTelephone: this.telephoneCB,
        isCabinet: this.cabinetCB,
        isConsultations: this.consultationsCB,
        isCarrier: this.carrierCB
      })
    }

  },
  mounted () {
    const userId = this.$auth.currentUser.uid

    const menuRef = this.$db.collection('Menu').where('UserId', '==', userId)

    menuRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          // get menu id
          this.menuId = doc.id
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
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  }

}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
</style>
