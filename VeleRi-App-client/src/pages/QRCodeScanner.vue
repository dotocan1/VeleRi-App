<template>
    <q-page>
      <div class="row window-height window-width justify-center items-center transparent-div">
        <div class="self-center transparent-div">
        <img src="../assets/qr-code-scanner-no-qr.png" class="qr-scanner" alt="">
        </div>
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
      }else{
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
    z-index: -1
    position:relative
    height: 250px
    width: 250px
.transparent-div
  background-color: transparent

</style>
