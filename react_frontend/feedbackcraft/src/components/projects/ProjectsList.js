// ProjectsList.js
import React, { useEffect, useState } from 'react';
import { projectsService } from '../../services/project/ProjectService';
import ProjectDetails from './ProjectDetails';

const ProjectsList = ({ onSelectProject, isViewProjectsSelected }) => {
  const [userProjects, setUserProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const projects = await projectsService.fetchProjects();
        setUserProjects(projects);
      } catch (error) {
        console.error('Error fetching user projects:', error);
      }
    };

    fetchUserProjects();
  }, []);

  const handleProjectChange = (e) => {
    const selectedProjectId = e.target.value;
    setSelectedProjectId(selectedProjectId);
  };
  

  const handleCloseProjectDetails = () => {
    setSelectedProjectId(null);
  };

  return (
    <div>
      {isViewProjectsSelected && (
        <div>
          <h2>Your Projects</h2>
          <label>
            Select Project:
            <select onChange={handleProjectChange}>
              <option value="">Select a project</option>
              {userProjects.map((project) => (
                <option key={project.projectId} value={project.projectId}>
                  {project.projectTitle}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {selectedProjectId && (
        <ProjectDetails projectId={selectedProjectId} onClose={handleCloseProjectDetails} />
      )}
    </div>
  );
};

export default ProjectsList;
