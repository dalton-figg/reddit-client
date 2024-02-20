import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// TODO: create tests
// TODO: complete modal implementation
// TODO: fix search bar
// TODO: refactor HTML/CSS of posts to show upvotes/down votes


// TODO: potential sorting system?
// TODO: improved loading screen?
