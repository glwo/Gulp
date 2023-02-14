import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useParams } from "react-router-dom";
import BusinessCard from "../BusinessCard";
import { getKey } from "../../store/map";


export default function BusinessCategory() {
    const dispatch = useDispatch()
    const [checkLocation, setCheckLocation] = useState(true)
    const { category, location } = useParams()
    // const [checkType, setCheckType] = useState('')

    const key = useSelector(state => state.key)
    const realKey = key?.key
    console.log(realKey, 'real key now')
    const businesses = useSelector(state => state.business.businesses)
    console.log(businesses, 'check if emphty')
    const derivedBusinessType = category == 'restaurants' ? 'restaurant' : category == 'autoServices' ? 'auto' : category == 'homeServices' ? 'home' : category == 'hairSalons' ? 'salon' : 'restaurants'

    useEffect(() => {
        if (!location) {
            setCheckLocation(false)
        }
        if ((Object.keys(businesses).length === 0)) {
            dispatch(thunkLoadAllBusinesses()) //just in case don't really need it
        }
        if ((Object.keys(key).length === 0)) dispatch(getKey())
        // setCheckType(category || '')
    }, [checkLocation, businesses, derivedBusinessType, key])

    const currentCat = Object.values(businesses).filter(curr => curr.business_type == derivedBusinessType)
    // console.log(derivedBusinessType, 'derived')
    // console.log(businesses)
    console.log(currentCat, 'current businesses')

    const bussinessList = currentCat?.map(curr => {
        return (
            <div key={curr?.id} className='businessSingle'>
                {/* <div>{curr?.store_name}</div> */}
                {/* <div>{forum?.content}</div> */}
                <BusinessCard business={curr} key={curr.id} />
            </div>
        )
    })
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: realKey
    });
    const CurrentMap = () => {
        const center = useMemo(() => ({
            lng: -74.0060,
            lat: 40.7128
        }), [])
        const containerStyle = {
            width: '400px',
            height: '600px'
        };
        return (
            <div>
                {isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <MarkerClusterer>
                            {currentCat?.map((curr) => (

                                <Marker
                                    label={{ fontWeight: 'bold', fontSize: "5px", text: `${curr.store_name}` }}

                                >
                                </Marker>
                            ))}

                        </MarkerClusterer>
                    </GoogleMap>

                )}
            </div>
        )
    }

    return (
        <div>
            <h1>{category}</h1>
            <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
            {/* <h2>{checkType ? 'Found type' : 'No type found'}</h2> */}
            <h2>location</h2>
            {bussinessList}
            <CurrentMap />
        </div>
    )
}
