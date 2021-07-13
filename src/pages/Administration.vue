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
    <q-input outlined v-model="email" label="Unesite email" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="telephone" label="Unesite broj telefona" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="cabinet" label="Unesite pripadni kabinet" />
  </div>
  <div class="col-12 q-mb-md">
    <q-input outlined v-model="carrier" label="Unesite kolegije gdje je profesor nositelj" />
  </div>
  <div class="col-12 q-mb-md">
    <q-btn>Spremi</q-btn>
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
      email: ref(),
      telephone: ref(),
      cabinet: ref(),
      consultations: ref(),
      carrier: ref()
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
        .then(this.$router.push('/'))
    },
    consoleLog () {
      // console.log(this.$auth.currentUser)
      // const docRef = this.$db.collection('Menu').doc('D6AZT8jGkbZ6CSFItOdc')

      const docRef = this.$db.collection('Menu').doc('D6AZT8jGkbZ6CSFItOdc')

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
        } else {
        // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
    }
  }

}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
</style>
