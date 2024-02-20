import React from 'react';
import { changeSelection } from '../features/selectionFilterSlice';
import { useDispatch } from 'react-redux';

const subredditOptions = ['JavaScript', 'Photography', 'Python', 'Cats', 'React'];

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selectedSubreddit = e.target.value;
    dispatch(changeSelection(selectedSubreddit));
  };

  return (
    <aside className="sidebar" data-testid="sidebar">
      <h2>Select a subreddit</h2>
      <form>
        <label htmlFor="selection" className="sr-only">
          Select a subreddit
        </label>
        <select
          className="sidebar-select"
          id="selection"
          onChange={handleChange}
          data-testid="selection"
        >
          {subredditOptions.map((subreddit) => (
            <option key={subreddit} value={subreddit}>
              {subreddit}
            </option>
          ))}
        </select>
      </form>
    </aside>
  );
}
