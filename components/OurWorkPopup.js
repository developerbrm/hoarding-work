'use client'

import React, { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { usePathname, useSearchParams } from 'next/navigation'

const ImageCarousel = ({ images }) => {
  const [activeLink, setActiveLink] = useState(images.at(0))
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image) => (
        <div key={uuidv4()} id={image} className="carousel-item w-full">
          <div className="relative h-64 w-full overflow-hidden rounded-md lg:h-72">
            <GetImageFirebaseComponent data={{ fileName: image, imagesPath }} />
          </div>
        </div>
      )),
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
        key={uuidv4()}
        href={`#${image}`}
        className={`block aspect-square h-3 rounded-full transition-colors hover:bg-slate-700 ${
          isActive ? 'bg-slate-700' : 'bg-slate-200'
        }`}
      ></a>
    )
  })

  return (
    <>
      <div className="carousel w-full">{allImages}</div>
      <div className="flex w-full items-center justify-center gap-2 py-1">
        {allLinks}
      </div>
    </>
  )
}

const detailsArr = [
  {
    label: 'Site:',
    key: 'site',
  },
  {
    label: 'Size:',
    key: 'size',
  },
  {
    label: 'Availability:',
    key: 'availability',
  },
  {
    label: 'Illumination:',
    key: 'illumnination',
  },
  {
    label: 'Media:',
    key: 'media',
  },
]

const OurWorkPopup = ({ data }) => {
  const { images, showPopup, setShowPopup } = data

  const handleOverlayClick = (e) => {
    setShowPopup(false)
    e.stopPropagation()
    e.preventDefault()
  }

  if (!showPopup) return <></>

  return (
    <>
      <button
        onClick={handleOverlayClick}
        className="fixed inset-0 z-10 h-screen w-screen backdrop-blur-md"
      ></button>

      <div className="fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2">
        <div className="grid place-content-center">
          <div className="relative m-5 max-w-2xl rounded-lg bg-white p-3 text-base shadow-lg">
            <button
              onClick={handleOverlayClick}
              className="btn-circle btn-sm absolute -right-2 -top-2 z-10 bg-white bg-opacity-100 font-bold transition-transform hover:scale-125"
            >
              ✕
            </button>
            <ImageCarousel images={images} />
            <div className="space-y-1">
              {detailsArr.map((obj) => {
                const { label, key } = obj

                return (
                  <div key={uuidv4()} className="flex gap-1">
                    <div className="font-bold">{label}</div>
                    <div className="font-normal">{data[key]}</div>
                  </div>
                )
              })}

              <div className="gap-1 text-start">
                <div className="font-bold">Location:</div>
                <address className="not-italic">{data.address}</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurWorkPopup
