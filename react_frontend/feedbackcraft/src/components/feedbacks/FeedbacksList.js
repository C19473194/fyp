// FeedbacksPage.js
import React, { useEffect, useState } from 'react';
import { feedbackService } from '../../services/feedback/FeedbackService';
import '../../styles/FeedbacksList.css'
import FeedbackDetails from './FeedbackDetails';

const FeedbacksList = ({ onSelectFeedback }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

  useEffect(() => {
    // Fetch all feedbacks when the component mounts
    const fetchFeedbacks = async () => {
      const allFeedbacks = await feedbackService.fetchFeedbacks();
      setFeedbacks(allFeedbacks);
    };

    fetchFeedbacks();
  }, []);

  
  const handleFeedbackClick = (feedbackId) => {
    console.log('Clicked feedback ID:', feedbackId);
    setSelectedFeedbackId(feedbackId);
  };
  const handleCloseFeedbackDetails = () => {
    setSelectedFeedbackId(null);
  };

  return (
    <div>
      <h2>All Feedbacks</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.feedbackId} onClick={() => handleFeedbackClick(feedback.feedbackId)}>
            {feedback.feedbackText}
            {feedback.projectTitle}
          </li>
        ))}
      </ul>

      {selectedFeedbackId && (
        <FeedbackDetails feedbackId={selectedFeedbackId} onClose={handleCloseFeedbackDetails} />
      )}
    </div>
  );
};

export default FeedbacksList;