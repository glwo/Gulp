import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { getKey } from "../../store/map";

const Map = ({currentBusiness}, {lat}, lng) => {
  // console.log(lng)
  const [location, setLocation] = useState('')
  const dispatch = useDispatch();
  const key = useSelector(state => state.key)
  const realKey = key?.key

  // useEffect(async () => {
  //   const res = await getGeocode({ address: currentBusiness.address + currentBusiness.city })
  //   const {lat, lng} = getLatLng(res[0])
  //   setLocation({lat, lng})
  //   console.log({lat, lng})
  // }, [])
  // let location;

  // if (currentBusiness) {

  //   const getLocation = async () => {
  //     const res = getGeocode({ address: currentBusiness.address + currentBusiness.city })
  //       .then(async (res) => {
  //         const { lat, lng } = await getLatLng(res[0])
  //         location = { lat, lng }
  //       })
  //     return location
  //   }
  //   setTimeout(() => {
  //     console.log(location)
  //   }, 2000)
  // }
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: realKey,
  });
  const containerStyle = {
    width: '300px',
    height: '250px'
  };
  // if (!location) return null

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{lng: 40, lat: 37}}
      zoom={9}
    >
      {/* <MarkerClusterer>
        < Marker
          key={currentBusiness.id}
          position={{ lat: 40, lng: 37 }}
        />
      </MarkerClusterer> */}
    </GoogleMap>
  )
}

export default Map;
