import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function CreateReviewModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Write a Review</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}

        contentLabel="Write a Review"
        >
        <h2>Write a Review</h2>
        <form>
          <textarea placeholder="Write your review here..." />
          <div>
            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};



export default CreateReviewModal;
