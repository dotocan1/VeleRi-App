<template>
  <q-page>
    <div class="row justify-center q-pa-md">
      <div class="col-12 q-mt-md" style="max-width: 400px">
        <q-card style="max-width: 400px" class="bg-grey-2">
          <q-card-section>
            <div class="text-h4">Kako koristiti aplikaciju kao student?</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">Pritisni na simbol QR koda:</div>
            <q-separator spaced />
            <q-img src="/qr-kod-pritisak.png" />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">Skeniraj kod:</div>
            <q-separator spaced />
            <q-img src="/skenirani-kod.png" />
          </q-card-section>
          <q-card-section>
            <q-separator inset class="q-mb-md q-mt-sm"/>
            <div class="text-h4">
              Težak dio je gotov! Sad samo pričekaj da se učitaju podaci o profesoru!
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
.background-color-white
  background: white
</style>
