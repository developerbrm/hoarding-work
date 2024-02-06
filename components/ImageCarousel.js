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

  const isSingleImage = allImages.length === 1

  var settings = {
    dots: true,
    arrows: true,
    // autoplay: true,
    infinite: isSingleImage ? false : true,
    speed: 500,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className=" w-full gap-2 rounded-box lg:max-w-full">
      <Slider className="mx-auto max-w-[90vw]" {...settings}>
        {allImages}
      </Slider>
    </div>
  )
}

export default ImageCarousel
