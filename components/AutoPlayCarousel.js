'use client'

import { useMemo, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { getUuid } from '@/utilities'
import Slider from 'react-slick'
import RenderLightBox from './RenderLightBox'

const AutoPlayCarousel = ({ images }) => {
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image, index, arr) => {
        return (
          <div key={getUuid()} id={image} className={``}>
            <div className={` relative h-screen w-screen overflow-hidden`}>
              <GetImageFirebaseComponent
                data={{
                  fileName: image,
                  imagesPath,
                  extraClassesForImage: '!object-cover',
                  extraClassesForContainer: 'h-full w-full',
                }}
              />
            </div>
          </div>
        )
      }),
    [images]
  )

  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }

  return (
    <div className=" absolute inset-0 h-screen w-screen">
      <Slider className="h-full w-full" {...settings}>
        {allImages}
      </Slider>
    </div>
  )
}

export default AutoPlayCarousel
