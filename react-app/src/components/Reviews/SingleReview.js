import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allReviews } from '../../store/review'
import DeleteReview from './DeleteReview'
import ReviewDetails from './ReviewDetails'
import './SingleReview.css'

// const getUser = (id) => {
//   const specificUser = Object.values(reviews).find(business => user.id == id)
//   return specificUser
// }

function SingleReview({ review }) {
  return (
    <div className="review" >
      <div style={{display:"flex", columnGap:"10px", alignItems:"center"}}>
        <img className='userImage' src={review.user.img_url} />
        <div style={{fontSize:"20px", fontWeight:"800"}}>
            {review.firstName} {review.lastInitial}
        </div>
      </div>
      <div>
        {review.rating} {review.rating == 1 ? "Star" : "Stars "}
        {review.rating == 5 ? <span>⭐️⭐️⭐️⭐️⭐️  </span> : <span></span>}
        {review.rating == 4 ? <span>⭐️⭐️⭐️⭐️  </span> : <span></span>}
        {review.rating == 3 ? <span>⭐️⭐️⭐️  </span> : <span></span>}
        {review.rating == 2 ? <span>⭐️⭐️  </span> : <span></span>}
        {review.rating == 1 ? <span>⭐️  </span> : <span></span>}
      </div>
      <div> {review.content} </div>
      <div>
        <img src={review.reviewImages[0].url} alt="review" style={{ width: "100px", height: "100px", borderRadius: "5px" }} />
      </div>
    </div>
  )
}

export default SingleReview
