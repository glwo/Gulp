//react-app/src/components/BusinessDetail/index.js
import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkLoadAllBusinesses } from "../../store/business";
import { Link, useParams } from "react-router-dom";
import "./BusinessDetail.css"
import CreateReviewForm from "../Reviews/CreateReviewForm";
import CreateReviewModal from "../Reviews/EditReviewModal";
import OpenModalButton from "../OpenModalButton";
import ReviewDetails from "../Reviews/ReviewDetails";
import { getKey } from "../../store/map";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MarkerClusterer } from "@react-google-maps/api";
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import Geocode from 'react-geocode'
import Map from "../Map";
import { Cluster } from "@googlemaps/markerclusterer";

const BusinessDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const business = useSelector(state => state.business.businesses)
  const [location, setLocation] = useState()
  const key = useSelector(state => state.key)
  const realKey = key?.key
  const currentBusiness = Object.values(business).find(business => business.id == businessId)
  const suggestBusiness = Object.values(business).filter(business => business.city == currentBusiness.city && business.business_type == currentBusiness.business_type && business != currentBusiness)
  if (key) {
    Geocode.setApiKey(realKey)
  }
  let businessReviews;
  if (currentBusiness) {
    businessReviews = currentBusiness.review
  }

  useEffect(() => {
    dispatch(thunkLoadAllBusinesses())
    dispatch(getKey())
  }, [dispatch, businessId])

  const reviewFilter = (array, num) => {
    if (array) {
      const result = array.filter(review => review.rating == num)
      return result.length
    }
    return null
  }

  useEffect(() => {
    if (currentBusiness && key) {
      const realAddress = currentBusiness.address + " " + currentBusiness.city + " " + currentBusiness.state
      Geocode.fromAddress(realAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLocation({lat, lng})
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [currentBusiness])

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: realKey,
  });
  const containerStyle = {
    width: '300px',
    height: '250px'
  };

  const CurrentMap = () => {
    if (!location) {
      return null
    }

    return isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lng: location.lng, lat: location.lat }}
        zoom={9}
      >
        <MarkerClusterer>
          {(cluster) => {
            return (
              < Marker
                key={currentBusiness.id}
                position={{ lat: location.lat, lng: location.lng }}
              />
            )
          }}
        </MarkerClusterer>
      </GoogleMap>
    )
  }

  if (!currentBusiness) {
    return null
  }

  return (
    <>
      <div className="business-image-div">
        {currentBusiness && currentBusiness.business_images.map(image => <img className="business-image" src={image.image_url} />)}
      </div>
      <div className="main-div">
        <div className="title-description-main-div">
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
        <div className="detail-business-div">
          <div className="business-div">
            <div>
              <Link to={`/business/${currentBusiness.id}/writeareview`}>
                <button className="write-review-button">{<i class="fa-regular fa-star"></i>} Write a review</button>
              </Link>
            </div>
            <h3>Location & Hours</h3>
            <div className="location-hour-main-div">
              <div>
                <div className="businessMap">
                  {/* {isLoading 
                  ? <div>Loading...</div> 
                  : currentBusiness && key && <Map currentBusiness={currentBusiness} location={location}/>} */}
                  {/* {lat && lng && <Map currentBusiness={currentBusiness} lat={lat} lng={lng}/>} */}
                  <CurrentMap />
                </div>
                <ul className="nl">
                  <li>{currentBusiness.address}</li>
                  <li>{currentBusiness.city}, {currentBusiness.state} {currentBusiness.zipcode}</li>
                </ul>
              </div>
              <ul className="nl open-close">
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>
              </ul>
              <ul className="nl open-close">
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
                <li>{currentBusiness.opening_time} - {currentBusiness.closing_time}</li>
              </ul>
            </div>
            <div className="review-main-div">
              <h3>Recommended Reviews</h3>
              <div className="review-overall-rating-div">
                <div className="review-overall-div">
                  <div>
                    Overall rating
                  </div>
                  <div>
                    {currentBusiness.avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                    {currentBusiness.avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                    {currentBusiness.avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                    {currentBusiness.avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                    {currentBusiness.avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                  </div>
                  <div>
                    {currentBusiness.num_reviews} reviews
                  </div>
                </div>
                <div className="review-rating-div">
                  <div className="rating-bar">
                    <div>
                      5 stars
                    </div>
                    <meter min="0" max={currentBusiness.num_reviews} value={reviewFilter(businessReviews, 5)} >Rate 5 stars</meter>
                  </div>
                  <div className="rating-bar">
                    <div>
                      4 stars
                    </div>
                    <meter min="0" max={currentBusiness.num_reviews} value={reviewFilter(businessReviews, 4)} >Rate 4 stars</meter>
                  </div>
                  <div className="rating-bar">
                    <div>
                      3 stars
                    </div>
                    <meter min="0" max={currentBusiness.num_reviews} value={reviewFilter(businessReviews, 3)} >Rate 3 stars</meter>
                  </div>
                  <div className="rating-bar">
                    <div>
                      2 stars
                    </div>
                    <meter min="0" max={currentBusiness.num_reviews} value={reviewFilter(businessReviews, 2)}>Rate 2 stars</meter>
                  </div>
                  <div className="rating-bar">
                    <div>
                      1 star
                    </div>
                    <meter min="0" max={currentBusiness.num_reviews} value={reviewFilter(businessReviews, 1)}>Rate 1 star</meter>
                  </div>
                </div>
              </div>
              <div className="all-review-div">
                <div>
                  < ReviewDetails businessId={currentBusiness.id} />
                </div>
              </div>
            </div>
          </div>
          <div className="side-info-div">
            <div className="sticky">
              <div className="side-info-top-div">
                <div className="info-container">
                  <div>
                    ({currentBusiness.phone_num.slice(0, 3)})-{currentBusiness.phone_num.slice(3, 6)}-{currentBusiness.phone_num.slice(6)} 
                  </div>
                  <div>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="info-container">
                  <div>
                    <p>Direction: </p>
                    <p>{currentBusiness.address} {currentBusiness.city}, {currentBusiness.state} {currentBusiness.zipcode}</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-diamond-turn-right"></i>
                  </div>
                </div>
              </div>
              <h3>You might also consider</h3>
              <div className="suggest-business-main-div">
                {suggestBusiness[0] &&
                  <Link className="suggest-business-single-div" to={`/business/${suggestBusiness[0].id}`}>
                    <img className="suggest-business-image" src={suggestBusiness[0].business_images[0].image_url} />
                    <div className="suggest-business-div">
                      <div>
                        {suggestBusiness[0].store_name}
                      </div>
                      <div>
                        {suggestBusiness[0].avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[0].avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[0].avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[0].avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[0].avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                      </div>
                      <div>
                        {suggestBusiness[0].num_reviews} reviews
                      </div>
                    </div>
                  </Link>
                }
                {suggestBusiness[1] &&
                  <Link className="suggest-business-single-div" to={`/business/${suggestBusiness[1].id}`}>
                    <img className="suggest-business-image" src={suggestBusiness[1].business_images[0].image_url} />
                    <div className="suggest-business-div">
                      <div>
                        {suggestBusiness[1].store_name}
                      </div>
                      <div>
                        {suggestBusiness[1].avg_rating >= 1 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[1].avg_rating >= 2 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[1].avg_rating >= 3 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[1].avg_rating >= 4 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                        {suggestBusiness[1].avg_rating >= 5 ? <i className="fas fa-solid fa-star red"></i> : <i className="fas fa-solid fa-star gray"></i>}
                      </div>
                      <div>
                        {suggestBusiness[1].num_reviews} reviews
                      </div>
                    </div>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessDetail;
