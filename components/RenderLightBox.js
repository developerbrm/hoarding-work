'use client'

import { generateFirbaseDownLoadUrl } from '@/utilities'
import { useEffect, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

const RenderLightBox = ({ data: { open, setOpen, images } }) => {
  const [lightBoxSlides, setLightBoxSlides] = useState([])

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
      open={open}
      close={() => setOpen(false)}
      slides={lightBoxSlides}
    />
  )
}

export default RenderLightBox
