import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA69Vo0iFf4Ld4j8Y0soRlooN2sGeBJwfM',
  authDomain: 'veleri-app.firebaseapp.com',
  projectId: 'veleri-app',
  storageBucket: 'veleri-app.appspot.com',
  messagingSenderId: '764963646541',
  appId: '1:764963646541:web:a366f5508336ccf7e48004',
  measurementId: 'G-ENZGF68S6H'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export default ({ app }) => {
  app.config.globalProperties.$auth = auth
  app.config.globalProperties.$db = db
  app.config.globalProperties.$storage = storage
}
