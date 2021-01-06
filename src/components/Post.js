import React from 'react';
import Comment from "./Comment";

const Post = ({ body, comments, user }) => (
  <div className='post'>
    <div className='body'>{body}</div>
    <div className='userName'>{user.name}</div>
    {comments.map( (comment) => {
      return (
        // user._id wasn't showing even though the seed.js was populated. The issue was that the user was added to the comments without save the new list to the db so had to run node seed.js to repopulate the db with the user so it could be accessed below through comments
        <Comment key={comment._id} {...comment} user={comment.user.name} />
      )
    })}
  </div>
)

export default Post;