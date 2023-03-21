import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useParams } from "react-router-dom";
import BusinessCategoryCard from "../BusinessCategoryCard";
import { getKey } from "../../store/map";
import { getFilter } from "../../store/filter";
import('./businessCat.css')


export default function BusinessCategory() {
  const dispatch = useDispatch()
  const [checkLocation, setCheckLocation] = useState(true)
  const { category, location } = useParams()
  const [map, setMap] = useState(null)
  const key = useSelector(state => state.key)
  const realKey = key?.key
  const businesses = useSelector(state => state.business.businesses)
  const currentFilter = useSelector(state => state.filter?.filter)
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
  const locationList = []
  if (currentCat) {
    const list = currentCat.map(async curr => {
      const res = await getGeocode({ address: curr.address + curr.city }).then((res) => {
        const { lat, lng } = getLatLng(res[0])
        locationList.push({ lat, lng })
      })
    })
  }
  console.log(locationList)

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
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: realKey,
  });
  const containerStyle = {
    width: '600px',
    height: '600px'
  };
  const CurrentMap = () => {
    const center = useMemo(() => ({
      lng: -74.0060,
      lat: 40.7128
    }), [])

    return (
      <div >
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lng: -74.0060, lat: 40.7128 }}
            zoom={9}
          >
            {/* <MarkerClusterer>
                <div>
                  {() => locationList.map((location, i) => {
                      <Marker
                        key={i}
                        position={{ lat: location.lat, lng: location.lng }}
                      />
                      
                    })
                  }
                </div>
            </MarkerClusterer> */}
            

            <MarkerClusterer>
              {(clusterer) => currentCat?.map((curr, i) => {
                return (
                  <div>
                    < Marker
                      key={i}
                      position={{ lat: 40.69562006703377, lng: -74.18387869355652 }}
                    />
                    < Marker
                      key={i}
                      position={{ lat: 40.7749295, lng: -74.18397869355652 }}
                    />
                  </div>
                )
              })}
            </MarkerClusterer>
          </GoogleMap>

        )}
      </div >
    )
  }
  if (locationList == undefined || key == undefined) return null;

  return (
    <div className='mainCatPage'>
      <div className='singleBusinessCat'>
        <h1>{category}</h1>
        <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
        <h2>location</h2>
        {bussinessList}
      </div>
      <div className='bigMap'>
        <CurrentMap />
      </div>
    </div>
  )
}
