import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { allReviews } from '../../store/review'
import DeleteReview from './DeleteReview'
import ReviewDetails from './ReviewDetails'




function SingleReview({review}) {


    return (


        <div
            className="review"
            style={{
                border: ".5px lightgrey solid",
                borderRadius: "0px",
                padding: "10px",
                margin: "0px",
                width: "500px",
            }}
        >
            <h5> { review.content } </h5> { review.rating} {review.rating == 1 ? "Star" : "Stars "}
            {review.rating == 5 ? <span>⭐️⭐️⭐️⭐️⭐️  </span> : <span></span> }
            {review.rating == 4 ? <span>⭐️⭐️⭐️⭐️  </span> : <span></span> }
            {review.rating == 3 ? <span>⭐️⭐️⭐️  </span> : <span></span> }
            {review.rating == 2 ? <span>⭐️⭐️  </span> : <span></span> }
            {review.rating == 1 ? <span>⭐️  </span> : <span></span> }
            <h5>
            {review.firstName} {review.lastInitial}
            </h5>
            <img src={review.reviewImages[0].url} alt="review" style={{ width: "100px", height: "100px" }} />
        </div>
    )
}

export default SingleReview
