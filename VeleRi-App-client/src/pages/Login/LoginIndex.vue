<template>
<q-page>
  <div class="q-pa-lg row justify-center">
        <div
            class="col"
            style="max-width: 400px"
        >
        <q-form @submit="onLogin">
            <q-card>
                <q-card-section>
                    <div class="text-h6">
                    Prijava
                    </div>
                </q-card-section>
                <q-card-section>
                    <div>
                        <q-input
                          filled
                          v-model="email"
                          label="Vaš email"
                          lazy-rules
                          :rules="[val => !!val || 'Ovo polje ne može ostati prazno',
                          val => emailPattern.test(val) || 'Please type valid email']"
                        />
                        <q-input
                          filled
                          type="password"
                          v-model="password"
                          label="Vaša šifra"
                          lazy-rules
                          :rules="[val => !!val || 'Ovo polje ne može ostati prazno',
                          val => val.length > 5 || 'Šifra mora sadrzavati barem 6 znamenka'
                          ]"
                        />
            </div>
                </q-card-section>
                <q-card-actions align="right">
                   <q-btn
                    label="Natrag"
                    to="/"
                    color="primary"
                    />
                    <q-btn
                        label="Prijava"
                        type="submit"
                        color="primary"
                    />
                    </q-card-actions>
                </q-card>
            </q-form>
        </div>
    </div></q-page>

</template>
<script>

import { useQuasar } from 'quasar'

export default {
  setup () {

  },

  data () {
    return {
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
      email: null,
      password: null,
      q: useQuasar()

    }
  },
  mounted: function () {
    if (this.$auth.currentUser) {
      this.$router.push('/Administration')
    }
  },
  methods: {
    onLogin () {
      this.$q.loadingBar.start()

      this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$q.loadingBar.stop()
          this.$q.notify({
            type: 'positive',
            message: 'Uspješna prijava'
          })
          this.$router.push('/Administration')
        })
        .catch(error => {
          console.log(error)

          this.$q.loadingBar.stop()

          this.$q.notify({
            type: 'negative',
            message: 'Neuspješna prijava'
          })

          this.password = ''
        })
    }
  }
}
</script>
<style lang="sass" scoped>
.q-page
  background: white
</style>
