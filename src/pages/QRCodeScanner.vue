<template>
    <q-page>

    </q-page>
</template>
<script>
export default {
  setup () {
    // Make the webview transparent so the video preview is visible behind it.
    window.QRScanner.show()
    // Be sure to make any opaque HTML elements transparent here to avoid
    // covering the video.

    const callback = function (err, contents) {
      if (err) {
        console.error(err._message)
      }
      alert('The QR Code contains: ' + contents)
    }

    window.QRScanner.scan(callback)
  }
}

</script>

<style lang="sass" scoped>
q-page
  background: transparent
</style>
