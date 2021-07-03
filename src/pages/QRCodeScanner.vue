<template>
    <q-page>

    </q-page>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const $router = useRouter()
    // Make the webview transparent so the video preview is visible behind it.
    window.QRScanner.show()
    // Be sure to make any opaque HTML elements transparent here to avoid
    // covering the video.

    const callback = function (err, contents) {
      if (err) {
        alert(err._message)
      }
      window.QRScanner.destroy()
      $router.push('/Home')
    }

    window.QRScanner.scan(callback)
  }
}

</script>

<style lang="sass" scoped>

</style>
