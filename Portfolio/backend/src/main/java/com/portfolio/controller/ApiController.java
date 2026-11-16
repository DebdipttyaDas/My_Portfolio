package com.portfolio.controller;

import com.portfolio.entity.PersonalInfo;
import com.portfolio.entity.Project;
import com.portfolio.repository.PersonalInfoRepository;
import com.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
public class ApiController {

    @Autowired
    private PersonalInfoRepository personalInfoRepo;

    @Autowired
    private ProjectRepository projectRepo;

    @GetMapping("/personal-info")
    public ResponseEntity<PersonalInfo> getPersonalInfo() {
        Optional<PersonalInfo> info = personalInfoRepo.findById(1L);
        return info.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/personal-info")
    public ResponseEntity<PersonalInfo> updatePersonalInfo(@RequestBody PersonalInfo personalInfo) {
        personalInfo.setId(1L);
        PersonalInfo updated = personalInfoRepo.save(personalInfo);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = projectRepo.findAll();
        return ResponseEntity.ok(projects);
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProject(@PathVariable Long id) {
        Optional<Project> project = projectRepo.findById(id);
        return project.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        Project saved = projectRepo.save(project);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project project) {
        Optional<Project> existing = projectRepo.findById(id);
        if (existing.isPresent()) {
            project.setId(id);
            Project updated = projectRepo.save(project);
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        if (projectRepo.existsById(id)) {
            projectRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
