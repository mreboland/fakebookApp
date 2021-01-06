import React, { useEffect, useState, useCallback } from 'react';
import Post from './Post';

function Fakebook() {
  const [posts, setPosts] = useState([]);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/posts');
      const posts = await response.json();
      console.log(posts)
      if (!response.ok) {
        throw new Error('could not get posts');
      }
      setPosts(posts);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div>
      <div className='header'>
        <h1>fakebook</h1>
      </div>

      {posts.map(post => {
        return <Post key={post._id} {...post} />;
      })}
    </div>
  );
}

export default Fakebook;
