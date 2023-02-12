//react-app/src/components/BusinessDetail/index.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadBusiness } from "../../store/business";
import { useParams } from "react-router-dom";

const BusinessDetail = () => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const business = useSelector(state => state.business.singleBusiness)
  // const { user } = useSelector(state => state.session);

  useEffect(() => {
    dispatch(thunkLoadBusiness(businessId))
  }, [dispatch, businessId])

  if (Object.values(business).length === 0) {
    return null
  }

  return (
    <div>
      <h1>Business Detail</h1>
      <h3>{business.store_name}</h3>
    </div>
  )
}

export default BusinessDetail;
