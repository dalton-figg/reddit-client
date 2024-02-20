import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Header from './components/Header';

test('renders the page without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const sidebarElement = screen.getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();

  const postsElement = screen.getByTestId('posts');
  expect(postsElement).toBeInTheDocument();
});

test('input value in the header updates when changed', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText('Search for a post...');

  fireEvent.change(inputElement, { target: { value: 'Test Value' } });

  expect(inputElement.value).toBe('Test Value');
});
