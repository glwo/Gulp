import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReviewDetails from './ReviewDetails'
import { getAllReviews } from '../../store/review'
import CreateReviewForm from './CreateReviewForm'
import OpenModalButton from '../OpenModalButton'

function Reviews() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])


    const totalReviews = useSelector(state => state.reviews.allReviews)

    const reviews = Object.values(totalReviews)

    return (
        <div>
            <h1> Reviews
            </h1>
            <div className='reviewsContainer'>
                {reviews.map((review) => (
                    <ReviewDetails key={review.id} {...review} />
                ))}
            </div>
            <OpenModalButton
                buttonName='Write a Review'
                modalName='CreateReviewForm'
                modalContent={<CreateReviewForm />}
            />
        </div>
    )
}


export default Reviews
