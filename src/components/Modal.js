import React from 'react';

export default function Modal({ openModal, setOpenModal, data }) {

  const { title, author, selftext, num_comments, ups, downs } = data;

  const closeModal = () => setOpenModal(false);

  // If the modal is not set to open, don't return anything

  if (!openModal) return null;

  const totalVotes = Math.max(ups, downs);

  // Otherwise return the modal

  return (
    <div className="modal-container" onClick={closeModal} data-testid="modal">
      <article className="post post--modal">
        <div className="post__votes">
          <svg viewBox="0 0 512 512" width="20" height="20">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3 0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-96h57.7c12.3 0 22.3-10 22.3-22.3 0-6.2-2.6-12.1-7.1-16.3l-107.1-99.9c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5l-107.1 99.9z" />
          </svg>
          <p>{totalVotes}</p>
          <svg viewBox="0 0 512 512" width="20" height="20">
            <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zm0-464a256 256 0 1 0 0 512 256 256 0 1 0 0-512zm120.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3 0-12.3-10-22.3-22.3-22.3H304v-96c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v96h-57.7c-12.3 0-22.3 10-22.3 22.3 0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
          </svg>
        </div>

        <div className="post__content">
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
        </div>
      </article>
    </div>
  );
}
