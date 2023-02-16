import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { allReviews } from '../../store/review'


function SingleReview({review}) {




    // const totalReviews = useSelector(state => state.reviews.allReviews)

    // console.log('review details', totalReviews)
    // const reviews = Object.values(totalReviews)
    // if (!totalReviews) return null



    return (
        <div>
            <h3> { review.content }
            </h3>
        </div>
    )
}

export default SingleReview
