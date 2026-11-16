-- Initial Data for Portfolio (Debdipttya Das)

USE portfolio_db;

INSERT INTO personal_info (id, name, title, bio, email, phone, location, github, linkedin, twitter) 
VALUES (1, 'Debdipttya Das', 'Java Full Stack Developer', 
        'Final-year BCA student and Java Full Stack Developer building AI-powered agricultural platforms, placement management systems and scalable web applications with React, Spring Boot, MySQL and REST APIs.',
        'das39808@gmail.com', '+91 6290552384', 'Kolkata, West Bengal, India',
        'https://github.com/DebdipttyaDas', 'https://www.linkedin.com/in/debdipttya-das-678755310', '')
ON DUPLICATE KEY UPDATE 
  name = VALUES(name),
  title = VALUES(title),
  bio = VALUES(bio),
  email = VALUES(email),
  phone = VALUES(phone),
  location = VALUES(location),
  github = VALUES(github),
  linkedin = VALUES(linkedin),
  twitter = VALUES(twitter);

INSERT INTO projects (title, description, technologies, github_link, live_link) VALUES
('AI-Based Plant Disease Detection System', 'Agricultural application supporting plant disease identification, farmer and agricultural expert workflows with disease prediction and history.', 
 'React.js, Spring Boot, Python, Machine Learning, MySQL', 'https://github.com/DebdipttyaDas', 'https://github.com/DebdipttyaDas'),
('Placement Management System', 'Enterprise placement application for Admin, Student and Company roles with verification, drive management and n8n email automation.',
 'Java, JSP, Servlets, Spring MVC, MySQL, HTML, CSS, JavaScript', 'https://github.com/DebdipttyaDas', 'https://github.com/DebdipttyaDas'),
('Full-Stack Portfolio & REST Architecture', 'Cinematic streaming-inspired portfolio with decoupled React UI, Spring Boot REST backend, MySQL persistence and 60 FPS animations.',
 'React.js, Spring Boot, MySQL, REST APIs, Tailwind CSS, Framer Motion', 'https://github.com/DebdipttyaDas', 'https://github.com/DebdipttyaDas');
