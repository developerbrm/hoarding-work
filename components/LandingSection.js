import React from 'react'
import Link from 'next/link'

const LandingSection = () => {
  return (
    <div
      id="landing-section"
      className="grid h-[100dvh] place-content-center bg-amber-500 px-4 text-white"
    >
      <div className="mx-auto max-w-lg space-y-3">
        <h2 className="text-4xl font-bold">
          Reach Millions. <br />
          Make an Impact.
        </h2>
        <p className="max-w-prose text-base">
          Take your brand to new heights with our strategic and creative outdoor
          advertising solutions.
        </p>

        <Link
          className="btn bg-white font-bold text-amber-500"
          href={`#contact-us`}
        >
          Lets Connect!
        </Link>
      </div>
    </div>
  )
}

export default LandingSection
