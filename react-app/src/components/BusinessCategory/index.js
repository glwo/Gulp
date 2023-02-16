import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useParams } from "react-router-dom";
import BusinessCard from "../BusinessCard";
import { getKey } from "../../store/map";
import { getFilter } from "../../store/filter";
import('./businessCat.css')


export default function BusinessCategory() {
    const dispatch = useDispatch()
    const [checkLocation, setCheckLocation] = useState(true)
    const { category, location } = useParams()
    const [locations, setLocations] = useState([])
    // const [checkType, setCheckType] = useState('')

    const key = useSelector(state => state.key)
    const realKey = key?.key
    // console.log(realKey, 'real key now')
    const businesses = useSelector(state => state.business.businesses)
    const currentFilter = useSelector(state => state.filter?.filter)
    // console.log(businesses, 'check if emphty')
    useEffect(() => {
        if (!location) {
            setCheckLocation(false)
        }
        if ((Object.keys(businesses).length === 0)) {
            dispatch(thunkLoadAllBusinesses()) //just in case don't really need it
        }
        if ((Object.keys(key).length === 0)) dispatch(getKey())
        // setCheckType(category || '')
        if (!currentFilter) {
            dispatch(getFilter())
        }
    }, [checkLocation, businesses, key, currentFilter])
    const derivedBusinessType = category == 'filter' ? true : category == 'autoServices' ? 'auto' : category == 'homeServices' ? 'home' : category == 'hairSalons' ? 'salon' : 'restaurant'
    const catList = (() => {
        const list = []
        if (derivedBusinessType === true) {
            if (currentFilter?.category1 || '' != 'noInput') list.push(currentFilter.category1)
            if (currentFilter?.category2 || '' != 'noInput') list.push(currentFilter.category2)
            if (currentFilter?.category3 || '' != 'noInput') list.push(currentFilter.category3)
            return list
        }
        return [derivedBusinessType]
    })();

    console.log(catList, 'catList')

    // const currentCat = Object.values(businesses).filter(curr => curr.business_type == derivedBusinessType)
    const currentCat = Object.values(businesses).filter(curr => catList?.includes(curr.business_type))

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
    const containerStyle = {
        width: '1000px',
        height: '800px'
    };
    const CurrentMap = () => {
        const center = useMemo(() => ({
            lng: -74.0060,
            lat: 40.7128
        }), [])
        const locations = useMemo(async () => (async () => {
            return currentCat?.map((curr) => {
                getGeocode({ address: curr.address + curr.city }).then((res) => {
                    const { lat, lng } = getLatLng(res[0])
                    console.log(lat, lng, 'res map')
                }).then((lat, lng) => ({ lat, lng }))
                // return { lat, lng }
            })
        }
        )(), [currentCat])
        // setLocations(locations)
        console.log(locations, 'locations')
        // const mapRef = useRef()
        // const onLoad = useCallback(map => (mapRef.current = map), [])
        // const trackNewCenter = async () => {
        //     const lat = mapRef.current?.getCenter().lat()
        //     const lng = mapRef.current?.getCenter().lng()
        //     const zoom = mapRef.current?.getZoom()
        // }
        return (
            <div >
                {isLoaded && (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <MarkerClusterer>
                            {(clusterer) => locations?.map((curr, i) => (

                                <Marker
                                    // label={{ fontWeight: 'bold', fontSize: "5px", text: `${curr.store_name}` }}
                                    key={i}
                                    // clusterer={clusterer}
                                    position={curr}

                                />
                            ))}

                        </MarkerClusterer>
                    </GoogleMap>

                )}
            </div >
        )
    }

    return (
        <div className='mainCatPage'>
            <div className='singleBusinessCat'>
                <h1>{category}</h1>
                <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
                {/* <h2>{checkType ? 'Found type' : 'No type found'}</h2> */}
                <h2>location</h2>
                {bussinessList}
            </div>
            <div className='bigMap'>
                <CurrentMap />
            </div>
        </div>
    )
}
