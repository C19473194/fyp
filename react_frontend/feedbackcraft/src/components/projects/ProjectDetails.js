// ProjectDetails.js

import React, { useEffect, useState } from 'react';
import { projectsService } from '../../services/project/ProjectService';

const ProjectDetails = ({ projectId, onClose }) => {
    const [projectDetails, setProjectDetails] = useState(null);
  
    useEffect(() => {
      // Fetch details of the selected project when the component mounts
      const fetchProjectDetails = async () => {
        try {
          const details = await projectsService.fetchProjectById(projectId);
          setProjectDetails(details);
        } catch (error) {
          console.error('Error fetching project details:', error);
        }
      };
  
      fetchProjectDetails();
    }, [projectId]);
  
    return (
      <div>
        <h2>Project Details</h2>
        {projectDetails ? (
          <div>
            <p>Project Title: {projectDetails.projectTitle}</p>
            <p>Project Description: {projectDetails.projectDescription}</p>
            <p>Start Date: {projectDetails.startDate}</p>
            <p>End Date: {projectDetails.endDate}</p>
            <p>Status: {projectDetails.status}</p>
        
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default ProjectDetails;


