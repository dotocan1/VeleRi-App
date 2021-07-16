<template>
<q-page>
<h3 class="text-h3">
  Ime i prezime profesora: {{name}} {{lastName}}
</h3>
<h4 class="text-h4" v-if="isEmail">E-mail: {{email}}</h4>
<h4 class="text-h4" v-if="isTelephone">Telephone: {{telephone}}</h4>

</q-page>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      lastName: '',
      email: '',
      isEmail: true,
      telephone: '',
      isTelephone: true

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
