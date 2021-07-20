<template>
  <q-page>
        <q-form
        @submit="registerUser"
        @reset="goBack"
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
        <q-btn label="Potvrdi" type="submit" color="primary"/>
        <q-btn label="Natrag" type="reset" color="primary" flat class="q-ml-sm" />
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
      function generateUID () {
        return Math.random().toString(36).substr(2, 9)
      }

      this.$auth.signOut()

      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.$db.collection('UsersData').doc(generateUID()).set({
            Name: this.name,
            LastName: this.lastName,
            Email: this.email,
            Telephone: '',
            Cabinet: '',
            Consultations: '',
            Carrier: '',
            UserId: this.$auth.currentUser.uid
          })
            .then(() => {
              this.$db.collection('Menu').doc(generateUID()).set({
                isEmail: true,
                isTelephone: true,
                isCabinet: true,
                isConsultations: true,
                isCarrier: true,
                UserId: this.$auth.currentUser.uid
              })
                .then(() => {
                  console.log('Should push now ngl')
                  this.$router.push('/Administration')
                })
            })
        })
    },
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: white
</style>
