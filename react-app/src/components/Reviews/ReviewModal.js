import React, { useState } from 'react';
import { useModal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';
import './CreateReviewForm.css';

function CreateReviewModal() {
  const { closeModal } = useModal();

  return (
    <div className="review-modal">
      <button className="exit-button" onClick={closeModal}>X</button>
      <CreateReviewForm />
    </div>
  );
}

export default CreateReviewModal;
