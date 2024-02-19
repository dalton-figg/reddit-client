import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { changePosts } from '../features/postsSlice';
import Loading from './Loading';

export default function Posts() {
  // Store based variables
  const posts = useSelector((state) => state.posts);
  const selectionFilter = useSelector((state) => state.selectionFilter);
  const searchFilter = useSelector((state) => state.searchFilter);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // Use effect callback function that fires once when the component mounts to get the Reddit API data and update the store

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.reddit.com/r/${selectionFilter}.json`
      );

      const data = await response.json();

      // Filter by if the title of the post includes the current search filter

      dispatch(changePosts(data.data.children));

      setLoading(false);
    };

    getData();
  }, [selectionFilter]);

  // Using a seperate effect so that the data does not have to be re-fetched if not needed, it does need to be fetched again if the subreddit changes, but when searching within one we can
  // improve the efficency by just applying the filter

  useEffect(() => {
    dispatch(
      changePosts(
        posts.filter((item) => item.data.title.includes(searchFilter))
      )
    );
  }, [searchFilter]);

  // Include a 'loading' screen to breakup the delay

  return (
    <section className="posts">
      {loading ? (
        <Loading />
      ) : (
        posts.map((post) => <Post key={post.data.id} data={post.data} />)
      )}
    </section>
  );
}
