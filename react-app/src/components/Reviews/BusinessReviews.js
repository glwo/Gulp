// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { removeReview } from '../../store/review'
// // import './BusinessReviews.css'

// function BusinessReviews(review) {
//     const dispatch = useDispatch()
//     const currentUser = useSelector(state => state.session.user)

//     const deleteAReview = async () => {
//         await dispatch(removeReview(review.id, review.spotId))
//     }
//     const n = review.stars

//     const starsFunction =()=>{
//         // requires fill and noFill classes in html and css to function
//         // requires const stars = [] outside function to work
//         const stars = []
//         let noFill = <i className="fa-solid fa-star stars noFill" />
//         let fill = <i className="fa-solid fa-star stars fill" id={n === 5 ? 'five' : n === 3 ? 'three' : n === 2 ? 'two' : n === 1 ? 'one' : ''}/>

//         for(let i = 0; i < 5; i++){
//             if (i < review.stars) stars.push(fill)
//             else stars.push(noFill)
//         }
//         return stars
//     }

//     const stars =starsFunction()

//     if(!review) return null

//     return (
//         <div className='reviewCard'>
//             <Link className='reviewLink' to={`/business/${review.business_id}`}>
//                 <div className='userInfo'>
//                     <div>
//                         <p id='reviewAction'>Write a----------------- review</p>
//                     </div>
//                 </div>
//                 <div className='businessInfo'>
//                     <div>
//                         <p id='businessName'>{review.business_name}</p>
//                     </div>
//                 </div>
//                 <div className='reviewTitle'>
//                     {review.title}
//                 </div>
//                 <div className='reviewDate'>
//                     {review.created_at}
//                 </div>

//                 <div className='reviewRating'>
//                 {stars.map((star, i) => (
//                     <span key={i}>{star}</span>
//                 ))}
//                 </div>
//                 <div className='reviewText'>
//                     {review.review}
//                 </div>
//                 {currentUser && currentUser.id === review.user_id && <button className='deleteReviewButton' onClick={deleteAReview}>Delete Review</button>}
//             </Link>
//         </div>

//     )
// }

// export default BusinessReviews
