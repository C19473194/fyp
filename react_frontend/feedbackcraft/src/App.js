// App.js
import React , { useState }from 'react';
import SideMenu from './components/common/SideMenu';
import CreateProjectForm from './components/projects/CreateProjectForm';
import FeedbackSubmissionForm from './components/feedbacks/FeedbackSubmissionForm';
import ProjectsList from './components/projects/ProjectsList';
import ProjectDetails from './components/projects/ProjectDetails';
import FeedbackDetails from './components/feedbacks/FeedbackDetails';
import FeedbacksList from './components/feedbacks/FeedbacksList';
import { useAppContext } from './AppContext';
import './App.css'


const App = () => {
  const { selectedOption, isMenuOpen, handleToggleMenu, handleSelectOption } = useAppContext();
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSelectFeedback = (feedbackId) => {
    setSelectedFeedbackId(feedbackId);
    handleSelectOption('feedbackDetails');
  };
  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
    handleSelectOption('projectDetails');
  };

  const handleBackProject = () => {
    
    setSelectedProjectId(null); // Reset selectedProjectId when going back
    handleSelectOption('viewProjects'); // Show project dropdown list again
    
  };

  const handleBackFeedback = () => {
    setSelectedFeedbackId(null);
    handleSelectOption('viewFeedbacks');
  };

  
  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
      <div className="top-nav">
        <button className="menu-toggle" onClick={handleToggleMenu}>
          Menu
        </button>
      </div>
      <SideMenu />
      <div className="main-content">
        {selectedOption === 'createProject' && <CreateProjectForm />}
        {selectedOption === 'submitFeedback' && <FeedbackSubmissionForm />}
        
        {selectedOption === 'viewFeedbacks' && (
          <FeedbacksList onSelectFeedback={handleSelectFeedback} />
        )}
        {selectedOption === 'feedbackDetails' && (
          <FeedbackDetails feedbackId={selectedFeedbackId} onBack={handleBackFeedback} />
        )}
      
      {selectedOption === 'viewProjects' && (
          <ProjectsList
            onSelectProject={handleSelectProject}
            isViewProjectsSelected={selectedOption === 'viewProjects'}
          />
        )}
        {selectedOption === 'projectDetails' && (
          <ProjectDetails projectId={selectedProjectId} onBack={handleBackProject} />
        )}
      </div>
    </div>
  );
};

export default App;