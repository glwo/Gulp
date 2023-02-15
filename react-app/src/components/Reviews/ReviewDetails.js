import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allReviews } from '../../store/review'
import SingleReview from './SingleReview'


function ReviewDetails({businessId}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allReviews())
    }, [dispatch])




    const totalReviews = useSelector(state => state.reviews.allReviews)

    console.log('review details', totalReviews)
    const reviews = Object.values(totalReviews).filter(review => review.business_id == businessId)
    if (!totalReviews) return null

    return (
        <div>
            <h3> Reviews
            </h3>
            <div className='reviewsContainer'>
                {reviews.map((review) => (
                    <SingleReview key={review.id} review={review} />
                ))}
            </div>
        </div>
    )
}

export default ReviewDetails












// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import ReviewDetails from './ReviewDetails'
// import { allReviews } from '../../store/review'
// import CreateReviewForm from './CreateReviewForm'
// import OpenModalButton from '../OpenModalButton'

// function ReviewDetails() {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(allReviews())
//     }, [dispatch])


//     const totalReviews = useSelector(state => state.reviews.allReviews)

//     const reviews = Object.values(totalReviews)

//     return (
//         <div>
//             <h3> Reviews
//             </h3>
//             <div className='reviewsContainer'>
//                 {reviews.map((review) => (
//                     <ReviewDetails key={review.id} {...review} />
//                 ))}
//             </div>
//             <OpenModalButton
//                 buttonName='Write a Review'
//                 modalName='CreateReviewForm'
//                 modalContent={<CreateReviewForm />}
//             />
//         </div>
//     )
// }



// export default ReviewDetails
