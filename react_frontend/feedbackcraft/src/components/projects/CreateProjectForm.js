
import React, { useState, useEffect, useContext } from 'react';
import { projectsService } from '../../services/project/ProjectService';
import { useAppContext } from '../../AppContext';
import '../../styles/Forms.css'
const CreateProjectForm = () => {
    const { selectedOption, projectFormData, setCreateProjectOption } = useAppContext();

  const initialFormData = {
    projectTitle: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    status: 'Active',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the createProject function from the service
    const createdProject = await projectsService.createProject(formData);

    if (createdProject) {
      // Handle success, you can redirect or perform additional actions
      console.log('Project created successfully:', createdProject);
    } else {
      // Handle failure, show an error message or perform additional actions
      console.error('Failed to create project.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Title:
        <input
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Project Description:
        <textarea
          rows="4"
          cols="50"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProjectForm;
