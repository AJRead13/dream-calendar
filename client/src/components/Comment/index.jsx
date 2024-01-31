import React, { useState } from 'react';

const CommentForm = ({ dreamId }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();

    fetch('dream/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dreamId: dreamId,
        text: commentText,
        // Add other fields as needed
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful comment submission
        console.log('Comment submitted successfully:', data);

        
        setCommentText('');
      })
      .catch((error) => {
        console.error('Error submitting comment:', error);
        // Handle error submitting comment
      });
  };

  return (
    <form onSubmit={handleSubmitComment}>
      <textarea
        placeholder="Add a comment..."
        value={commentText}
        onChange={handleCommentChange}
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
