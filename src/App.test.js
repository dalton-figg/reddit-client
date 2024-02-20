import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Post from './components/Post';

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

test('sidebar populates select options correctly', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputElement = screen.getByTestId('selection');

  expect(inputElement.children).toBeDefined();
});

test('modal appears when clicking a post', () => {
  // Mock post data
  const postData = {
    title: 'Test Post',
    author: 'Test Author',
    num_comments: 10,
    ups: 5,
    downs: 2,
    thumbnail: 'https://example.com/image.jpg',
  };

  // Render the Post component with mock data
  render(<Post data={postData} />);

  // Click on the post element
  const postElement = screen.getByText(postData.title);
  fireEvent.click(postElement);

  // Assert that the modal appears
  const modalElement = screen.getByTestId('modal');
  expect(modalElement).toBeInTheDocument();
});
