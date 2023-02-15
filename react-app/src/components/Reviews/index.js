// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import ReviewDetails from './ReviewDetails'
// import { allReviews } from '../../store/review'
// import CreateReviewForm from './CreateReviewForm'
// import OpenModalButton from '../OpenModalButton'

// function Reviews() {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(allReviews())
//     }, [dispatch])


//     const totalReviews = useSelector(state => state.reviews.allReviews)

//     const reviews = Object.values(totalReviews)

//     return (
//         <div>
//             <h1> Review
//             </h1>
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


// export default Reviews
