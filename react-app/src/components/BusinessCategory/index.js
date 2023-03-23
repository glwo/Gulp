import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import Geocode from 'react-geocode'
import { useParams } from "react-router-dom";
import BusinessCategoryCard from "../BusinessCategoryCard";
import { getKey } from "../../store/map";
import { getFilter } from "../../store/filter";
import('./businessCat.css')


export default function BusinessCategory() {
  const dispatch = useDispatch()
  const [checkLocation, setCheckLocation] = useState(true)
  const [businessLocation, setBusinessLocation] = useState([])
  const { category, location } = useParams()
  const [loadMap, setMap] = useState(true)

  const businesses = useSelector(state => state.business.businesses)
  const currentFilter = useSelector(state => state.filter?.filter)
  const key = useSelector(state => state.key)
  const realKey = key?.key

  const derivedBusinessType = category == 'filter' && (currentFilter) ? true : category == 'autoServices' ? 'auto' : category == 'homeServices' ? 'home' : category == 'hairSalons' ? 'salon' : 'restaurant'
  const catList = (() => {
    const list = []
    if (derivedBusinessType === true) {
      if (currentFilter.category1 != 'noInput') list.push(currentFilter.category1)
      if (currentFilter.category2 != 'noInput') list.push(currentFilter.category2)
      if (currentFilter.category3 != 'noInput') list.push(currentFilter.category3)
      return list
    }
    return [derivedBusinessType]
  })();

  let currentCat = Object.values(businesses).filter(curr => catList?.includes(curr.business_type))


  if (currentFilter?.reviews != 'noInput') currentCat.sort((a, b) => {
    if (currentFilter?.reviews == 'fromHigh') return b?.num_reviews - a?.num_reviews
    return a?.num_reviews - b?.num_reviews
  })
  if (currentFilter?.ratings != 'noInput') currentCat.sort((a, b) => {
    if (currentFilter?.ratings == 'fromHigh') return b?.avg_rating[0] - a?.avg_rating[0]
    return a?.avg_rating[0] - b?.avg_rating[0]
  })

  useEffect(async () => {
    dispatch(thunkLoadAllBusinesses()) //just in case don't really need it
    dispatch(getKey())
    dispatch(getFilter())
  }, [dispatch])

  const bussinessList = currentCat?.map(curr => {
    return (
      <div key={curr?.id} className='businessSingle'>
        <BusinessCategoryCard business={curr} key={curr.id} />
      </div>
    )
  })

  // for Google API
  if (key) {
    Geocode.setApiKey(realKey)
  }

  // useEffect(() => {
  //   let locationList = [];
  //   if (currentCat) {
  //     currentCat.forEach((business) => {
  //       const realAddress = business.address + " " + business.city + " " + business.state
  //       Geocode.fromAddress(realAddress).then(
  //         (response) => {
  //           const { lat, lng } = response.results[0].geometry.location;
  //           locationList.push({lat, lng})
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //         );
  //     })
  //     setBusinessLocation(locationList)
  //     setMap(false)
  //   }
  // }, [])
  // console.log(businessLocation)


  // const { isLoaded } = useLoadScript({
  //   id: 'google-map-script',
  //   googleMapsApiKey: realKey,
  // });
  // const containerStyle = {
  //   width: '600px',
  //   height: '600px'
  // };
  // let center;
  // if (businessLocation.length != 0) {
  //   center = {
  //     lat: businessLocation[0].lat,
  //     lng: businessLocation[0].lng
  //   }
  // }
  // const CurrentMap = () => {

  //   if (loadMap == true) {
  //     return (
  //       <div>
  //         Loading...
  //       </div>
  //     )
  //   }

  //   return (
  //     <div >
  //       {isLoaded && (
  //         <GoogleMap
  //           mapContainerStyle={containerStyle}
  //           center={{ lat: 40.71566079999999, lng: -73.99670119999999}}
  //           // center={center}
  //           zoom={9}
  //         >
  //           {
  //             businessLocation.length != 0 && 
  //             <MarkerClusterer>
  //               {(clusterer) => businessLocation.map((location, i) => (
  //                 < Marker
  //                   key={i}
  //                   position={location}
  //                 />
  //               ))}
  //             </MarkerClusterer>
  //           }
  //         </GoogleMap>

  //       )}
  //     </div >
  //   )
  // }
  // if (key == undefined || currentCat == undefined) return null;
  // if (isLoading == true) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }

  return (
    <div className='mainCatPage'>
      <div className='singleBusinessCat'>
        <h1>{category}</h1>
        <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
        <h2>location</h2>
        {bussinessList}
      </div>
      {/* <div className='bigMap'>
        <CurrentMap />
      </div> */}
    </div>
  )
}
