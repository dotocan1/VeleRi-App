<template>
  <q-page>
    <div class="row justify-center q-pa-md">
      <div class="col-12" style="max-width: 400px">
        <div class="q-pa-md q-gutter-sm">
          <q-card style="max-width: 400px" class="bg-grey-2">
            <q-card-section>
              <q-img src="" />
              <div class="text-h5">
                Ime i prezime profesora: {{ name }} {{ lastName }}
              </div>
              <div class="text-h6" v-if="isEmail">E-mail: {{ email }}</div>
              <div class="text-h6" v-if="isTelephone">Broj telefona: {{ telephone }}</div>
              <div class="text-h6" v-if="isCabinet">Broj kabineta: {{ cabinet }}</div>
              <div class="text-h6" v-if="isConsultations">
                Konzultacije: {{ consultations }}
              </div>
              <div class="text-h6" v-if="isCarrier">Nositelj kolegija: {{ carrier }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: 'Ime',
      lastName: 'Prezime',
      email: '',
      isEmail: true,
      telephone: '',
      isTelephone: true,
      cabinet: '',
      isCabinet: true,
      consultations: '',
      isConsultations: true,
      carrier: '',
      isCarrier: true
    }
  },
  mounted () {
    // I need the id data here
    // alert(this.$route.params.id)
    const id = this.$route.params.id

    // reading data from user db
    const userRef = this.$db.collection('UsersData').where('UserId', '==', id)
    userRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userData = doc.data()
          this.name = userData.Name
          this.lastName = userData.LastName
          this.email = userData.Email
          this.telephone = userData.Telephone
          this.cabinet = userData.Cabinet
          this.consultations = userData.Consultations
          this.carrier = userData.Carrier
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })

    // reading data from menu db
    const menuRef = this.$db.collection('Menu').where('UserId', '==', id)
    menuRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const menuData = doc.data()

          this.isEmail = menuData.isEmail
          this.isTelephone = menuData.isTelephone
          this.isCabinet = menuData.isCabinet
          this.isConsultations = menuData.isConsultations
          this.isCarrier = menuData.isCarrier
        })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to top, #373b44, #4286f4)
</style>
