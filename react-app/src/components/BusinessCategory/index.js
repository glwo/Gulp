import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";

export default function BusinessCategory() {
    const { category } = useParams()

    // console.log(businessType)

    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}
