'use client'

import { generateFirbaseDownLoadUrl } from '@/utilities'
import React, { useEffect, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

const RenderLightBox = ({ data: { open, setOpen, images } }) => {
  const [lightBoxSlides, setLightBoxSlides] = useState([])
  const zoomRef = React.useRef(null)

  const imagesPath = '/public/sites-images'

  useEffect(() => {
    const allPromises = images.map(async (fileName) => {
      const imgUrl = await generateFirbaseDownLoadUrl({
        fileName,
        imagesPath,
      })

      return imgUrl
    })

    Promise.all(allPromises).then((data) => {
      const finalData = data.map((img) => ({ src: img }))
      setLightBoxSlides(finalData)
    })
  }, [images])

  return (
    <Lightbox
      zoom={{ ref: zoomRef }}
      styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .7)' } }}
      open={open !== -1}
      close={() => setOpen(-1)}
      slides={lightBoxSlides}
      index={open}
    />
  )
}

export default RenderLightBox
