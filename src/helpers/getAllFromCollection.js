import firebase from './firebase'

export default function getAllFromCollection(collection) {
  return firebase.collection(collection).get()
    .then((snapshot) => {
      const array = []
      snapshot.forEach(doc => array.push(doc.data()))
      return array
    })
}
