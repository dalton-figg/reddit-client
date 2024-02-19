import React from 'react';

export default function Modal({ openModal, data}) {
  // If the modal is not set to open, don't return anything

  if (!openModal) return null;

  const { title, author, selftext, num_comments } = data.data;

  // Otherwise return the modal

  return (
    <div className="modal">
      <h3>My modal</h3>
      <p>Lorem ipsum sit dolor amet</p>
    </div>
  );
}
