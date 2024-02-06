'use client'

import { useMemo, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { getUuid } from '@/utilities'
import Slider from 'react-slick'
import RenderLightBox from './RenderLightBox'

const ImageCarousel = ({ images }) => {
  const [open, setOpen] = useState(-1)
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image, index, arr) => {
        return (
          <div key={getUuid()} id={image} className={``}>
            <div
              onClick={() => {
                setOpen(index)
              }}
              className="relative h-64 w-full overflow-hidden rounded-md lg:h-96"
            >
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
    infinite: isSingleImage ? false : false,
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

      <RenderLightBox data={{ open, setOpen, images }} />
    </div>
  )
}

export default ImageCarousel
