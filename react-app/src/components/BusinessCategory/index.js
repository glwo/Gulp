import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";
import BusinessCard from "../BusinessCard";

export default function BusinessCategory() {
    const dispatch = useDispatch()
    const [checkLocation, setCheckLocation] = useState(true)
    const { category, location } = useParams()
    // const [checkType, setCheckType] = useState('')

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
        // setCheckType(category || '')
    }, [checkLocation, businesses, derivedBusinessType])

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

    return (
        <div>
            <h1>{category}</h1>
            <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
            {/* <h2>{checkType ? 'Found type' : 'No type found'}</h2> */}
            <h2>location</h2>
            {bussinessList}
        </div>
    )
}
