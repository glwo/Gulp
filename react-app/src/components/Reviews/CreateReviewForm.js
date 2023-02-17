import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { reviewCreate } from '../../store/review'
import { thunkLoadAllBusinesses } from '../../store/business'
import './CreateReviewForm.css'

function CreateReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ review, setReview ] = useState('')
    const [ stars, setStars ] = useState('')
    const [ image, setImage ] = useState('')
    const [ errors, setErrors ] = useState([])

    const { business_id } = useParams()
    const business = useSelector(state => state.business.businesses)
    const currentUser = useSelector(state => state.session.user)
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
        if (currentUser == undefined) return history.push('/login')

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
            <div onClick={() => history.push(`/business/${business_id}`)}></div>
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
                placeholder={'Image'}
                value={image}
                onChange={updateImage}
            />
            <button className='reviewSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateReviewForm
