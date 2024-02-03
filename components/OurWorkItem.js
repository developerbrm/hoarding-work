'use client'

import { useCallback, useEffect, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import OurWorkPopup from './OurWorkPopup'

const OurWorkItem = ({ obj }) => {
  const { id, data, zonesDataObj } = obj
  const [showPopup, setShowPopup] = useState(false)
  const { images } = data

  const availabilityText = data.availability
  const isAvailable = availabilityText.toLowerCase().includes('available')
  const fileName = data.images.at(0)
  const imagesPath = '/public/sites-images'

  const handleCardClick = () => {
    setShowPopup(true)
  }

  const isVisible = zonesDataObj?.[data?.zone]?.checked

  return (
    <button
      className={`${isVisible ? '' : 'hidden'}`}
      disabled={!isVisible}
      onClick={handleCardClick}
      key={id}
    >
      <div className="card w-full overflow-hidden rounded-lg bg-white text-slate-900 shadow-xl">
        <div className="relative h-full w-full">
          <GetImageFirebaseComponent data={{ fileName, imagesPath }} />
        </div>
        <div className="card-body p-4">
          <div className="flex gap-1">
            <div
              className={`badge text-xs text-white ${
                isAvailable ? 'bg-emerald-700' : 'bg-rose-700'
              }`}
            >
              {availabilityText}
            </div>
          </div>
          <div className="space-y-1 text-xs lg:text-sm">
            <div className="flex gap-1">
              <div className="font-bold">Size:</div>
              <div className="font-normal">{data.size}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Illumination:</div>
              <div className="font-normal">{data.illumination}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Media:</div>
              <div className="font-normal">{data.media}</div>
            </div>
            <div className="flex gap-1">
              <div className="font-bold">Location:</div>
              <address className="link line-clamp-1">{data.address}</address>
            </div>
          </div>
        </div>
      </div>

      {showPopup ? (
        <OurWorkPopup data={{ ...data, setShowPopup, showPopup }} />
      ) : (
        <></>
      )}
    </button>
  )
}

export default OurWorkItem
