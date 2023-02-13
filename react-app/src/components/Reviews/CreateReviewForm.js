import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { reviewCreate } from '../../store/review'
import { loadBusiness } from '../../store/business'

function CreateReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ review, setReview ] = useState('')
    const [ stars, setStars ] = useState('')
    const [ image, setImage ] = useState('')
    const [ errors, setErrors ] = useState([])

    const { business_id } = useParams()
    const business = useSelector(state => state.businesses.singleBusiness)
    useEffect(() => {
        dispatch(loadBusiness(business_id))
    }, [dispatch, business_id])


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
        setErrors([])

        history.push(`/biz/${newReview.business_id}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let payload;
        if(image){
            payload= {
                review,
                stars,
                image
            }
        } else {
            payload= {
                review,
                stars
            }
        }

        let newReview = await dispatch(reviewCreate(business_id, payload))

        if(newReview) clearData(newReview)
    }

    return (
        <div className='reviewForm'>
        </div>
    )
}

export default CreateReviewForm
