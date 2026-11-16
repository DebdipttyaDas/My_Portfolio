CREATE TABLE IF NOT EXISTS personal_info (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  email VARCHAR(255),
  phone VARCHAR(20),
  location VARCHAR(255),
  github VARCHAR(500),
  linkedin VARCHAR(500),
  twitter VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS projects (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  technologies VARCHAR(500),
  github_link VARCHAR(500),
  live_link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

