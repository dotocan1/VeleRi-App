<template>
  <q-page>
    <div class="transparent-div">
      <img
        src="../assets/qr-code-scanner-no-qr.png"
        class="qr-scanner fixed-center"
        alt=""
      />
    </div>
  </q-page>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
  mounted () {
    const destroyQR = async function () {
      window.QRScanner.destroy()
    }
    const $router = useRouter()
    // Make the webview transparent so the video preview is visible behind it.
    window.QRScanner.show()
    // Be sure to make any opaque HTML elements transparent here to avoid
    // covering the video.

    const callback = function (err, contents) {
      if (err) {
        alert(err._message)
      } else {
        destroyQR().then(function () {
          $router.push(`/Professor/${contents}`)
        })
      }
      // this pushes to scanned content
    }

    window.QRScanner.scan(callback)
  }
}
</script>

<style lang="sass" scoped>
.qr-scanner
  height: 250px
  width: 250px
.transparent-div
  background-color: transparent
</style>
