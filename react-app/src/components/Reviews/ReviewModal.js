// import React, { useState } from 'react';
// import { useModal } from '../../context/Modal';
// import CreateReviewForm from './CreateReviewForm';
// import './CreateReviewForm.css';

// function CreateReviewModal() {
//   const [openModal, setOpenModal] = useState(false);
//   const { closeModal } = useModal();

//   return (
//     <>
//       <button className="create-review-button" onClick={() => setOpenModal(true)}>Write a Review</button>
//       {openModal && (
//         <div className="create-review-modal">
//           <div className="create-review-modal-content">
//             <CreateReviewForm />
//             <button className="create-review-modal-close" onClick={() => setOpenModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CreateReviewModal;


import React, { useState } from "react";
import OpenModalButton from "../OpenModalButton";
import CreateReviewForm from "./CreateReviewForm";
import "./CreateReviewForm.css";

function CreateReviewModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <OpenModalButton
        buttonText="Write a Review"
        modalComponent={<CreateReviewForm />}
        onButtonClick={() => setOpenModal(true)}
        onModalClose={() => setOpenModal(false)}
      />

    </>
  );
}



export default CreateReviewModal;
