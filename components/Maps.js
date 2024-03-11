'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import {
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  Marker,
  MarkerF,
  OverlayViewF,
  useGoogleMap,
  useJsApiLoader,
} from '@react-google-maps/api'
import { useSearchParams } from 'next/navigation'
import { getUuid } from '@/utilities'

const marker_icon = `https://firebasestorage.googleapis.com/v0/b/hording-work.appspot.com/o/images%2Flogo-rounded.png?alt=media&token=711a31d1-31cf-4751-bdda-51346b4a6471`

const API_KEY = `AIzaSyDB3-qVGXnsfhhCOhAC56oPe2-4x0ufO3Q`

const detailsArr = [
  {
    label: 'Site:',
    key: 'site',
  },
  {
    label: 'Size:',
    key: 'size',
  },
  {
    label: 'Availability:',
    key: 'availability',
  },
  {
    label: 'Illumination:',
    key: 'illumnination',
  },
  {
    label: 'Media:',
    key: 'media',
  },
  {
    label: 'Location:',
    key: 'address',
  },
]

const Maps = ({ hoardingData }) => {
  const searchParams = useSearchParams()
  const [activeMarker, setActiveMarker] = useState(null)
  const [mapCenter, setMapCenter] = useState({})

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center)
  //   map.fitBounds(bounds)

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  useEffect(() => {
    const currentCenter = searchParams.get('location')

    setMapCenter(() => {
      let loaction = hoardingData.at(0).data.location

      if (currentCenter) {
        location = JSON.parse(currentCenter)
      }

      return loaction
    })
  }, [searchParams, hoardingData])

  if (!isLoaded) return <div className="skeleton h-screen w-full"></div>

  return (
    <div className="my-10 h-screen w-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={17}

        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {hoardingData.map((obj) => {
          const {
            id,
            data: { location, site, media },
            data,
          } = obj

          return (
            <Marker
              key={id}
              position={location}
              onClick={() => setActiveMarker(id)}
              icon={{
                url: marker_icon,
                scaledSize: new google.maps.Size(40, 40),
              }}
            >
              {activeMarker === id ? (
                <InfoWindow position={location}>
                  <div className="">
                    {detailsArr.map((obj) => {
                      const { label, key } = obj

                      return (
                        <div key={getUuid()} className="flex gap-1">
                          <div className="font-bold">{label}</div>
                          <div className="line-clamp-1 font-normal">
                            {data[key]}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </InfoWindow>
              ) : (
                <></>
              )}
            </Marker>
          )
        })}
      </GoogleMap>
    </div>
  )
}

export default Maps
