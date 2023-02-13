import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewDetails from './ReviewDetails'
import { getAllReviews } from '../../store/review'

function Reviews() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])


    const totalReviews = useSelector(state => state.reviews.allReviews)

    const reviews = Object.values(totalReviews)

    return (
        <div className='recent-activities'>
            <h1 id='recent-act-text'> Recent Activity </h1>
        <div className='reviewsContainer'>
            {reviews.map((review) => (
                <ReviewDetails key={review.id} {...review} />
            ))}
        </div>
        </div>
    )
}

export default Reviews
