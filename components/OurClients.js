import { getUuid } from '@/utilities'
import { getOurClientsData } from '@/utilities/getDataFromDB'
import React from 'react'
import GetImageFirebaseComponent from './GetImageFirebaseComponent'

const OurClients = async () => {
  const data = await getOurClientsData()

  return (
    <div className="">
      <div className="mx-auto my-5 max-w-7xl px-4 min-h-[700px]">
        <div className="my-5 text-center text-3xl font-bold text-amber-500">
          Our Clients
        </div>

        <div
          className={`mx-auto flex max-w-3xl flex-wrap justify-center gap-5 lg:gap-10`}
        >
          {data.map((imagePath) => (
            <div key={getUuid()} className="">
              <GetImageFirebaseComponent
                data={{
                  fileName: imagePath,
                  imagesPath: '/',
                  extraClassesForImage:
                    '!object-contain w-full h-full max-w-full block',
                  extraClassesForContainer:
                    'relative h-32 w-full overflow-hidden',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurClients
