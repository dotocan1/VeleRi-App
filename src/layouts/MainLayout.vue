<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <div class="row justify-center">
        <div><q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="home" size="lg"
            v-on:click = "alertMe"/>
            <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> -->
          </q-avatar>
          <div>Home</div>
        </q-toolbar-title>
      </q-toolbar>
     </div>
     <div> <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="qr_code_2" size="lg" />
            <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> -->
          </q-avatar>
          <div>QR</div>
        </q-toolbar-title>
      </q-toolbar></div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  methods: {
    alertMe () {
      alert('hey')
    }
  }

}
</script>
