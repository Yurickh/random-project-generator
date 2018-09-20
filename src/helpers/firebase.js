import firebase from 'firebase'

// side-effects on import, 🤮🤮🤮🤮
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECTID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
})

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true,
})

export default db
