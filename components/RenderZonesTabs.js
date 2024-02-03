'use client'

import { getUuid } from '@/utilities'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const RenderZonesTabs = ({ data }) => {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const { zonesSet, zonesDataObj, setZonesDataObj } = data

  return (
    <div className="my-10 flex flex-wrap items-center justify-center gap-4 whitespace-nowrap px-4">
      {[...zonesSet].map((zone) => {
        const handelOnchange = () => {
          setZonesDataObj((prevObj) => ({
            ...prevObj,
            [zone]: { ...prevObj[zone], checked: !prevObj[zone].checked },
          }))
        }

        const isChecked = zonesDataObj?.[zone]?.checked

        return (
          <label
            key={getUuid()}
            className="flex cursor-pointer items-center justify-center gap-2"
          >
            <input
              onChange={handelOnchange}
              name={zone}
              type="checkbox"
              checked={isChecked}
              className="checkbox no-animation"
            />
            <div>{zone}</div>
          </label>
        )
      })}
    </div>
  )
}

export default RenderZonesTabs
