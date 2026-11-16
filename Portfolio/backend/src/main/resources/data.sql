DELETE FROM personal_info WHERE id = 1;
INSERT INTO personal_info (id, name, title, bio, email, phone, location, github, linkedin, twitter) 
VALUES (1, 'Debdipttya Das', 'Java Full Stack Developer', 
        'Final-year BCA student and Java Full Stack Developer building AI-powered agricultural platforms, placement management systems and scalable web applications with React, Spring Boot, MySQL and REST APIs.',
        'das39808@gmail.com', '+91 6290552384', 'Kolkata, West Bengal, India',
        'https://github.com/DebdipttyaDas', 'https://www.linkedin.com/in/debdipttya-das-678755310', 'https://github.com/DebdipttyaDas');

DELETE FROM projects WHERE id IN (1, 2, 3);
INSERT INTO projects (id, title, description, technologies, github_link, live_link, created_at) VALUES
(1, 'Plant Disease Detection', 'Deep learning & computer vision diagnostic system analyzing crop leaf foliage to detect crop pathologies and provide real-time remedy recommendations for Indian farmers.', 
 'Python, TensorFlow, Keras, CNN, OpenCV, React.js, FastAPI', 'https://github.com/DebdipttyaDas/Plant-Disease-Detection', 'https://github.com/DebdipttyaDas/Plant-Disease-Detection', CURRENT_TIMESTAMP),
(2, 'Placement Management System', 'Full-stack campus recruitment platform handling multi-tiered role authentication (Student, TPO, Recruiter), job application workflows, automated resume indexing, and drive scheduling.',
 'Java 17, Spring Boot, React.js, MySQL, REST API, Tailwind CSS', 'https://github.com/DebdipttyaDas/Placement-Management-System', 'https://github.com/DebdipttyaDas/Placement-Management-System', CURRENT_TIMESTAMP),
(3, 'Debdipttya Series Portfolio', 'Cinematic Netflix-themed interactive full-stack portfolio series featuring episodic career milestones, custom soundscapes, 6-profile view modes, and dynamic Spring Boot API endpoints.',
 'React 18, TypeScript, Spring Boot, MySQL, Vite, Framer Motion, Lenis', 'https://github.com/DebdipttyaDas/My_Portfolio', 'http://localhost:5173', CURRENT_TIMESTAMP);
