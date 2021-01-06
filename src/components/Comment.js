import React from 'react';

// copied from notes Relationships between models in Mongoose
const Comment = ({ user, body }) => (
    <div className='comment'>
        <div className='comment-body'>{body}</div>
        <div className='userName'>{user}</div>
    </div>
)

export default Comment;