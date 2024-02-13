import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import img1 from '../public/assets/images/img-1.png'
import logo_icon from '../public/assets/images/logo-icon.jpeg'
import ImageCarousel from './ImageCarousel'
import { images } from '@/next.config'
import AutoPlayCarousel from './AutoPlayCarousel'

const LandingSection = ({ hoardingData }) => {
  const carouselImages = hoardingData
    .slice(0, 5)
    .map((obj) => obj.data.images)
    .flat(4)

  return (
    <div
      id="landing-section"
      className="relative grid h-screen overflow-hidden"
    >
      <div className="relative z-10 col-[1/-1] row-[1/-1] grid place-content-center bg-gradient-to-b from-transparent to-slate-900 text-white">
        <div className="mx-auto max-w-2xl space-y-3 px-4 text-base lg:text-xl">
          <div className="relative h-20 w-20 lg:h-32 lg:w-32">
            <Image src={logo_icon} fill={true} alt="logo icon" />
          </div>
          <h2 className="text-4xl font-bold lg:text-6xl">
            Reach Millions. <br />
            Make an Impact.
          </h2>
          <p className="max-w-prose">
            Take your brand to new heights with our strategic and creative
            outdoor advertising solutions.
          </p>

          <Link
            className="btn w-full bg-white text-base font-bold text-slate-900 lg:text-xl"
            href={`#contact-us`}
          >
            Lets Connect!
          </Link>
        </div>
      </div>
    

      <AutoPlayCarousel images={carouselImages} />
    </div>
  )
}

export default LandingSection
