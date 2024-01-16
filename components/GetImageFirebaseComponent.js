'use client'

import { storage } from '@/firebase/firebaseConfig'
import { ref, getDownloadURL } from 'firebase/storage'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const GetImageFirebaseComponent = ({
  data: { fileName, imagesPath, extraClassesForImage = '', extraClassesForContainer = '' },
}) => {
  const sitesRef = ref(storage, imagesPath)
  const fileRef = ref(sitesRef, fileName)
  const [imageSrc, setImageSrc] = useState(null)
  const alt = ''

  useEffect(() => {
    getDownloadURL(fileRef)
      .then((url) => {
        setImageSrc(url)
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
  }, [fileRef])

  if (!imageSrc)
    return (
      <div className="skeleton h-full min-h-[10rem] w-full rounded-b-none"></div>
    )

  return (
    <figure className={`relative aspect-square ${extraClassesForContainer}`} style={{}}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={true}
        className={`apply-base-img-css object-cover ${extraClassesForImage}`}
      />
    </figure>
  )
}

export default GetImageFirebaseComponent
