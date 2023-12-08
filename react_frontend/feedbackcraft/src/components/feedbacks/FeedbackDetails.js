// FeedbackDetails.js
import React, { useEffect, useState } from 'react';
import { feedbackService } from '../../services/feedback/FeedbackService';

const FeedbackDetails = ({ feedbackId, onClose }) => {
    const [feedbackDetails, setFeedbackDetails] = useState(null);
  
    useEffect(() => {
      // Fetch details of the selected feedback when the component mounts
      const fetchFeedbackDetails = async () => {
        try {
          const details = await feedbackService.getFeedbackById(feedbackId);
          setFeedbackDetails(details);
        } catch (error) {
          console.error('Error fetching feedback details:', error);
        }
      };
  
      fetchFeedbackDetails();
    }, [feedbackId]);
  
    return (
      <div>
        <h2>Feedback Details</h2>
        {feedbackDetails ? (
          <div>
            <p>Feedback Text: {feedbackDetails.feedbackText}</p>
            <p>Message: {feedbackDetails.message}</p>
            <p>Date Submitted: {feedbackDetails.dateSubmitted}</p>
        
          
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default FeedbackDetails;