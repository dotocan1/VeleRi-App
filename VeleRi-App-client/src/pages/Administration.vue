<template>
<q-page><div class="row">
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
    <q-input outlined v-model="email" label="Unesite email" :disable="disabledInput"/>
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="telephone" label="Unesite broj telefona" :disable="disabledInput"/>
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="cabinet" label="Unesite pripadni kabinet" :disable="disabledInput"/>
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="carrier" label="Unesite kolegije gdje je profesor nositelj" :disable="disabledInput"/>
  </div>
  <div class="col-2 q-mb-md">
    <q-btn
    @click="submit">Spremi</q-btn>
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
      <h4 class="text-h4 q-mt-md">Omogućite vidljivost podataka:</h4>
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
  <!-- Slika qr koda: -->
  <div class="row">
    <h4 class="text-h4 q-mt-md col-12">Pripadni QR kod:</h4>
    <img id="qr-code" class="col-6 justify-center items-center" alt="">
    <a id="img-download" download="qr-code.png">Preuzmite sliku</a>
  </div>
</div>
</q-page>

</template>

<script>

import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  data () {
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
      menuId: '',
      usersDataId: '',
      disabledInput: true,
      q: useQuasar()
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
        .then(this.$router.push('/'))
    },
    submit () {
      this.disabledInput = true
      const docRef = this.$db.collection('UsersData').doc(this.usersDataId)

      return docRef.update({
        Email: this.email,
        Telephone: this.telephone,
        Cabinet: this.cabinet,
        Consultations: this.consultations,
        Carrier: this.carrier
      })
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Podaci uspješno spremljeni'
          })
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          this.$q.notify({
            type: 'negative',
            message: 'Podaci nisu uspješno spremljeni'
          })
        })
    },
    editForms () {
      this.disabledInput = false
    },
    submitCheckboxes () {
      // updating data

      this.disabledInput = true
      const docRef = this.$db.collection('Menu').doc(this.menuId)

      return docRef.update({
        isEmail: this.emailCB,
        isTelephone: this.telephoneCB,
        isCabinet: this.cabinetCB,
        isConsultations: this.consultationsCB,
        isCarrier: this.carrierCB
      })
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Podaci uspješno spremljeni'
          })
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          this.$q.notify({
            type: 'negative',
            message: 'Podaci nisu uspješno spremljeni'
          })
        })
    }

  },
  mounted () {
    const userId = this.$auth.currentUser.uid

    const menuRef = this.$db.collection('Menu').where('UserId', '==', userId)
    const userRef = this.$db.collection('UsersData').where('UserId', '==', userId)

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
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })

    userRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // get usersData id
          const data = doc.data()
          this.usersDataId = doc.id

          // This fills in the input forms

          this.email = data.Email
          this.telephone = data.Telephone
          this.cabinet = data.Cabinet
          this.consultations = data.Consultations
          this.carrier = data.Carrier
        })
      })

    // qr code picture

    const img = document.getElementById('qr-code')
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`

    const btnDownloadImg = document.getElementById('img-download')
    btnDownloadImg.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`
  }

}
</script>

<style lang="sass" scoped>
.q-page
  background: white
</style>
