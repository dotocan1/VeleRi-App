<template>
  <q-page>
    <!-- Banner -->
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-red-7 text-black">
        <div class="text-h5">Dobrodošli nazad, {{ name }} {{ lastName }}!</div>
      </q-banner>
    </div>
    <!-- TODO: Moram dodati konzultacije -->
    <!-- Konfiguriranje podataka -->
    <div class="row justify-center q-pa-md">
      <div class="col-12" style="max-width: 400px">
        <q-card style="max-width: 400px" class="bg-grey-2">
          <q-card-section>
            <div class="text-h5 q-mt-md">Unesite osobne podatke:</div>
          </q-card-section>
          <q-card-section>
            <q-input
              outlined
              v-model="email"
              label="Unesite email"
              :disable="disabledInput"
            />
            <q-input
              class="q-mt-sm"
              outlined
              v-model="telephone"
              label="Unesite broj telefona"
              :disable="disabledInput"
            />
            <q-input
              class="q-mt-sm"
              outlined
              v-model="cabinet"
              label="Unesite pripadni kabinet"
              :disable="disabledInput"
            />
            <q-input
              class="q-mt-sm"
              outlined
              v-model="carrier"
              label="Unesite kolegije gdje je profesor nositelj"
              :disable="disabledInput"
            />
            <q-file
              filled
              class="q-mt-md"
              bottom-slots
              v-model="pictureUpload"
              label="Odaberite sliku profila"
              counter
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
              </template>
            </q-file>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="primary" @click="submit" label="Spremi" />
            <q-btn color="primary" @click="editForms" label="Izmijeni" />
          </q-card-actions>
        </q-card>

        <!-- Konfiguriranje vidljivih podataka: -->

        <div class="col-12 q-mt-md" style="max-width: 400px">
          <q-card style="max-width: 400px" class="bg-grey-2">
            <q-card-section>
              <div class="text-h5 q-mt-md">Odredite vidljivost podataka:</div>
            </q-card-section>
            <div>
              <q-checkbox
                v-model="emailCB"
                label="Vidljiv email"
                @click="submitCheckboxes"
              />
            </div>
            <div>
              <q-checkbox
                v-model="telephoneCB"
                label="Vidljiv broj telefona"
                @click="submitCheckboxes"
              />
            </div>
            <div>
              <q-checkbox
                v-model="cabinetCB"
                label="Vidljiv kabinet"
                @click="submitCheckboxes"
              />
            </div>
            <div>
              <q-checkbox
                v-model="consultationsCB"
                label="Vidljivo vrijeme konzultacija"
                @click="submitCheckboxes"
              />
            </div>
            <div>
              <q-checkbox
                v-model="carrierCB"
                label="Vidljive informacije o nositelju kolegija"
                @click="submitCheckboxes"
              />
            </div>
          </q-card>
        </div>
      </div>
      <!-- Slika qr koda: -->
      <div class="col-12 q-mt-md" style="max-width: 400px">
        <q-card style="max-width: 400px" class="bg-grey-2">
          <q-card-section>
            <div class="text-h5 q-mt-md">Pripadni QR kod:</div>
          </q-card-section>
          <img id="qr-code" class="col-6 justify-center items-center" alt="" />
          <a id="img-download" download="qr-code.png">Preuzmite sliku</a>
        </q-card>
      </div>

      <q-btn
        @click="logout"
        label="Odjava"
        class="background-color-white q-mt-md q-ml-sm"
      />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  data () {
    return {
      name: '',
      lastName: '',
      emailCB: ref(false),
      telephoneCB: ref(false),
      cabinetCB: ref(false),
      consultationsCB: ref(false),
      carrierCB: ref(false),
      email: '',
      telephone: '',
      cabinet: '',
      consultations: '',
      carrier: '',
      menuId: '',
      usersDataId: '',
      disabledInput: true,
      q: useQuasar(),
      pictureUpload: null
    }
  },
  methods: {
    logout () {
      this.$auth.signOut().then(this.$router.push('/'))
    },
    submit () {
      this.$q.loadingBar.start()

      this.disabledInput = true
      const docRef = this.$db.collection('UsersData').doc(this.usersDataId)

      return docRef
        .update({
          Email: this.email,
          Telephone: this.telephone,
          Cabinet: this.cabinet,
          Consultations: this.consultations,
          Carrier: this.carrier
        })
        .then(() => {
          this.$q.loadingBar.stop()
          this.$q.notify({
            type: 'positive',
            message: 'Podaci uspješno spremljeni'
          })
        })
        .catch((error) => {
          this.$q.loadingBar.stop()
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          this.$q.notify({
            type: 'negative',
            message: 'Podaci nisu uspješno spremljeni'
          })
        })
    },
    editForms () {
      this.disabledInput = false
    },
    submitCheckboxes () {
      // updating data

      this.disabledInput = true
      const docRef = this.$db.collection('Menu').doc(this.menuId)

      return docRef
        .update({
          isEmail: this.emailCB,
          isTelephone: this.telephoneCB,
          isCabinet: this.cabinetCB,
          isConsultations: this.consultationsCB,
          isCarrier: this.carrierCB
        })
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Podaci uspješno spremljeni'
          })
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          this.$q.notify({
            type: 'negative',
            message: 'Podaci nisu uspješno spremljeni'
          })
        })
    }
  },
  mounted () {
    const userId = this.$auth.currentUser.uid

    const menuRef = this.$db.collection('Menu').where('UserId', '==', userId)
    const userRef = this.$db.collection('UsersData').where('UserId', '==', userId)

    menuRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          // get menu id
          this.menuId = doc.id
          // This modifies the checkboxes
          this.emailCB = !!data.isEmail
          this.telephoneCB = !!data.isTelephone
          this.cabinetCB = !!data.isCabinet
          this.consultationsCB = !!data.isConsultations
          this.carrierCB = !!data.isCarrier
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })

    userRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // get usersData id
        const data = doc.data()
        this.usersDataId = doc.id

        // This fills in the input forms
        this.name = data.Name
        this.lastName = data.LastName

        this.email = data.Email
        this.telephone = data.Telephone
        this.cabinet = data.Cabinet
        this.consultations = data.Consultations
        this.carrier = data.Carrier
      })
    })

    // qr code picture

    const img = document.getElementById('qr-code')
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`

    const btnDownloadImg = document.getElementById('img-download')
    btnDownloadImg.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
.background-color-white
  background: white
</style>
