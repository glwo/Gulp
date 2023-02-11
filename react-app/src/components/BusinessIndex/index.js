//react-app/src/components/BusinessIndex/index.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";


const BusinessesIndex = () => {
  const dispatch = useDispatch();
  const allBusinessesData = useSelector(state => state.business.businesses)
  let allBusinesses;
  if (allBusinessesData) allBusinesses = Object.values(allBusinessesData);
  useEffect(() => {
    dispatch(thunkLoadAllBusinesses())
  }, [dispatch])

  if (!allBusinesses) {
    return null
  }

  return (
    <div>
      {allBusinesses.map(business => <li>{business.store_name}</li>)}
    </div>
  )
};

export default BusinessesIndex;
