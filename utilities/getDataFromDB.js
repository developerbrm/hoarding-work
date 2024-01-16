import { db, storage } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { listAll, ref } from 'firebase/storage'

export async function getHoardingData() {
  const collectionRef = collection(db, 'hoarding-data')

  let data = []

  try {
    const querySnapshot = await getDocs(collectionRef)
    data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  } catch (error) {
    console.error('Error fetching documents:', error)
  }

  return data
}

export async function getOurClientsData() {
  const imagesPath = '/public/our-clients'
  const sitesRef = ref(storage, imagesPath)

  const data = []
  const promise = new Promise((resolve, reject) => {
    listAll(sitesRef)
      .then((snapshot) => {
        snapshot.items.forEach((childSnapshot) => {
          data.push(childSnapshot.fullPath)
        })
      })
      .then(() => {
        resolve(data)
      })
      .catch((error) => {
        console.error('Error retrieving file list:', error)
      })
  })

  return promise

  // let data = []

  // try {
  //   const querySnapshot = await getDocs(collectionRef)
  //   data = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     data: doc.data(),
  //   }))
  // } catch (error) {
  //   console.error('Error fetching documents:', error)
  // }

  // return data
}
