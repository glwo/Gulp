import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ReviewDetails(review) {
    const n = review.stars
    let noFill = <i className="fa-solid fa-star stars noFill" />
    let fill = <i className="fa-solid fa-star stars fill" id={n === 5 ? 'five' : n === 3 ? 'three' : n === 2 ? 'two' : n === 1 ? 'one' : ''}/>
    const stars = []
    console.log('REVIEW IN REVIEW', review)
    const business = useSelector(state => state.business.businesses[review.business_id])
    console.log('BUSINESS IN REVEIW', business)
    for(let i = 0; i < 5; i++){
        if (i < review.stars) stars.push(fill)
        else stars.push(noFill)
    }
    if(!review) return null
    return (
        <div className='reviewCard'>
            <Link className='gap' to={`/business/${review.business_id}`}>
                <div className='userInfo'>
                    <div>
                        <p id='reviewAction'>Wrote a review</p>
                    </div>
                </div>
                {business && <div className='businessName'>{business.name}</div>}
                <div className='reviewRating'>
                {stars.map((star, i) => (
                    <span key={i}>{star}</span>
                ))}
                </div>
                <div className='reviewText'>
                    {review.review}
                </div>
            </Link>
        </div>
        
    )
}

export default ReviewDetails
