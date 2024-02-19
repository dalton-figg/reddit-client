import React from 'react';
import { changeSearch } from '../features/searchFilterSlice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = e => {
    dispatch(changeSearch(e.target.value));
  }

  return (
    <header className="primary-header">
      <div className="primary-header__content">
        <h1>RedditMinimal</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchFilter" className="sr-only">
            Search for a post...
          </label>
          <input type="text" id="searchFilter" placeholder='Search for a post...' className='primary-header__input' onChange={handleChange}></input>
        </form>
      </div>
    </header>
  );
}
