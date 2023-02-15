// import { csrfFetch } from "./csrf";
// import { thunkLoadAllBusinesses } from "./business";


// const CREATE = 'reviews/CREATE'
// const ALL = 'reviews/ALL'
// const USER = 'reviews/USER'
// const UPDATE = 'reviews/UPDATE'
// const DELETE = 'reviews/DELETE'

// const createReview = (review) => {
//     return {
//         type: CREATE,
//         review
//     }
// }

// const loadAllReviews = (reviews) => {
//     return {
//         type: ALL,
//         reviews
//     }
// }

// const loadUserReviews = (reviews) => {
//     return {
//         type: USER,
//         reviews
//     }
// }

// const updateReview = (review) => {
//     return {
//         type: UPDATE,
//         review
//     }
// }

// const deleteReview = (reviewId) => {
//     return {
//         type: DELETE,
//         reviewId
//     }
// }

// export const reviewCreate = (business_id, review) => async dispatch => {
//     const response = await csrfFetch(`/api/review/business/${business_id}/reviews`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(review)
//     })
//     if (response.ok) {
//         const newReview = await response.json()
//         dispatch(createReview(newReview))
//         dispatch(thunkLoadAllBusinesses())
//         return newReview
//     }
// }

// export const reviewUpdate = (business_id, reviewId, review) => async dispatch => {
//     const response = await csrfFetch(`/api/review/business/${business_id}/reviews/${reviewId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(review)
//     })
//     if (response.ok) {
//         const updatedReview = await response.json()
//         dispatch(updateReview(updatedReview))
//         dispatch(thunkLoadAllBusinesses())
//         return updatedReview
//     }
// }

// export const reviewDelete = (business_id, reviewId) => async dispatch => {
//     const response = await csrfFetch(`/api/review/business/${business_id}/reviews/${reviewId}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//     })
//     if (response.ok) {
//         const deletedReview = await response.json()
//         dispatch(deleteReview(deletedReview))
//         dispatch(thunkLoadAllBusinesses())
//         return deletedReview
//     }
// }

// export const thunkLoadAllReviews = () => async dispatch => {
//     const response = await csrfFetch('/api/review')
//     if (response.ok) {
//         const reviews = await response.json()
//         dispatch(loadAllReviews(reviews))
//     }
// }

// export const thunkLoadUserReviews = (userId) => async dispatch => {
//     const response = await csrfFetch(`/api/review/user/${userId}`)
//     if (response.ok) {
//         const reviews = await response.json()
//         dispatch(loadUserReviews(reviews))
//     }
// }

// const initialState = {}

// const reviewReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case CREATE:
//             newState = { ...state, [action.review.id]: action.review }
//             return newState
//         case ALL:
//             newState = { ...state }
//             action.reviews.forEach(review => {
//                 newState[review.id] = review
//             })
//             return newState
//         case USER:
//             newState = { ...state }
//             action.reviews.forEach(review => {
//                 newState[review.id] = review
//             })
//             return newState
//         case UPDATE:
//             newState = { ...state, [action.review.id]: action.review }
//             return newState
//         case DELETE:
//             newState = { ...state }
//             delete newState[action.reviewId]
//             return newState
//         default:
//             return state
//     }
// }

// export default reviewReducer

