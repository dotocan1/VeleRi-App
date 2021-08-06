<template>
  <q-page>
    <!-- Banner -->
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-red-7 text-black">
        <div class="text-h5">Dobrodošli nazad, {{ name }} {{ lastName }}!</div>
      </q-banner>
    </div>
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
              v-model="consultations"
              label="Unesite vrijeme konzultacija"
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
              label="Odaberite ili izmijenite sliku"
              counter
              :disable="disabledInput"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click.stop="pictureUpload = null"
                  class="cursor-pointer"
                />
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
                v-model="imageCB"
                label="Vidljiva slika profila"
                @click="submitCheckboxes"
              />
            </div>
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
      <div class="col-12 q-mt-md" style="text-align:center">
        <q-card style="max-width: 400px" class="bg-grey-2">
          <q-card-section>
            <div class="text-h5 q-mt-md">Pripadni QR kod:</div>
          </q-card-section>
            <q-img width="50%" height="50%" alt="" :src="url" class="q-mb-md" />

        </q-card>
      </div>
<a id="aQrDownload" :href="url">
  <q-btn
        label="Preuzmi sliku QR koda"
        class="background-color-white q-mt-md"
        style="width: 400px"
      />
      </a>
      <q-btn
        @click="logout"
        label="Odjava"
        class="background-color-white q-mt-md"
        style="width: 400px"
      />

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar, uid, exportFile } from 'quasar'

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
      imageCB: ref(false),
      email: '',
      telephone: '',
      cabinet: '',
      consultations: '',
      carrier: '',
      menuId: '',
      usersDataId: '',
      disabledInput: true,
      q: useQuasar(),
      pictureUpload: null,
      downloadURL: '',
      url: ''
    }
  },
  methods: {
    imageDownload () {
      fetch(this.url)
        .then((response) => response.blob())
        .then((image) => {
          exportFile('qr-code', image)
        })
    },
    logout () {
      this.$auth.signOut().then(this.$router.push('/'))
    },
    // FIXME: Fix this callback hell
    submit () {
      this.$q.loadingBar.start()

      // uploading image here
      const storageRef = this.$storage.ref()

      const professorsRef = storageRef.child(`professors/${uid()}`)
      if (this.pictureUpload === null) {
        console.log('Its null')
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
      } else {
        const uploadTask = professorsRef.put(this.pictureUpload)

        // upload task
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case this.$storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused')
                break
              case this.$storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running')
                break
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then((downloadURL) => {
                console.log('File available at', downloadURL)
                this.downloadURL = downloadURL
              })
              .then(() => {
                this.disabledInput = true
                const docRef = this.$db.collection('UsersData').doc(this.usersDataId)

                return docRef
                  .update({
                    Email: this.email,
                    Telephone: this.telephone,
                    Cabinet: this.cabinet,
                    Consultations: this.consultations,
                    Carrier: this.carrier,
                    DownloadURL: this.downloadURL
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
              })
          }
        )
      }
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
          isCarrier: this.carrierCB,
          isImage: this.imageCB
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
          this.imageCB = !!data.isImage
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

    this.url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userId}`
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
.background-color-white
  background: white
a
  color: black
  text-decoration: none
</style>
