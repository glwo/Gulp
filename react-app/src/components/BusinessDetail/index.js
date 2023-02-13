//react-app/src/components/BusinessDetail/index.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";

const BusinessDetail = () => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const business = useSelector(state => state.business.businesses)
  const currentBusiness = Object.values(business).find(business => business.id == businessId)

  useEffect(() => {
    dispatch(thunkLoadAllBusinesses())
  }, [dispatch, businessId])

  if (!currentBusiness) {
    return null
  }

  return (
    <div>
      <h1>Business Detail</h1>
      <h3>{currentBusiness.store_name}</h3>
    </div>
  )
}

export default BusinessDetail;
