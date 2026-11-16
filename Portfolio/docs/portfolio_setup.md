MY_PORTFOLIO - FULL STACK SETUP GUIDE
=====================================

Complete implementation for React + Spring Boot + MySQL portfolio

PREREQUISITES
=============
- Java 17+ (oracle.com/java/technologies/downloads/)
- Maven 3.8+ (maven.apache.org/download.cgi)
- Node.js 18+ (nodejs.org)
- MySQL 8.0+ (dev.mysql.com/downloads/mysql/)

DIRECTORY STRUCTURE
===================
My_Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/apiClient.js
│   │   ├── config.js
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/main/java/com/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── controller/ApiController.java
│   │   ├── entity/PersonalInfo.java
│   │   ├── entity/Project.java
│   │   └── repository/
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── data.sql
│   └── pom.xml
└── database/
    └── init.sql

STEP-BY-STEP SETUP
==================

1. CREATE PROJECT STRUCTURE
cd D:\PROJECT-WORK\Portfolio
mkdir My_Portfolio
cd My_Portfolio
mkdir frontend backend database

2. SETUP MYSQL DATABASE
mysql -u root -p
(Enter MySQL root password)

CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'SecurePassword123!';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

3. SETUP BACKEND - PART 1 (Directory Structure)
cd backend
mkdir -p src/main/java/com/portfolio/{controller,entity,repository}
mkdir -p src/main/resources

4. CREATE pom.xml (in backend/ directory)
[See FILE 1 below]

5. CREATE application.yml (in backend/src/main/resources/)
[See FILE 2 below]

6. CREATE Java Entities
[See FILES 3-4 below]

7. CREATE Repositories
[See FILES 5-6 below]

8. CREATE Controller
[See FILE 7 below]

9. CREATE Main Application
[See FILE 8 below]

10. CREATE data.sql
[See FILE 9 below]

11. BUILD BACKEND
cd backend
mvn clean install

12. SETUP FRONTEND
cd frontend
npm create vite@latest . -- --template react
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios

13. CREATE Frontend Files
[See FILES 10-12 below]

14. RUN APPLICATIONS
Terminal 1: cd backend && java -jar target/portfolio-app-1.0.0.jar
Terminal 2: cd frontend && npm run dev

Backend: http://localhost:8080/api
Frontend: http://localhost:5173


FILE 1: backend/pom.xml
=======================

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.5</version>
        <relativePath/>
    </parent>

    <groupId>com</groupId>
    <artifactId>portfolio-app</artifactId>
    <version>1.0.0</version>
    <name>portfolio-app</name>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>


FILE 2: backend/src/main/resources/application.yml
===================================================

spring:
  application:
    name: portfolio-app
  datasource:
    url: jdbc:mysql://localhost:3306/portfolio_db
    username: portfolio_user
    password: ${DB_PASSWORD:SecurePassword123!}
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect
        format_sql: true
  sql:
    init:
      mode: always
      data-locations: classpath:data.sql

server:
  port: 8080
  servlet:
    context-path: /api

logging:
  level:
    root: INFO
    com.portfolio: DEBUG


FILE 3: backend/src/main/java/com/portfolio/entity/PersonalInfo.java
=====================================================================

package com.portfolio.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "personal_info")
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    private String email;
    private String phone;
    private String location;
    private String github;
    private String linkedin;
    private String twitter;

    public PersonalInfo() {}

    public PersonalInfo(String name, String title, String bio, String email) {
        this.name = name;
        this.title = title;
        this.bio = bio;
        this.email = email;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }
    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
    public String getTwitter() { return twitter; }
    public void setTwitter(String twitter) { this.twitter = twitter; }
}


FILE 4: backend/src/main/java/com/portfolio/entity/Project.java
================================================================

package com.portfolio.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    private String technologies;
    private String githubLink;
    private String liveLink;
    
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public Project() {}

    public Project(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getTechnologies() { return technologies; }
    public void setTechnologies(String technologies) { this.technologies = technologies; }
    public String getGithubLink() { return githubLink; }
    public void setGithubLink(String githubLink) { this.githubLink = githubLink; }
    public String getLiveLink() { return liveLink; }
    public void setLiveLink(String liveLink) { this.liveLink = liveLink; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}


FILE 5: backend/src/main/java/com/portfolio/repository/PersonalInfoRepository.java
====================================================================================

package com.portfolio.repository;

import com.portfolio.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
}


FILE 6: backend/src/main/java/com/portfolio/repository/ProjectRepository.java
===============================================================================

package com.portfolio.repository;

import com.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}


FILE 7: backend/src/main/java/com/portfolio/controller/ApiController.java
===========================================================================

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
@CrossOrigin(origins = "http://localhost:5173")
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


FILE 8: backend/src/main/java/com/portfolio/PortfolioApplication.java
======================================================================

package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {
    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }
}


FILE 9: backend/src/main/resources/data.sql
============================================

INSERT IGNORE INTO personal_info (id, name, title, bio, email, phone, location, github, linkedin, twitter) 
VALUES (1, 'Your Name', 'Full Stack Developer', 
        'Passionate about building scalable applications with modern technologies.',
        'your.email@example.com', '+1 (555) 123-4567', 'San Francisco, CA',
        'https://github.com/yourusername', 'https://linkedin.com/in/yourusername', 'https://twitter.com/yourusername');

INSERT INTO projects (title, description, technologies, github_link, live_link) VALUES
('E-Commerce Platform', 'Full-stack e-commerce application with payment integration', 
 'React, Spring Boot, MySQL, Stripe', 'https://github.com/yourusername/ecommerce', 'https://yourecommerce.com'),
('Social Media App', 'Real-time social networking platform with messaging',
 'React, Node.js, MongoDB, Socket.io', 'https://github.com/yourusername/social', 'https://yoursocialapp.com'),
('Blog Platform', 'Markdown-based blog with analytics dashboard',
 'React, Express, PostgreSQL', 'https://github.com/yourusername/blog', 'https://yourblog.com');


FILE 10: frontend/src/config.js
================================

// Personal Details - EDIT THIS WITH YOUR INFORMATION
export const portfolioConfig = {
  personalInfo: {
    name: "Your Full Name",
    title: "Full Stack Developer",
    bio: "Passionate about building scalable applications with modern technologies.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};

// API Configuration
export const apiConfig = {
  baseURL: "http://localhost:8080/api",
  timeout: 5000
};


FILE 11: frontend/src/api/apiClient.js
======================================

import axios from 'axios';
import { apiConfig } from '../config';

const client = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const portfolioAPI = {
  getPersonalInfo: () => client.get('/personal-info'),
  updatePersonalInfo: (data) => client.put('/personal-info', data),
  getProjects: () => client.get('/projects'),
  getProject: (id) => client.get(`/projects/${id}`),
  createProject: (data) => client.post('/projects', data),
  updateProject: (id, data) => client.put(`/projects/${id}`, data),
  deleteProject: (id) => client.delete(`/projects/${id}`)
};

export default client;


FILE 12: frontend/vite.config.js
================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false
  }
})


VERIFICATION COMMANDS
====================

# Test backend is running
curl http://localhost:8080/api/personal-info

# Test projects endpoint
curl http://localhost:8080/api/projects

# Open frontend
Open browser to http://localhost:5173


API ENDPOINTS REFERENCE
=======================

GET    /api/personal-info         - Fetch personal info
PUT    /api/personal-info         - Update personal info
GET    /api/projects              - Fetch all projects
GET    /api/projects/{id}         - Fetch project by ID
POST   /api/projects              - Create project
PUT    /api/projects/{id}         - Update project
DELETE /api/projects/{id}         - Delete project


TROUBLESHOOTING
===============

MySQL Connection Refused:
- Verify MySQL is running
- Check credentials in application.yml
- Ensure portfolio_db database exists

Port 8080 Already In Use:
- Edit application.yml: server.port: 8081

CORS Error in Frontend:
- Ensure @CrossOrigin(origins = "http://localhost:5173") in controller

Database Not Created:
- Manually run data.sql or check ddl-auto setting

Frontend Won't Connect:
- Ensure backend is running on port 8080
- Check apiConfig.baseURL in config.js


CUSTOMIZATION GUIDE
===================

Edit Your Personal Info:
1. Open frontend/src/config.js
2. Update portfolioConfig.personalInfo fields
3. Frontend will reload automatically

Add New Projects:
1. Use POST /api/projects endpoint
2. Or manually insert into data.sql

Extend Entities:
1. Add new fields to PersonalInfo.java or Project.java
2. Add @Column annotations
3. Run backend - schema updates automatically


FOR JUNIOR DEVELOPERS
=====================
- Start by editing config.js with your details
- Understand how React components fetch data
- Learn the request/response cycle
- Try adding new fields to entities

FOR MID-LEVEL ENGINEERS
=======================
- Extend repositories with custom queries
- Implement service layer logic
- Add input validation and error handling
- Add pagination/filtering to endpoints
- Consider deployment strategy


IMPORTANT NOTES
===============

- No authentication (add Spring Security for production)
- No Docker (runs locally with native tools)
- No CI/CD (deploy manually or set up GitHub Actions)
- Never store passwords in plain text
- Use environment variables in production
- CORS configured for localhost development only


NEXT STEPS (OPTIONAL)
====================

- Deploy to AWS/Heroku/Azure
- Add Spring Security authentication
- Implement email notifications
- Add content management features
- Set up automated testing
- Configure HTTPS
- Add database backups

Happy coding! 🚀
