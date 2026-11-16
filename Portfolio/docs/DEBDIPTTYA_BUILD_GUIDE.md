═══════════════════════════════════════════════════════════════════════════════
                    DEBDIPTTYA DAS - PORTFOLIO BUILD
                          BUILD EXECUTION GUIDE
═══════════════════════════════════════════════════════════════════════════════

PERSONALIZED BUILD SCRIPT FOR YOUR PORTFOLIO

Your Information:
├── Name: Debdipttya Das
├── Title: Full Stack Developer
├── Email: (Update in config.js after build)
├── Phone: (Update in config.js after build)
├── Location: India
├── GitHub: https://github.com/yourusername
├── LinkedIn: https://linkedin.com/in/yourprofile
└── Tech Stack: React, Spring Boot, MySQL, Java

═══════════════════════════════════════════════════════════════════════════════
STEP 1: CREATE PROJECT STRUCTURE (5 minutes)
═══════════════════════════════════════════════════════════════════════════════

Run these commands in PowerShell (Windows) or Terminal (Mac/Linux):

# Navigate to your project location
cd D:\PROJECT-WORK\Portfolio

# Create main project directory
mkdir My_Portfolio_DebdipttayaDas
cd My_Portfolio_DebdipttayaDas

# Create backend and frontend folders
mkdir backend frontend database

# Verify structure
dir

Expected output: backend, frontend, database folders created

═══════════════════════════════════════════════════════════════════════════════
STEP 2: SETUP MYSQL DATABASE (10 minutes)
═══════════════════════════════════════════════════════════════════════════════

Run this command:
mysql -u root -p

(Enter your MySQL root password when prompted)

Then copy-paste these commands in MySQL prompt:

---BEGIN SQL---
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'SecurePassword123!';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
SHOW DATABASES;
EXIT;
---END SQL---

Expected: You should see "portfolio_db" in the databases list

═══════════════════════════════════════════════════════════════════════════════
STEP 3: CREATE BACKEND STRUCTURE (5 minutes)
═══════════════════════════════════════════════════════════════════════════════

# From My_Portfolio_DebdipttayaDas folder:
cd backend

# Create Java package structure
mkdir -p src/main/java/com/portfolio/controller
mkdir -p src/main/java/com/portfolio/entity
mkdir -p src/main/java/com/portfolio/repository
mkdir -p src/main/resources

# Verify structure
dir

Expected: src folder with subdirectories

═══════════════════════════════════════════════════════════════════════════════
STEP 4: CREATE BACKEND FILES - pom.xml
═══════════════════════════════════════════════════════════════════════════════

File location: backend/pom.xml

Copy this entire content:

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

═══════════════════════════════════════════════════════════════════════════════
STEP 5: CREATE application.yml
═══════════════════════════════════════════════════════════════════════════════

File location: backend/src/main/resources/application.yml

Copy this content:

spring:
  application:
    name: portfolio-app
  datasource:
    url: jdbc:mysql://localhost:3306/portfolio_db
    username: portfolio_user
    password: SecurePassword123!
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

═══════════════════════════════════════════════════════════════════════════════
STEP 6: CREATE BACKEND ENTITY - PersonalInfo.java
═══════════════════════════════════════════════════════════════════════════════

File: backend/src/main/java/com/portfolio/entity/PersonalInfo.java

Copy this content:

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

═══════════════════════════════════════════════════════════════════════════════
STEP 7: CREATE BACKEND ENTITY - Project.java
═══════════════════════════════════════════════════════════════════════════════

File: backend/src/main/java/com/portfolio/entity/Project.java

Copy this content:

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

═══════════════════════════════════════════════════════════════════════════════
STEP 8: CREATE REPOSITORIES
═══════════════════════════════════════════════════════════════════════════════

File 1: backend/src/main/java/com/portfolio/repository/PersonalInfoRepository.java

package com.portfolio.repository;

import com.portfolio.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
}

---

File 2: backend/src/main/java/com/portfolio/repository/ProjectRepository.java

package com.portfolio.repository;

import com.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}

═══════════════════════════════════════════════════════════════════════════════
STEP 9: CREATE API CONTROLLER
═══════════════════════════════════════════════════════════════════════════════

File: backend/src/main/java/com/portfolio/controller/ApiController.java

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

═══════════════════════════════════════════════════════════════════════════════
STEP 10: CREATE MAIN APPLICATION CLASS
═══════════════════════════════════════════════════════════════════════════════

File: backend/src/main/java/com/portfolio/PortfolioApplication.java

package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {
    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }
}

═══════════════════════════════════════════════════════════════════════════════
STEP 11: CREATE data.sql
═══════════════════════════════════════════════════════════════════════════════

File: backend/src/main/resources/data.sql

INSERT IGNORE INTO personal_info (id, name, title, bio, email, phone, location, github, linkedin, twitter) 
VALUES (1, 'Debdipttya Das', 'Full Stack Developer', 
        'Passionate Full Stack Developer with expertise in React, Spring Boot, and MySQL. Building scalable applications using modern technologies.',
        'debdipttya.das@example.com', '+91-XXXXXXXXXX', 'India',
        'https://github.com/yourusername', 'https://linkedin.com/in/yourprofile', 'https://twitter.com/yourhandle');

INSERT INTO projects (title, description, technologies, github_link, live_link) VALUES
('E-Commerce Platform', 'Full-stack e-commerce application with payment integration and inventory management', 
 'React, Spring Boot, MySQL, Stripe', 'https://github.com/yourusername/ecommerce', 'https://yourecommerce.com'),
('Social Media App', 'Real-time social networking platform with messaging, notifications and user profiles',
 'React, Node.js, MongoDB, Socket.io', 'https://github.com/yourusername/social', 'https://yoursocialapp.com'),
('Blog Platform', 'Markdown-based blog with analytics dashboard and comment system',
 'React, Express, PostgreSQL, Chart.js', 'https://github.com/yourusername/blog', 'https://yourblog.com');

═══════════════════════════════════════════════════════════════════════════════
STEP 12: BUILD BACKEND
═══════════════════════════════════════════════════════════════════════════════

# From backend directory:
cd backend
mvn clean install

Expected output:
"BUILD SUCCESS"
"portfolio-app-1.0.0.jar"

Time: ~2-3 minutes (first time downloading dependencies)

═══════════════════════════════════════════════════════════════════════════════
STEP 13: SETUP FRONTEND
═══════════════════════════════════════════════════════════════════════════════

# From My_Portfolio_DebdipttayaDas directory:
cd frontend

# Initialize Vite React project
npm create vite@latest . -- --template react

# When prompted, choose: Yes

# Install dependencies
npm install

# Install Material-UI and other packages
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install axios

Expected: All packages installed successfully

═══════════════════════════════════════════════════════════════════════════════
STEP 14: CREATE FRONTEND FILES - config.js
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/config.js

export const portfolioConfig = {
  personalInfo: {
    name: "Debdipttya Das",
    title: "Full Stack Developer",
    bio: "Passionate Full Stack Developer with expertise in React, Spring Boot, and MySQL. Building scalable applications using modern technologies.",
    email: "debdipttya.das@example.com",
    phone: "+91-XXXXXXXXXX",
    location: "India",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle"
  }
};

export const apiConfig = {
  baseURL: "http://localhost:8080/api",
  timeout: 5000
};

═══════════════════════════════════════════════════════════════════════════════
STEP 15: CREATE API CLIENT
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/api/apiClient.js

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

═══════════════════════════════════════════════════════════════════════════════
STEP 16: CREATE REACT COMPONENTS
═══════════════════════════════════════════════════════════════════════════════

Create folder: frontend/src/components

File 1: frontend/src/components/Header.jsx

import { Box, Typography, Button, Stack } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

export default function Header({ info }) {
  if (!info) return null

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        px: 3,
        borderRadius: 2,
        mb: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
        {info.name}
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, opacity: 0.9 }}>
        {info.title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <Button
          href={info.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            border: '2px solid white',
            borderRadius: '50%',
            width: 50,
            height: 50
          }}
        >
          <GitHub />
        </Button>
        <Button
          href={info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            border: '2px solid white',
            borderRadius: '50%',
            width: 50,
            height: 50
          }}
        >
          <LinkedIn />
        </Button>
        <Button
          href={`mailto:${info.email}`}
          sx={{
            color: 'white',
            border: '2px solid white',
            borderRadius: '50%',
            width: 50,
            height: 50
          }}
        >
          <Email />
        </Button>
      </Stack>

      {info.location && (
        <Typography variant="body1">
          📍 {info.location}
        </Typography>
      )}
    </Box>
  )
}

---

File 2: frontend/src/components/About.jsx

import { Box, Typography, Paper, Grid } from '@mui/material'

export default function About({ info }) {
  if (!info) return null

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        About Me
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
          {info.bio}
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <Typography color="textSecondary" sx={{ mb: 1 }}>
              Email
            </Typography>
            <Typography variant="h6">{info.email}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <Typography color="textSecondary" sx={{ mb: 1 }}>
              Phone
            </Typography>
            <Typography variant="h6">{info.phone}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
            <Typography color="textSecondary" sx={{ mb: 1 }}>
              Location
            </Typography>
            <Typography variant="h6">{info.location}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

---

File 3: frontend/src/components/Projects.jsx

import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
          Projects
        </Typography>
        <Typography>No projects yet. Check back soon!</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Featured Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                }
              }}
              elevation={2}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                {project.technologies && (
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.split(',').map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech.trim()}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                )}
              </CardContent>

              <CardActions>
                {project.githubLink && (
                  <Button
                    size="small"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHub />}
                  >
                    Code
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    size="small"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Launch />}
                  >
                    Live
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

---

File 4: frontend/src/components/Contact.jsx

import { Box, Typography, TextField, Button, Paper, Stack, Grid } from '@mui/material'
import { useState } from 'react'
import { Send } from '@mui/icons-material'

export default function Contact({ info, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      console.log('Message from:', formData)
      onSubmit(formData)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
        Get In Touch
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Connect With Me
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                <Typography variant="body1">
                  <a href={`mailto:${info.email}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                    {info.email}
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">GitHub</Typography>
                <Typography variant="body1">
                  <a href={info.github} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none' }}>
                    github.com/yourusername
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">LinkedIn</Typography>
                <Typography variant="body1">
                  <a href={info.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none' }}>
                    linkedin.com/in/yourprofile
                  </a>
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

═══════════════════════════════════════════════════════════════════════════════
STEP 17: CREATE MAIN APP COMPONENTS
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/App.jsx

import { useState, useEffect } from 'react'
import { Container, Box, CircularProgress, Alert } from '@mui/material'
import { portfolioAPI } from './api/apiClient'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const [infoRes, projectsRes] = await Promise.all([
        portfolioAPI.getPersonalInfo(),
        portfolioAPI.getProjects()
      ])
      setPersonalInfo(infoRes.data)
      setProjects(projectsRes.data)
    } catch (err) {
      setError('Failed to load portfolio. Make sure backend is running on http://localhost:8080')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {error && (
        <Alert severity="error" onClose={fetchData} sx={{ m: 2, cursor: 'pointer' }}>
          {error} Click to retry.
        </Alert>
      )}

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          {personalInfo && (
            <>
              <Header info={personalInfo} />
              <About info={personalInfo} />
              <Projects projects={projects} />
              <Contact info={personalInfo} onSubmit={() => {}} />
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default App

---

File: frontend/src/App.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

---

File: frontend/src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: { main: '#667eea' },
    secondary: { main: '#764ba2' },
    background: { default: '#f5f5f5' }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

═══════════════════════════════════════════════════════════════════════════════
STEP 18: RUN BOTH SERVERS
═══════════════════════════════════════════════════════════════════════════════

TERMINAL 1 - Start Backend Server:

cd backend
java -jar target/portfolio-app-1.0.0.jar

Expected output:
"Started PortfolioApplication in X.XXX seconds (JVM running for X.XXX)"
"Tomcat started on port(s): 8080 (http)"

---

TERMINAL 2 - Start Frontend Server (NEW TERMINAL):

cd frontend
npm run dev

Expected output:
"VITE v4.X.X ready in XXX ms"
"Local: http://localhost:5173/"

═══════════════════════════════════════════════════════════════════════════════
STEP 19: VERIFY EVERYTHING WORKS
═══════════════════════════════════════════════════════════════════════════════

Test Backend API:
$ curl http://localhost:8080/api/personal-info

Expected: JSON response with your info

---

Access Portfolio in Browser:
Open: http://localhost:5173

Expected: 
- Your name displayed prominently
- Your title displayed
- Your bio
- Projects gallery
- Contact form

═══════════════════════════════════════════════════════════════════════════════
CUSTOMIZATION - UPDATE YOUR DETAILS
═══════════════════════════════════════════════════════════════════════════════

Update Email:
File: frontend/src/config.js
Line: email: "your-actual-email@example.com"

Update Phone:
File: frontend/src/config.js
Line: phone: "+91-XXXXXXXXXX"

Update Social Links:
File: frontend/src/config.js
Lines: github, linkedin, twitter

Update Bio:
File: frontend/src/config.js
Line: bio: "Your bio..."

Update Projects:
Option 1: Edit backend/src/main/resources/data.sql and rebuild

Option 2: Use API:
curl -X POST http://localhost:8080/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Project",
    "description": "Description",
    "technologies": "Tech1, Tech2",
    "githubLink": "https://github.com/...",
    "liveLink": "https://..."
  }'

═══════════════════════════════════════════════════════════════════════════════
TROUBLESHOOTING
═══════════════════════════════════════════════════════════════════════════════

"Port 8080 already in use":
→ Change in application.yml: server.port: 8081

"MySQL connection refused":
→ 1. Start MySQL service
  2. Verify credentials match application.yml
  3. Test: mysql -u portfolio_user -p portfolio_db

"Cannot GET /":
→ Your API context path is /api
  Try: http://localhost:8080/api/personal-info

"CORS error":
→ Make sure backend is running before frontend
  Check @CrossOrigin annotation in ApiController

"npm: command not found":
→ Install Node.js from nodejs.org

"mvn: command not found":
→ Install Maven and add to PATH

═══════════════════════════════════════════════════════════════════════════════
FINAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════

✅ Your portfolio is now complete!

Location: D:\PROJECT-WORK\Portfolio\My_Portfolio_DebdipttayaDas

Backend Running On: http://localhost:8080/api
Frontend Running On: http://localhost:5173

What You Have:
✓ Professional personal profile
✓ Project showcase gallery
✓ Contact form
✓ REST API backend
✓ MySQL database
✓ Responsive Material-UI design

Next Steps:
1. Open http://localhost:5173 in browser
2. See your portfolio live
3. Customize with your actual email and phone
4. Add more projects
5. Deploy to cloud when ready

═══════════════════════════════════════════════════════════════════════════════
