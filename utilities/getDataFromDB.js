import { db, storage } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

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
