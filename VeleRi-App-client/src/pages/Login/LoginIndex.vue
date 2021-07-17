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
                        type="email"
                        v-model="email"
                        label="Vas email"

                        lazy-rules
                        :rules="[ val => emailPattern.test(val) || 'Molim vas upisite valjani email']"
                        />
                        <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Sifra"

                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Molim vas, upisite sifru']"
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
export default {
  name: 'LoginIndex',
  data () {
    return {
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
      email: null,
      password: null
    }
  },
  mounted: function () {
    if (this.$auth.currentUser) {
      this.$router.push('/Administration')
    }
  },
  methods: {
    onLogin () {
      this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          this.$router.push('/Administration')
        })
        .catch(error => {
          console.log(error)
          this.$q.notify({
            type: 'negative',
            message: 'Login failed.'
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
