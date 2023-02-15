import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allReviews } from '../../store/review'


function ReviewDetails() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allReviews())
    }, [dispatch])


    const totalReviews = useSelector(state => state.reviews.allReviews)

    const reviews = Object.values(totalReviews)

    return (
        <div>
            <h3> Reviews
            </h3>
            <div className='reviewsContainer'>
                {reviews.map((review) => (
                    <ReviewDetails key={review.id} {...review} />
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
