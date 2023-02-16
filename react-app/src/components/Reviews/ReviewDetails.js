import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { allReviews } from '../../store/review'
import SingleReview from './SingleReview'
import OpenModalButton from '../OpenModalButton'
import EditReviewModal from './EditReviewModal'
import DeleteReview from './DeleteReview'


function ReviewDetails({businessId}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allReviews())
    }, [dispatch])


    const totalReviews = useSelector(state => state.reviews.allReviews)
    const currentUser = useSelector(state => state.session.user)
    const [openModal, setOpenModal] = useState(false)


    // console.log('review details', totalReviews)
    const reviews = Object.values(totalReviews).filter(review => review.business_id == businessId)
    if (!totalReviews) return null

    return (
        <div>
            <h3> All Reviews </h3>
            <div className='reviewsContainer'>
                {reviews.map((review) => (
                    <div>
                        {currentUser && review.user_id == currentUser.id ? <div>
                            <OpenModalButton
        buttonText="Edit Review"
        modalComponent={<EditReviewModal key={review.id} reviewDetails={review} />}
        onButtonClick={() => setOpenModal(true)}
        onModalClose={() => setOpenModal(false)}
      />
                        </div> : "" }
                        <SingleReview key={review.id} review={review} />
                        {currentUser && review.user_id == currentUser.id ? <div>
                            <DeleteReview key={review.id} review={review} />
                        </div> : "" }
                        </div>
                ))}

            </div>
        </div>
    )
}

export default ReviewDetails