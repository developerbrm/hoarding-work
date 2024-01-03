import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDB3-qVGXnsfhhCOhAC56oPe2-4x0ufO3Q',
  authDomain: 'hording-work.firebaseapp.com',
  projectId: 'hording-work',
  storageBucket: 'hording-work.appspot.com',
  messagingSenderId: '301767517014',
  appId: '1:301767517014:web:f0e43020132ffba57a6cf7',
  measurementId: 'G-LZ64PM3XQV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
