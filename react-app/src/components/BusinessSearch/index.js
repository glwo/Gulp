import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { useLocation, useParams } from "react-router-dom";
import BusinessCategoryCard from "../BusinessCategoryCard";
import BusinessCard from "../BusinessCard";

export default function BusinessSearch({ props }) {
    const dispatch = useDispatch()
    // const { serachres, location } = useParams()
    const location = useLocation()
    // console.log(location)


    const { search, city } = { ...location.state }
    // console.log(search, city)

    const businesses = useSelector(state => state.business.businesses)
    // console.log(businesses, 'businesses')
    let currentSearch = Object.values(businesses).filter(curr => (curr['store_name']).toLowerCase().includes((search).toLowerCase()) || (curr['description']).toLowerCase().includes((search).toLowerCase()) || (curr['business_type']).toLowerCase().includes((search).toLowerCase()) || (curr['address']).toLowerCase().includes((search).toLowerCase()))
    // console.log(currentSearch)



    if (city == 'nyc' || city == 'sf') {
        currentSearch = currentSearch.filter(curr => {
            if (city == 'nyc') {

                return curr.city == 'New York'
            }

            return curr.city == 'San Francisco'
        })
    }

    useEffect(() => {
        if ((Object.keys(businesses).length === 0)) {
            dispatch(thunkLoadAllBusinesses()) //just in case don't really need it, scratch that.. I NEED IT
        }
    })

    const bussinessList = currentSearch?.map(curr => {
        return (
            <div key={curr?.id} className='businessSingle'>
                {/* <div>{curr?.store_name}</div> */}
                {/* <div>{forum?.content}</div> */}
                <BusinessCategoryCard business={curr} key={curr.id} />
            </div>
        )
    })

    return (
        <div>
            {currentSearch?.length > 0 ? <h2>Found {currentSearch.length} Result{currentSearch?.length == 1 ? '' : 's'} {search ? 'for' : ''} {search}{city ? ' in' : ' '} {city == 'nyc' ? "New York City" : city == 'sf' ? "San Francisco" : 'All Cities'}</h2> : <h2>No Results found {search ? 'for ' : ' '}{search}{city ? ' in' : ' '} {city == 'nyc' ? "New York City" : city == 'sf' ? "San Francisco" : 'All Cities'}</h2>}
            {bussinessList}
        </div>
    )
}
