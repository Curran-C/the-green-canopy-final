import React from 'react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'



export default function Map() {
    console.log(process.env.REACT_APP_GOOGLE_MAP_API)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAH_TptY7CjCz0LA9yfWwt9A3KnoZS_5a4'
    })

    const center = { lat: 48.858093, lng: 2.294694 }

    if (!isLoaded) {
        return ('Loading Map...')
    } else {
        return (
            <>
                <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: '100%', height: '100%' }}>

                </GoogleMap>
            </>
        )
    }
}