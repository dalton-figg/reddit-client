import React from 'react';

export default function Modal({ openModal, setOpenModal, data }) {
  const closeModal = () => {
    setOpenModal(false);
  };

  // If the modal is not set to open, don't return anything

  if (!openModal) return null;

  const { title, author, selftext, num_comments } = data.data;

  console.log(data);

  // Otherwise return the modal

  return (
    <div className="modal-container" onClick={closeModal}>
      <article className="post">
        <h2>{title}</h2>
        <p>{selftext}</p>
        <hr></hr>
        <div className="post__details">
          <p>Posted by {author}</p>
          <div className="post__comments">
            <svg viewBox="0 0 512 512" width="20" height="20">
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h96zm48 124-.2.2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
            <p>{num_comments} comments </p>
          </div>
        </div>
      </article>
    </div>
  );
}
