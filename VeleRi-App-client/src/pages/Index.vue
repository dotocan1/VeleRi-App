<template>
  <q-page class="flex flex-center">
    <div class="row wrap justify-center items-center content-center">
      <div class="col-12 text-center">
        <q-btn class="background-color-white" to="/Home" label="Nastavite kao student" />
      </div>
      <div class="q-mt-sm col-12 text-center">
        <q-btn
          class="background-color-white"
          to="/Login"
          label="Prijavite se kao profesor"
        />
      </div>
      <div class="q-mt-sm col-12 text-center">
        <q-btn
          class="background-color-white"
          to="/Registration"
          label="Registrirajte se kao profesor"
        />
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
