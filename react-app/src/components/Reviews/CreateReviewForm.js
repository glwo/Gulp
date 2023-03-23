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

    const currentBusiness = Object.values(business).find(business => business.id == business_id)

    useEffect(() => {
        dispatch(thunkLoadAllBusinesses())
    }, [dispatch])

    const updateReview = (e) => setReview(e.target.value)
    const updateStars = (e) => setStars(e.target.value)
    const updateImage = (e) => setImage(e.target.value)

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

    // console.log(stars)

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
            {/* <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px"}}
                className='formChildren'
                type={'number'}
                placeholder={'Stars'}
                required
                min={1}
                max={5}
                value={stars}
                onChange={updateStars}
            /> */}
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" onChange={updateStars}/>
              <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" onChange={updateStars}/>
              <label for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" onChange={updateStars}/>
              <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" onChange={updateStars}/>
              <label for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" onChange={updateStars}/>
              <label for="star1" title="text">1 star</label>
            </div>
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
