import Image from 'next/image'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import img1 from '../public/assets/images/img-1.png'

const OurWorks = () => {
  const imagesArr = [...Array(18)].map((_, index) => ({
    src: `/assets/images/img-${index + 1}.png`,
  }))

  return (
    <div className="">
      <div className="mx-auto my-5 max-w-7xl px-4">
        <div className="my-5 text-center text-3xl font-bold text-amber-500">
          Our Works
        </div>

        <div
          className={`grid grid-cols-2 justify-between gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6`}
          style={
            {
              // gridTemplateColumns: `repeat(auto-fit, minmax(${imageWidth}, 1fr))`,
            }
          }
        >
          {imagesArr.map((obj, index) => {
            const { src, alt = '' } = obj

            let isBooked, isAvailable

            isAvailable = Math.random() * 10 > 5

            isBooked = !isAvailable

            return (
              <div key={uuidv4()}>
                <div className="card w-full bg-white text-slate-900 shadow-xl">
                  <figure
                    className="relative aspect-square"
                    key={uuidv4()}
                    style={
                      {
                        // width: imageWidth,
                      }
                    }
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill={true}
                      className="apply-base-img-css object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <div className="flex gap-1">
                      {/* <div className="badge bg-slate-900 text-white">
                        Backlit
                      </div> */}
                      {isAvailable && (
                        <div className="badge bg-emerald-700 text-white">
                          Available
                        </div>
                      )}
                      {isBooked && (
                        <div className="badge bg-rose-700 text-white">
                          Booked
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 text-xs lg:text-sm">
                      <div className="flex gap-1">
                        <div className="font-bold">Size:</div>
                        <div className="font-normal">10x6</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="font-bold">Illumination:</div>
                        <div className="font-normal">Backlit</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="font-bold">Media:</div>
                        <div className="font-normal">Unipole</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="font-bold">Location:</div>
                        <address className="link line-clamp-1">
                          Outside Ritz Banquet, Opposite DLF Capital Greens and
                          DLF One Midtown, Moti Nagar
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurWorks
