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
        lazy-rules
        :rules="[val => !!val || 'Ovo polje ne moze ostati prazno',
        ]"
        />
    <q-input
        filled
        type="lastName"
        v-model="lastName"
        label="Vase prezime"
        lazy-rules
        :rules="[val => !!val || 'Ovo polje ne moze ostati prazno',
        ]"
        />

    <q-input
        filled
        v-model="email"
        label="Vas email"
        lazy-rules
        :rules="[val => !!val || 'Ovo polje ne moze ostati prazno',
                val => emailPattern.test(val) || 'Please type valid email']"
      />

    <q-input
        filled
        type="password"
        v-model="password"
        label="Vasa sifra"
        lazy-rules
        :rules="[val => !!val || 'Ovo polje ne moze ostati prazno',
        val => val.length > 5 || 'Sifra mora sadrzavati barem 6 znamenka'
        ]"
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
      lastName: '',
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
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
