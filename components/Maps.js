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

const API_KEY = `AIzaSyC686X49eO5SmTXlaNMUOdrWwDzC6UmJZ0`

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
    height: '800px',
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
            >
              {activeMarker === id ? (
                <InfoWindow position={location}>
                  <div className="">
                    {detailsArr.map((obj) => {
                      const { label, key } = obj

                      return (
                        <div key={getUuid()} className="flex gap-1">
                          <div className="font-bold">{label}</div>
                          <div className="font-normal line-clamp-1">{data[key]}</div>
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
