import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { reviewCreate } from '../../store/review'
import { thunkLoadAllBusinesses } from '../../store/business'

function CreateReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ review, setReview ] = useState('')
    const [ stars, setStars ] = useState('')
    const [ image, setImage ] = useState('')
    const [ errors, setErrors ] = useState([])

    const { business_id } = useParams()
    const business = useSelector(state => state.business.businesses)
    // console.log(business)
    const currentBusiness = Object.values(business).find(business => business.id == business_id)
    // console.log(currentBusiness)
    useEffect(() => {
        dispatch(thunkLoadAllBusinesses())
    }, [dispatch])


    const updateReview = (e) => setReview(e.target.value)
    const updateStars = (e) => setStars(e.target.value)
    const updateImage = (e) => setImage(e.target.value)

    useEffect(() => {
        const errors = []
        if(stars > 5 || stars < 1) errors.push("Stars must be between 1 and 5")
        if(!review.length) errors.push("Review required")
        setErrors(errors)
    }, [stars, review])

    const clearData = (newReview) => {
        setReview('')
        setStars('')
        setImage('')
        history.push(`/business/${business_id}`)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let payload;
        // if(image){

            payload= {
                business_id:business_id,
                review,
                stars,
                url:image,
            }

        // }
        // } else {
        //     payload= {
        //         review,
        //         stars
        //     }
        // }

        let newReview = await dispatch(reviewCreate(business_id, payload))

        if(newReview.errors){
            setErrors(newReview.errors)
        } else {
            clearData(newReview)
        }
    }



    return (
        <div className='reviewForm'>
            <button onClick={() => history.push(`/business/${business_id}`)}>Back</button>
            <form onSubmit={handleSubmit} className='reviewCreateContainer'>
            <div>
                <h4 className={!errors.length ? 'reviewFormHeader' : ''}>{business_id ? business.name : 'Reviews'}</h4>
            </div>
            {errors.length !== 0 &&
                <ul style={{"marginBottom":"0px"}}>
                    {errors.map((error, idx) => <li key={idx} style={{"color":"red"}}>{error}</li>)}

                </ul>
            }
            <textarea style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='reviewText'
                type={'text'}
                placeholder={'Review'}
                required
                value={review}
                onChange={updateReview}
            />
            <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='formChildren'
                type={'number'}
                placeholder={'Stars'}
                required
                min={1}
                max={5}
                value={stars}
                onChange={updateStars}
            />
            <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='formChildren'
                type={'url'}
                placeholder={'Image (optional)'}
                value={image}
                onChange={updateImage}
            />
            <button className='reviewSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateReviewForm

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { reviewCreate } from '../../store/review';
// import { loadBusiness } from '../../store/business';

// const CreateReviewForm = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const { id } = useParams();
//     const business = useSelector((state) => state.business[id]);
//     const [review, setReview] = useState('');
//     const [rating, setRating] = useState(0);
//     const [errors, setErrors] = useState([]);

//     useEffect(() => {
//         dispatch(loadBusiness(id));
//     }, [dispatch, id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = await dispatch(reviewCreate({ review, rating, business_id: id }));
//         if (data.errors) {
//         setErrors(data.errors);
//         } else {
//         history.push(`/business/${id}`);
//         }
//     };

//     return (
//         <div className="create-review-form">
//         <h1>Review {business?.store_name}</h1>
//         <form onSubmit={handleSubmit}>
//             <div className="review-form-input">
//             <label>Review</label>
//             <textarea
//                 type="text"
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//                 required
//             />
//             </div>
//             <div className="review-form-input">
//             <label>Rating</label>
//             <input
//                 type="number"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 required
//             />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//         {errors.map((error) => (
//             <div>{error}</div>
//         ))}
//         </div>
//     );
//     }

//     export default CreateReviewForm;
