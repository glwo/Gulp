//react-app/src/components/BusinessDetail/index.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { Link, useParams } from "react-router-dom";
import "./BusinessDetail.css"
import CreateReviewForm from "../Reviews/CreateReviewForm";

const BusinessDetail = () => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const business = useSelector(state => state.business.businesses)
  const currentBusiness = Object.values(business).find(business => business.id == businessId)
  const suggestBusiness = Object.values(business).filter(business => business.city == currentBusiness.city && business != currentBusiness)
  if (currentBusiness) {
    console.log(Math.floor(currentBusiness.avg_rating))
  }
  useEffect(() => {
    dispatch(thunkLoadAllBusinesses())
  }, [dispatch, businessId])

  if (!currentBusiness) {
    return null
  }

  return (
    <>
      <div className="business-image-div">
        {currentBusiness && currentBusiness.business_images.map(image => <img className="business-image" src={image.image_url}/>)}
      </div>
      <div className="detail-business-div">
        <div className="title-description-maindiv">
          <h1 className="title-store-name">{currentBusiness.store_name}</h1>
          <div>
            {currentBusiness.avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
            {currentBusiness.avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
            {currentBusiness.avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
            {currentBusiness.avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
            {currentBusiness.avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
            |  {currentBusiness.num_reviews} reviews
          </div>
          <div>{currentBusiness.description}</div>
          <div>{currentBusiness.opening_time} - {currentBusiness.closing_time}</div>
        </div>
        <div className="main-div">
          <div className="business-div">
            <div className="review-button-div">
              <Link to={`/business/${currentBusiness.id}/writeareview`}>Write a review</Link>
            </div>
            <h4>Location & Hours</h4>
            <div className="location-hour-maindiv">
              <div>
                <div>Google map here</div>
                <ul className="nl">
                  <li>{currentBusiness.address}</li>
                  <li>{currentBusiness.city}, {currentBusiness.state} {currentBusiness.zipcode}</li>
                </ul>
              </div>
              <ul className="nl">
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
              </ul>
              <ul className="nl">
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
              </ul>
            </div>
          </div>
          <div className="side-info-div">
            <div className="side-info-top-div">
              <div>Phone Number: {currentBusiness.phone_num}</div>
              <div>Direction: {currentBusiness.address} {currentBusiness.city}, {currentBusiness.state} {currentBusiness.zipcode}</div>
            </div>
            <h4>You might also consider</h4>
            <div>
              {suggestBusiness[0] &&
                <div className="suggest-business-div">
                  <img className="suggest-business-image" src={suggestBusiness[0].business_images[0].image_url}/>
                  {suggestBusiness[0].store_name}
                </div>
              }
              {suggestBusiness[1] &&
                <div className="suggest-business-div">
                  <img className="suggest-business-image" src={suggestBusiness[1].business_images[0].image_url}/>
                  {suggestBusiness[1].store_name}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessDetail;
