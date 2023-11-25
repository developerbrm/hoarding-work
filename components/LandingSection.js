import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import img1 from '../public/assets/images/img-1.png'

const LandingSection = () => {
  return (
    <div
      id="landing-section"
      className="relative grid h-screen overflow-hidden"
    >
      <div className="relative z-10 col-[1/-1] row-[1/-1] grid place-content-center bg-gradient-to-b from-transparent to-slate-900 text-white">
        <div className="mx-auto max-w-lg space-y-3 px-4">
          <h2 className="text-4xl font-bold">
            Reach Millions. <br />
            Make an Impact.
          </h2>
          <p className="max-w-prose text-base">
            Take your brand to new heights with our strategic and creative
            outdoor advertising solutions.
          </p>

          <Link
            className="btn bg-white font-bold text-slate-900 w-full"
            href={`#contact-us`}
          >
            Lets Connect!
          </Link>
        </div>
      </div>
      <Image
      alt=''
        src={img1}
        className="apply-base-img-css inset-0 z-0 col-[1/-1] row-[1/-1] scale-105 object-cover"
      />
    </div>
  )
}

export default LandingSection