package com.example.demo.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.example.demo.model.Project;
import com.example.demo.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;


    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long projectId) {
        return projectRepository.findById(projectId)
                .orElseThrow();
    }

    public Project createProject(Project project) {
        // Additional validation or business logic can be added here
        return projectRepository.save(project);
    }

    public Project updateProject(Long projectId, Project updatedProject) {
        Project existingProject = getProjectById(projectId);
        // Update fields based on your requirements
        existingProject.setProjectTitle(updatedProject.getProjectTitle());
        existingProject.setProjectDescription(updatedProject.getProjectDescription());
        existingProject.setStartDate(updatedProject.getStartDate());
        existingProject.setEndDate(updatedProject.getEndDate());
        existingProject.setStatus(updatedProject.getStatus());
        return projectRepository.save(existingProject);
    }

    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }
}
