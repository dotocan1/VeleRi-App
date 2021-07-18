<template>
<q-page>
<h3 class="text-h3">
  Ime i prezime profesora: {{name}} {{lastName}}
</h3>
<h2 class="text-h2" v-if="isEmail">E-mail: {{email}}</h2>
<h2 class="text-h2" v-if="isTelephone">Telephone: {{telephone}}</h2>
<h2 class="text-h2" v-if="isCabinet">Telephone: {{cabinet}}</h2>
<h2 class="text-h2" v-if="isConsultations">Telephone: {{consultations}}</h2>
<h2 class="text-h2" v-if="isCarrier">Telephone: {{carrier}}</h2>

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
          this.email = menuData.Email
          this.isEmail = menuData.isEmail
          this.telephone = menuData.Telephone
          this.isTelephone = menuData.isTelephone
          this.cabinet = menuData.Cabinet
          this.isCabinet = menuData.isCabinet
          this.consultations = menuData.isConsultations
          this.isConsultations = menuData.isConsultations
          this.carrier = menuData.Carrier
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
