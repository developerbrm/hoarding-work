'use client'

import Link from 'next/link'
import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

const API_KEY = `AIzaSyC686X49eO5SmTXlaNMUOdrWwDzC6UmJZ0`

const Maps = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 28.647301916983857,
    lng: 77.18975370155093,
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

  if (!isLoaded) return <></>

  return (
    <div className="my-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  )
}

export default Maps
