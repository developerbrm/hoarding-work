'use client'

import { useMemo, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { getUuid } from '@/utilities'
import Slider from 'react-slick'

const ImageCarousel = ({ images }) => {
  const [activeLink, setActiveLink] = useState(images.at(0))
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image, index, arr) => {
        const isSingleImage = arr.length === 1

        return (
          <div key={getUuid()} id={image} className={``}>
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

  var settings = {
    dots: true,
    arrows: true,
    // autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className=" w-full lg:max-w-full gap-2 rounded-box">
        <Slider className='max-w-[90vw] mx-auto' {...settings}>{allImages}</Slider>
    </div>
  )
}

export default ImageCarousel
