<template>
  <q-layout view="hHh lpR fFf">
     <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          VeleriApp
        </q-toolbar-title>
        <q-space />
      </q-toolbar>
    </q-header>
<q-footer elevated class="bg-grey-8 text-white">
      <div class="row justify-center">
        <div><q-toolbar>
        <q-toolbar-title>
          <q-item
          clickable
            to="/"
            @click="destroyQR"
            >
          <q-avatar>
            <q-icon name="home" size="lg"

            />
          </q-avatar>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
     </div>
     <div> <q-toolbar>
        <q-toolbar-title>
          <q-item
          clickable
          to="/QRCodeScanner">
          <q-avatar>
            <q-icon name="qr_code_2" size="lg"
            />
          </q-avatar>
          </q-item>
        </q-toolbar-title>
      </q-toolbar></div>
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  methods: {
    destroyQR () {
      window.QRScanner.destroy(function (status) {
        console.log(status)
      })
    }
  },

  data () {
    return {

    }
  }
}
</script>
