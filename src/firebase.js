import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyBkbgVfdwENOPJ3-jtbi5vgcBF_lNPYpOg",
  authDomain: "users-1e233.firebaseapp.com",
  projectId: "users-1e233",
  storageBucket: "users-1e233.appspot.com",
  messagingSenderId: "52620750368",
  appId: "1:52620750368:web:ce2d0d8ad37d55a7635645",
  measurementId: "G-ES1HQXPF7V"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  user.createdAt = firebase.firestore.FieldValue.serverTimestamp() 
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
