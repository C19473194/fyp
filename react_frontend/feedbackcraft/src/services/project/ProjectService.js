// services/projectsService.js
const API_BASE_URL = 'http://localhost:8080/api/v1';

export const projectsService = {
  fetchProjects: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to fetch projects.');
        return [];
      }
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },

  fetchProjectById: async (projectId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${projectId}`);
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to fetch project details.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },

  createProject: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return await response.json();
      } else {
        console.error('Failed to create project.');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },
};

export default projectsService;
