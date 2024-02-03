'use client'

import { useMemo, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { getUuid } from '@/utilities'

const ImageCarousel = ({ images }) => {
  const [activeLink, setActiveLink] = useState(images.at(0))
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image, index, arr) => {
        const isSingleImage = arr.length === 1

        return (
          <div
            key={getUuid()}
            id={image}
            className={`carousel-item ${isSingleImage ? 'w-full' : 'w-5/6'}`}
          >
            <div className="relative h-64 w-full overflow-hidden rounded-md lg:h-96">
              <GetImageFirebaseComponent
                data={{
                  fileName: image,
                  imagesPath,
                  extraClassesForImage: '!object-cover',
                }}
              />
            </div>
          </div>
        )
      }),
    [images]
  )

  const allLinks = images.map((image) => {
    const isActive = activeLink === image

    const handleLinkClick = () => {
      setActiveLink(image)
    }

    return (
      <a
        onClick={handleLinkClick}
        key={getUuid()}
        href={`#${image}`}
        className={`block aspect-square h-3 rounded-full transition-colors hover:bg-slate-700 ${
          isActive ? 'bg-slate-700' : 'bg-slate-200'
        }`}
      ></a>
    )
  })

  return (
    <>
      <div className="carousel carousel-center w-full gap-2 rounded-box">
        {allImages}
      </div>
      {/* <div className="flex w-full items-center justify-center gap-2 py-1">
        {allLinks}
      </div> */}
    </>
  )
}

export default ImageCarousel
