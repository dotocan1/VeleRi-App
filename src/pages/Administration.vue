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
<!-- Konfiguriranje vidljivih podataka: -->
<div class="row">
  <div class="col-10">
      <h4 class="text-h4 q-mt-md">Choose options for current user</h4>
  </div>
  <div class="col-12">
    <q-checkbox v-model="email" label="Vidljiv email" />
  </div>
  <div class="col-12">
    <q-checkbox v-model="telephone" label="Vidljiv broj telefona" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="cabinet" label="Vidljiv kabinet" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="consultations" label="Vidljivo vrijeme konzultacija" />
  </div>
  <div class="col-12">
   <q-checkbox v-model="carrier" label="Vidljive informacije o nositelju kolegija" />
  </div>

</div>

</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(false),
      telephone: ref(false),
      cabinet: ref(false),
      consultations: ref(false),
      carrier: ref(false)
    }
  },
  methods: {
    logout () {
      this.$auth.signOut()
        .then(this.$router.push('/'))
    },
    consoleLog () {
      console.log(this.$auth.currentUser)
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
</style>
