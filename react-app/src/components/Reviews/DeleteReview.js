import { useDispatch, useSelector } from "react-redux";
import { removeReview } from "../../store/review";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../context/Modal";


function DeleteReview({ reviewId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();


    const handleDelete = async (e) => {
        e.preventDefault();
        const deletedReview = await dispatch(removeReview(reviewId));
        if (deletedReview.errors) {
            setErrors(deletedReview.errors);
        } else {
            setErrors([]);
            closeModal();

        }
    };



    return (
        <div>
            <h2> Delete Review </h2>
            <form onSubmit={handleDelete}>
                <div className="errors">
                    <ul
                        style={{
                            "list-style-type": "none",
                            "margin-bottom": "0px",
                            "margin-top": "0px",
                        }}
                    >
                        {errors.map((error, idx) => (
                            <li key={idx} style={{ color: "red" }}>
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}



export default DeleteReview
