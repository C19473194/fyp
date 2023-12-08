// services/feedbackService.js
const API_BASE_URL = 'http://localhost:8080/api/v1';

export const feedbackService = {
  postFeedback: async (feedbackData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedbacks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to post feedback.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },
  fetchFeedbacks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedbacks`);
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to fetch feedbacks.');
        return [];
      }
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },

  getFeedbackById: async (feedbackId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`);
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to fetch feedback details.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },

  editFeedback: async (feedbackId, updatedData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to edit feedback.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },

  deleteFeedback: async (feedbackId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        return true; // Successfully deleted
      } else {
        console.error('Failed to delete feedback.');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
};

export default feedbackService;
