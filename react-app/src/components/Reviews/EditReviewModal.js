import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import CreateReviewForm from "./CreateReviewForm";
import  { useModal } from "../../context/Modal";
import { reviewUpdate } from "../../store/review";
import './EditReviewModal.css'
import { thunkLoadAllBusinesses } from "../../store/business";


function EditReviewModal({ reviewDetails }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [review, setReview] = useState(reviewDetails.content);
  const [stars, setStars] = useState(reviewDetails.rating);
  const [errors, setErrors] = useState([]);
  const [url, setUrl] = useState(reviewDetails.reviewImages[0].url);

  const updateReview = (e) => setReview(e.target.value)
  const updateStars = (e) => setStars(e.target.value)
  const updateImage = (e) => setUrl(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...reviewDetails,
      review,
      stars,
      url,
    };

    const updatedReview = await dispatch(reviewUpdate(payload, reviewDetails.id));
    if (updatedReview.errors) {
      setErrors(updatedReview.errors);
    } else {
      setErrors([]);
      closeModal();

    }
  };

  return (
    <div>
    <h2>Edit Review</h2>
    <form onSubmit={handleSubmit}>
      <div className='reviewForm'>
        <ul
          style={{
            "list-style-type": "none",
            "margin-bottom": "-40px",
            "margin-top": "0px",

          }}
        >

          {errors.map((error, idx) => (
            <li key={idx} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
        <textarea style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px", width:"95%"}}
                className='reviewText'
                type={'text'}
                placeholder={'Review'}
                required
                value={review}
                onChange={updateReview}
            />
            {/* <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px", width:"95%"}}
                className='formChildren'
                type={'number'}
                placeholder={'Stars'}
                required
                min={1}
                max={5}
                review={stars}
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
            <input style={{"borderRadius":"10px 10px 10px 10px", marginBottom:"10px", width:"95%"}}
                className='formChildren'
                type={'url'}
                placeholder={'Image'}
                value={url}
                onChange={updateImage}
            />
            <button className='reviewSubmit'>Submit</button>
      </div>
      </form>
      </div>
  );
}


export default EditReviewModal;
