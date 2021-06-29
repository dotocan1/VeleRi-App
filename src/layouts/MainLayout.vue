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
            <q-icon name="qr_code_2" size="lg"
            v-on:click = "qrCode" />
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
  setup () {
    window.QRScanner.prepare(onDone) // show the prompt

    function onDone (err, status) {
      if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err)
      }
      if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.
      } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
      } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
      }
    }
  },
  methods: {
    alertMe () {
      alert('hey')
    },

    qrCode () {
      // QRSCANNER example goes here
      // Start a scan. Scanning will continue until something is detected or
      // `QRScanner.cancelScan()` is called.
      // alert('1')
      window.QRScanner.scan(displayContents)
      alert.log('2')
      function displayContents (err, text) {
        if (err) {
          // an error occurred, or the scan was canceled (error code `6`)
        } else {
          // The scan completed, display the contents of the QR code:
          alert(text)
        }
      }

      // Make the webview transparent so the video preview is visible behind it.
      window.QRScanner.show()
      // Be sure to make any opaque HTML elements transparent here to avoid
      // covering the video.
    }
  },
  data () {
    return {

    }
  }
}
</script>
