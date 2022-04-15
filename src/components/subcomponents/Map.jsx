import React from 'react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'


export default function Map() {
    console.log(process.env.REACT_APP_GOOGLE_MAP_API)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
    })

    const center = { lat: 48.858093, lng: 2.294694 }

    if (!isLoaded) {
        return ('Loading...')
    } else {
        return (
            <>
                <GoogleMap center={center} zoom={15}>

                </GoogleMap>
            </>
        )
    }
}