'use client'

import { useMemo, useState } from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'
import { getUuid } from '@/utilities'
import Slider from 'react-slick'
import RenderLightBox from './RenderLightBox'

const ImageCarousel = ({ images }) => {
  const [open, setOpen] = useState(-1)
  const [wasOpened, setWasOpened] = useState(false)
  const imagesPath = '/public/sites-images'

  const allImages = useMemo(
    () =>
      images.map((image, index, arr) => {
        return (
          <div key={getUuid()} id={image} className={``}>
            <div
              onClick={() => {
                setOpen(index)
                setWasOpened(true)
              }}
              className={`${
                wasOpened ? '' : ''
              } relative h-64 w-full overflow-hidden rounded-md lg:h-96`}
            >
              <GetImageFirebaseComponent
                data={{
                  fileName: image,
                  imagesPath,
                  extraClassesForImage: '!object-cover',
                }}
              />
              {!wasOpened ? (
                <span class="absolute left-0 top-0 inline-flex h-full w-full scale-[.1] animate-[ping_2s_ease-out_infinite] rounded-full bg-sky-400 opacity-20"></span>
              ) : (
                <></>
              )}
            </div>

            {!wasOpened ? (
              <div className="text-center text-sm">
                Click the images to enlarge
              </div>
            ) : (
              <></>
            )}
          </div>
        )
      }),
    [images, wasOpened]
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
