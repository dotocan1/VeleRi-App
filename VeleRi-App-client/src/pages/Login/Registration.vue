<template>
  <q-page>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
    >
     <q-input
        filled
        type="name"
        v-model="name"
        label="Vase ime"
        />
    <q-input
        filled
        type="lastName"
        v-model="lastName"
        label="Vase prezime"
        />

    <q-input
        filled
        v-model="email"
        label="Vas email"
      />

    <q-input
        filled
        type="password"
        v-model="password"
        label="Vasa sifra"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      lastName: ''
    }
  },
  methods: {
    registerUser () {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          this.$router.push('/Administration')
          // ...
        })
    }
  }
}
</script>

<style>

</style>
