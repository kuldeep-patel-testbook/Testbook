import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../components/Styles.css';
import SinglePost from '../components/SinglePost';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://66a3acfb44aa637045821bff.mockapi.io/api/v1/posts/postdata')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="posts-page">
      <h1>Posts Page</h1>
      <div className="posts-container">
        {
          posts.map(post => (
            <SinglePost key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default Posts