'use client'

import { generateFirbaseDownLoadUrl } from '@/utilities'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const GetImageFirebaseComponent = ({
  data: {
    fileName,
    imagesPath,
    extraClassesForImage = '',
    extraClassesForContainer = '',
  },
  data,
}) => {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    generateFirbaseDownLoadUrl({
      fileName,
      imagesPath,
    }).then((img) => {
      setImageSrc(img)
    })
  }, [fileName, imagesPath])

  const alt = ''

  if (!imageSrc)
    return (
      <div className="skeleton h-full min-h-[10rem] w-full rounded-b-none"></div>
    )

  return (
    <figure
      className={`relative aspect-square ${extraClassesForContainer}`}
      style={{}}
    >
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
