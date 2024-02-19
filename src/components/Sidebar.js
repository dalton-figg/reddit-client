import React from 'react';
import { changeSelection } from '../features/selectionFilterSlice';
import { useDispatch } from 'react-redux';


export default function Sidebar() {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeSelection(e.target.value))
  }

  return (
    <aside className='sidebar'>
      <h2>Select a subreddit</h2>
      <form>
        <select className='sidebar-select' onChange={handleChange}>
          <option>JavaScript</option>
          <option>Photography</option>
          <option>Cats</option>
        </select>
      </form>
    </aside>
  );
}
