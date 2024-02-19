import React from 'react';

export default function Header() {
  return (
    <header className="primary-header">
      <div className="primary-header__content">
        <h1>RedditMinimal</h1>
        <form>
          <label htmlFor="searchFilter" className="sr-only">
            Search for a post...
          </label>
          <input type="text" id="searchFilter"></input>
        </form>
      </div>
    </header>
  );
}
