import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";

export default function BusinessCategory() {
    const [checkLocation, setCheckLocation] = useState(true)
    const { category, location } = useParams()
    const [checkType, setCheckType] = useState(category)

    useEffect(() => {
        if (!location) {
            setCheckLocation(false)
        }
    }, [checkLocation])

    return (
        <div>
            <h1>{category}</h1>
            <h2>{checkLocation ? 'Found location' : 'No location found'}</h2>
            <h2>{checkType ? 'Found type' : 'No type found'}</h2>
            <h2>location</h2>
        </div>
    )
}
