import { useDispatch, useSelector } from "react-redux";
import { removeReview } from "../../store/review";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../context/Modal";


export default function DeleteReview({ review }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [openModal, setOpenModal] = useState(false);
    const { closeModal } = useModal();
    const userReviews = Object.values(useSelector((state) => state.reviews.allReviews)).filter(
        (review) => review.user_id === sessionUser.id
    );

    const deleteReview = async (e) => {
        e.preventDefault();
        await dispatch(removeReview(review.id));
        history.push(`/business/${review.business_id}`);
        closeModal();
    };


    return (
        <div>
        <button onClick={deleteReview}>Delete Review</button>
        </div>
    );
    }
