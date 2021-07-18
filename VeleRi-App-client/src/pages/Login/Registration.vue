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
        <q-btn label="Submit" type="submit" color="primary" @click="registerUser"/>
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
          // adding data to UsersData
          this.$db.collection('UsersData').add({
            Name: this.name,
            Users_lastname: this.lastName,
            UserId: this.$auth.currentUser.uid
          })
          // adding data to Menu
          this.$db.collection('Menu').add({
            Cabinet: '',
            Carrier: '',
            Consultations: '',
            Email: this.email,
            Telephone: '',
            UserId: this.$auth.currentUser.uid,
            isCabinet: true,
            isCarrier: true,
            isConsultations: true,
            isEmail: true,
            isTelephone: true
          })
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: white
</style>
