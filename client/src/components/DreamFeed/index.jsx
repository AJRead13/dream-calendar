import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm'; // Create a CommentForm component separately

const DreamFeed = () => {
  const [dreams, setDreams] = useState([]);
  const [selectedDream, setSelectedDream] = useState(null);

  // Fetch dreams from your API
  useEffect(() => {
    // Replace 'yourApiEndpoint' with the actual endpoint to fetch dreams
    fetch('yourApiEndpoint')
      .then((response) => response.json())
      .then((data) => setDreams(data))
      .catch((error) => console.error('Error fetching dreams:', error));
  }, []);

  const handleSelectDream = (dream) => {
    setSelectedDream(dream);
  };

  const handleCloseDream = () => {
    setSelectedDream(null);
  };

  return (
    <div>
      <h2>Dream Feed</h2>
      <ul>
        {dreams.map((dream) => (
          <li key={dream.id}>
            <strong>{dream.username}:</strong> {dream.content}
            <button onClick={() => handleSelectDream(dream)}>View Comments</button>
          </li>
        ))}
      </ul>

      {selectedDream && (
        <div>
          <h3>{selectedDream.username}'s Dream</h3>
          <p>{selectedDream.content}</p>
          <button onClick={handleCloseDream}>Close</button>

          {/* Render CommentForm for commenting */}
          <CommentForm dreamId={selectedDream.id} />

          {/* Display comments if available */}
          <h4>Comments:</h4>
          <ul>
            {selectedDream.comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.username}:</strong> {comment.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DreamFeed;
