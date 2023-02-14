// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';

// function CreateReviewModal() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setModalIsOpen(true)}>Write a Review</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}

//         contentLabel="Write a Review"
//         >
//         <h2>Write a Review</h2>
//         <form>
//           <textarea placeholder="Write your review here..." />
//           <div>
//             <button onClick={() => setModalIsOpen(false)}>Cancel</button>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// refactor the above function to add a modal that opens when the user clicks on the "Write a Review" button. The modal should contain a form with a textarea for the review and a submit button. The modal should close when the user clicks on the "Cancel" button.

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
