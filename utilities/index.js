import { storage } from '@/firebase/firebaseConfig'
import { ref, getDownloadURL } from 'firebase/storage'

export const getUuid = () => crypto.randomUUID()

export const generateFirbaseDownLoadUrl = async ({
  imagesPath,
  fileName = '',
}) => {
  const sitesRef = ref(storage, imagesPath)
  const fileRef = ref(sitesRef, fileName)

  const data = await getDownloadURL(fileRef)
    .then((url) => {
      return url
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break
        case 'storage/canceled':
          // User canceled the upload
          break

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break
      }

      console.log(error.code)
    })

  return data
}
