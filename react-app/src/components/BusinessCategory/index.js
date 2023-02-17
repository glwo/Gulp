import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { GoogleMap, useLoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useParams } from "react-router-dom";
// import BusinessCard from "../BusinessCard";
import BusinessCategoryCard from "../BusinessCategoryCard";
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

    // console.log(catList, 'catList')

    // const currentCat = Object.values(businesses).filter(curr => curr.business_type == derivedBusinessType)

    let currentCat = Object.values(businesses).filter(curr => catList?.includes(curr.business_type))

    if (currentFilter?.reviews != 'noInput') currentCat.sort((a, b) => {
        if (currentFilter?.reviews == 'fromHigh') return b?.num_reviews - a?.num_reviews
        return a?.num_reviews - b?.num_reviews
    })
    if (currentFilter?.ratings != 'noInput') currentCat.sort((a, b) => {
        if (currentFilter?.ratings == 'fromHigh') return b?.avg_rating[0] - a?.avg_rating[0]
        return a?.avg_rating[0] - b?.avg_rating[0]
    })


    // const Temp = (() => {
    //     const locationList = []
    //     currentCat?.forEach((curr) => {
    //         const res = getGeocode({ address: curr.address + curr.city }).then((res) => {
    //             console.log(res, 'this is ressssssssssssss')
    //             const { lat, lng } = getLatLng(res[0])
    //             console.log(lat, lng, 'res map')
    //             locationList.push({ lat, lng })
    //         })
    //     })
    //     console.log(locationList, 'locationList')
    //     return locationList
    // })()
    // console.log(Temp, 'temp')

    // const Temp = useEffect(() => {
    //     const locationList = []
    //     currentCat?.forEach((curr) => {
    //         const res = getGeocode({ address: curr.address + curr.city }).then((res) => {
    //             const { lat, lng } = getLatLng(res[0])
    //             console.log(lat, lng, 'res map')
    //             locationList.push({ lat, lng })
    //         })
    //     })
    //     console.log(locationList, 'locationList')
    //     return locationList
    // }, [])
    // console.log(Temp, 'temp')







    // const CurrentMap = () => {
    //     const center = useMemo(() => ({
    //         lng: -74.0060,
    //         lat: 40.7128
    //     }), [])

    useEffect(async () => {
        // if (!location) {
        //     setCheckLocation(false)
        // }
        if ((Object.keys(businesses).length === 0)) {
            dispatch(thunkLoadAllBusinesses()) //just in case don't really need it
        }
        if ((Object.keys(key).length === 0)) dispatch(getKey())
        // setCheckType(category || '')
        if (!currentFilter) {
            dispatch(getFilter())
        }
        // if (currentCat && !location) {
        //     console.log('cat if')
        //     setLocations(currentCat?.map(async (curr) => {
        //         await getGeocode({ address: curr.address + curr.city }).then((res) => {
        //             const { lat, lng } = getLatLng(res[0])
        //             console.log(lat, lng, 'res map')
        //             return { lat, lng }
        //         })
        //         // .then((lat, lng) => { return { lat, lng } })
        //     }))

        // }
        // console.log(locations, 'locationsGeo')

        // const temp = (() => {
        //     const locationList = []
        //     currentCat?.forEach(async (curr) => {
        //         const res = await getGeocode({ address: curr.address + curr.city })
        //         const { lat, lng } = await getLatLng(res[0])
        //         console.log(lat, lng, 'res map')
        //         locationList.push({ lat, lng })
        //     })
        //     console.log(locationList, 'locationList')
        //     setLocations(locationList)
        //     // return locationList
        // })
        // console.log(locations, 'what is location')


        // if ((!currentCat && !locations) || (locations?.length !== currentCat?.length)) {
        //     temp()
        // }


        // console.log(temp, 'temp')


        // if (locations?.length !== currentCat?.length) temp()

    }, [checkLocation, businesses, key, currentFilter, currentCat])


    // if (currentCat) {
    //     const list = currentCat.map(curr => {
    //         const res = getGeocode({ address: (curr.address + curr.city) })
    //         if (res) {
    //             const { lat, lng } = getLatLng(res[0])
    //             return { lat, lng }
    //         }
    //     })
    //     console.log(list, 'list of lat lng ')
    //     // const latlng = list.map(curr => {

    //     // })
    // }

    // console.log(currentCat, 'current businesses')

    const bussinessList = currentCat?.map(curr => {
        return (
            <div key={curr?.id} className='businessSingle'>
                {/* <div>{curr?.store_name}</div> */}
                {/* <div>{forum?.content}</div> */}
                <BusinessCategoryCard business={curr} key={curr.id} />
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
        // const locations = useMemo(async () => (async () => {
        //     return currentCat?.map((curr) => {
        //         getGeocode({ address: curr.address + curr.city }).then((res) => {
        //             const { lat, lng } = getLatLng(res[0])
        //             console.log(lat, lng, 'res map')
        //         }).then((lat, lng) => ({ lat, lng }))
        //         // return { lat, lng }
        //     })
        // }
        // )(), [currentCat])
        // console.log(locations, 'locations')
        // setLocations(locations)
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
                            {(clusterer) => currentCat?.map((curr, i) => {
                                // console.log(curr, 'curr is what')
                                return (
                                    // const currentGeo = getGeocode({address: curr.address + curr.city}).then(res => {
                                    //     const {lat,lng} = getLatLng(res[0])
                                    //     console.log(lat, lng, "temp")
                                    //     return {lat, lng}
                                    // })
                                    // console.log(curr, 'curr inside temp.map')

                                    < Marker
                                        // label={{ fontWeight: 'bold', fontSize: "5px", text: `${curr.store_name}` }}
                                        key={i}
                                        // clusterer={clusterer}
                                        position={{ lat: 40.69562006703377, lng: -74.18387869355652 }}
                                    // position={curr}
                                    // currentCat?.map((curr) => {
                                    //     getGeocode({ address: curr.address + curr.city }).then((res) => {
                                    //         const { lat, lng } = getLatLng(res[0])
                                    //         console.log(lat, lng, 'res map')
                                    //     }).then((lat, lng) => ({ lat, lng }))
                                    //     // return { lat, lng }
                                    // })

                                    />
                                )
                            }
                            )}

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
