import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyD6sZ_o_xCL-KurD_nuUSKQPbP_uHWb24Y',
  authDomain: 'clubscouts-81383.firebaseapp.com',
  databaseURL: 'https://clubscouts-81383.firebaseio.com',
  projectId: 'clubscouts-81383',
  storageBucket: 'clubscouts-81383.appspot.com',
  messagingSenderId: '1030734204373',
  appId: '1:1030734204373:web:078ae01d0661eeb6b4015c',
  measurementId: 'G-30S0QEX1DH'
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  //uses userAuth to query for a document reference object in firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //get the snapshot object with .get
  const snapshot = await userRef.get()

  //if it doesn't exist , creates a new user with .set()
  if (!snapshot.exists) {
    const { email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

//export .auth() method from firebase
export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

// addCollectionAndDocuments(
//         'collections',
//         CollectionsForPreview.map(({ title, items }) => ({ title, items }))
//       )
