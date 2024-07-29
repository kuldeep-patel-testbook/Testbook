import React from 'react'
import './Styles.css'
const SinglePost = ({ post }) => {
  return (
    <div className="post-card">
        <img src={post.image} alt={post.title} className="post-image" />
        <div className="post-content">
            <h2 className="post-title">@{post.title}</h2>
            <p className="post-description">{post.body}</p>
        </div>
    </div>
  )
}

export default SinglePost