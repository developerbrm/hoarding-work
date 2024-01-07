import Image from 'next/image'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import img1 from '../public/assets/images/img-1.png'
import { db, storage } from '@/firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import OurWorkItem from './OurWorkItem'

const OurWorks = async ({ hoardingData }) => {
  const documentsArr = hoardingData

  return (
    <div className="">
      <div className="mx-auto my-5 max-w-7xl px-4">
        <div className="my-5 text-center text-3xl font-bold text-amber-500">
          Our Works
        </div>

        <div
          className={`grid grid-cols-2 justify-between gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-6`}
          style={
            {
              // gridTemplateColumns: `repeat(auto-fit, minmax(${imageWidth}, 1fr))`,
            }
          }
        >
          {documentsArr.map((obj) => (
            <OurWorkItem key={obj.id} obj={obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurWorks
