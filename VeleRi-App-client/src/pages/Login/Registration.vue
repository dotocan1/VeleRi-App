<template>
  <q-page>
    <div class="row wrap justify-center items-center content-center">
      <div class="col q-ma-lg" style="max-width: 400px">
        <q-card>
          <q-card-section>
            <div class="text-h6">Registracija</div>
          </q-card-section>
          <q-card-section>
            <q-form @submit="registerUser" @reset="goBack">
              <q-input
                filled
                type="name"
                v-model="name"
                label="Vaše ime"
                lazy-rules
                :rules="[(val) => !!val || 'Ovo polje ne moze ostati prazno']"
              />
              <q-input
                filled
                type="lastName"
                v-model="lastName"
                label="Vaše prezime"
                lazy-rules
                :rules="[(val) => !!val || 'Ovo polje ne moze ostati prazno']"
              />

              <q-input
                filled
                v-model="email"
                label="Vaš email"
                lazy-rules
                :rules="[
                  (val) => !!val || 'Ovo polje ne moze ostati prazno',
                  (val) => emailPattern.test(val) || 'Please type valid email',
                ]"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Vaša sifra"
                lazy-rules
                :rules="[
                  (val) => !!val || 'Ovo polje ne moze ostati prazno',
                  (val) => val.length > 5 || 'Sifra mora sadrzavati barem 6 znamenka',
                ]"
              />

              <q-card-actions>
                <q-btn label="Potvrdi" type="submit" color="primary" />
                <q-btn label="Natrag" type="reset" color="primary" flat class="q-ml-sm" />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      lastName: '',
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
      q: useQuasar()
    }
  },
  methods: {
    registerUser () {
      function generateUID () {
        return Math.random().toString(36).substr(2, 9)
      }

      this.$q.loadingBar.start()

      this.$auth.signOut()

      this.$auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.$db
            .collection('UsersData')
            .doc(generateUID())
            .set({
              Name: this.name,
              LastName: this.lastName,
              Email: this.email,
              Telephone: '',
              Cabinet: '',
              Consultations: '',
              Carrier: '',
              UserId: this.$auth.currentUser.uid,
              DownloadURL: ''
            })
            .then(() => {
              this.$db
                .collection('Menu')
                .doc(generateUID())
                .set({
                  isEmail: true,
                  isTelephone: true,
                  isCabinet: true,
                  isConsultations: true,
                  isCarrier: true,
                  UserId: this.$auth.currentUser.uid
                })
                .then(() => {
                  this.$q.loadingBar.stop()
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
