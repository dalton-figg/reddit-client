import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { changePosts } from '../features/postsSlice';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // Use effect callback function that fires once when the component mounts to get the Reddit API data and update the store

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://www.reddit.com/search.json?q=cake%20recipes'
      );

      const data = await response.json();

      dispatch(changePosts(data.data.children));
    };

    getData();
  }, []);

  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post.data.id} data={post.data} />
      ))}
    </section>
  );
}
