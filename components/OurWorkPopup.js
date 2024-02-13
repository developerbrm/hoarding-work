'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { usePathname, useSearchParams } from 'next/navigation'
import ImageCarousel from './ImageCarousel'

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
  const { images, setShowPopup, showPopup } = data

  const handleOverlayClick = (e) => {
    setShowPopup(false)
    e.stopPropagation()
    e.preventDefault()
  }

  const handleKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        setShowPopup(false)

        window.removeEventListener('keyup', handleKeyUp)
      }
    },
    [setShowPopup]
  )

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])

  return (
    <div>
      <button
        onClick={handleOverlayClick}
        className="fixed inset-0 z-10 h-screen w-screen bg-slate-950 bg-opacity-30 backdrop-blur-md"
      ></button>

      <div className="fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 ">
        <div className="grid place-content-center">
          <div className="relative m-5 max-w-2xl rounded-lg bg-slate-50 p-3 text-base shadow-lg lg:max-w-2xl min-w-[300px]">
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
    </div>
  )
}

export default OurWorkPopup
