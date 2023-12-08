import React, { useState, useEffect} from 'react';
import { feedbackService } from '../../services/feedback/FeedbackService';
import { useAppContext } from '../../AppContext';
import '../../styles/Forms.css'
import ProjectsList from '../projects/ProjectsList';

const FeedbackSubmissionForm = () => {
    const { selectedOption, selectedProject, feedbackFormData } = useAppContext();
    const [formData, setFormData] = useState({
      feedbackText: '',
      message: '',
      dateSubmitted: '',
      isSeen: false,
      status: 'Pending',
      projectId: null,
    });
  
    // Additional state to manage whether to show project selection
    const [showProjectSelection, setShowProjectSelection] = useState(false);
  
    useEffect(() => {
      // Reset the form when a new option is selected
      setFormData({
        feedbackText: '',
        message: '',
        dateSubmitted: '',
        isSeen: false,
        status: 'Pending',
        projectId: null,
      });
  
      // Show project selection when 'submitFeedback' option is selected
      setShowProjectSelection(selectedOption === 'submitFeedback');
    }, [selectedOption]);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

        if (!formData.feedbackText.trim()) {
            alert('Please enter feedback text before submitting.');
            return;
        }
  
      // Call the postFeedback function from the service
      const postedFeedback = await feedbackService.postFeedback({
        ...formData,
      });
  
      if (postedFeedback) {
        // Handle success, you can redirect or perform additional actions
        console.log('Feedback posted successfully:', postedFeedback);
      } else {
        // Handle failure, show an error message or perform additional actions
        console.error('Failed to post feedback.');
      }
  
      // Reset the form when feedback is submitted
      setFormData({
        feedbackText: '',
        message: '',
        dateSubmitted: '',
        isSeen: false,
        status: 'Pending',
        projectId: null,
      });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Feedback Text:
            <textarea
              rows="4"
              cols="50"
              name="feedbackText"
              value={formData.feedbackText}
              onChange={handleChange}
              disabled={!selectedOption}
            />
          </label>
          <br />
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={!selectedOption}
            />
          </label>
          <br />
          <label>
            Date Submitted:
            <input
              type="datetime-local"
              name="dateSubmitted"
              value={formData.dateSubmitted}
              onChange={handleChange}
              disabled={!selectedOption}
            />
          </label>
          <br />
      
           
          <br />
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={!selectedOption}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <br />
          {showProjectSelection && <ProjectsList onSelectProject={(projectId) => setFormData({ ...formData, projectId })} />}
          <button type="submit" disabled={!selectedOption}>
            Submit Feedback
          </button>
        </form>
      </div>
    );
  };
  
  export default FeedbackSubmissionForm;