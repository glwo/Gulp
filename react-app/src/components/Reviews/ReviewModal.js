import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';

function CreateReviewModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Write a Review</button>

      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <CreateReviewForm />
        </Modal>
      )}
    </div>
  );
}





export default CreateReviewModal;
