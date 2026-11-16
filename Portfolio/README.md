COMPREHENSIVE README TEMPLATE FOR MY_PORTFOLIO
===============================================

Use this README.md in your project root directory


# 🎨 My_Portfolio - Full Stack Web Application

A complete full-stack portfolio website built with **React**, **Spring Boot**, and **MySQL**. Perfect for showcasing your projects and skills to potential employers and clients.

## ✨ Features

- **Personal Profile**: Showcase your name, title, bio, and contact information
- **Project Gallery**: Display all your projects with descriptions and links
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **REST API**: Complete backend API for managing portfolio content
- **Material-UI Components**: Professional-looking UI with Material Design
- **Database Persistence**: All data stored securely in MySQL
- **Easy Customization**: Simple configuration file to update your information

## 🚀 Quick Start

### Prerequisites

- Java 17+
- Maven 3.8+
- Node.js 18+
- MySQL 8.0+

### Installation (5 minutes)

1. **Clone and Setup**
```bash
git clone <your-repo-url>
cd My_Portfolio
mkdir frontend backend database
```

2. **Setup MySQL Database**
```bash
mysql -u root -p
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'SecurePassword123!';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

3. **Build Backend**
```bash
cd backend
mvn clean install
```

4. **Setup Frontend**
```bash
cd frontend
npm create vite@latest . -- --template react
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios
```

5. **Run Applications**

Terminal 1:
```bash
cd backend
java -jar target/portfolio-app-1.0.0.jar
```

Terminal 2:
```bash
cd frontend
npm run dev
```

6. **Access Your Portfolio**
- Backend API: http://localhost:8080/api
- Frontend: http://localhost:5173

## 📖 Documentation

### For Beginners

Start here if you're new to web development:

1. **First Steps**: Edit `frontend/src/config.js` with your personal details
2. **Understanding Components**: Read comments in React component files
3. **API Basics**: Test endpoints with curl commands provided in API Reference
4. **Database**: Learn how data flows from MySQL to React

### For Experienced Developers

Advanced topics:

1. **Architecture**: Backend uses Spring Boot with JPA, frontend uses React with Vite
2. **Database Schema**: PersonalInfo (1:N) with Projects relationship
3. **API Design**: RESTful endpoints following standard conventions
4. **State Management**: React hooks for component state
5. **Styling**: Material-UI theme customization in frontend/src/main.jsx

## 🛠️ Customization

### Update Personal Information

Edit `frontend/src/config.js`:

```javascript
export const portfolioConfig = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "City, Country",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};
```

### Add Projects

Via API:
```bash
curl -X POST http://localhost:8080/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Project Name",
    "description": "Project description",
    "technologies": "React, Spring Boot, MySQL",
    "githubLink": "https://github.com/...",
    "liveLink": "https://..."
  }'
```

Or edit `backend/src/main/resources/data.sql` and rebuild.

### Customize Theme

Edit `frontend/src/main.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#YOUR_COLOR', // Change primary color
    },
    secondary: {
      main: '#YOUR_COLOR', // Change secondary color
    }
  }
});
```

## 📡 API Reference

### Personal Information

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/personal-info` | Fetch personal information |
| PUT | `/personal-info` | Update personal information |

**Example:**
```bash
curl http://localhost:8080/api/personal-info
```

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Fetch all projects |
| GET | `/projects/{id}` | Fetch project by ID |
| POST | `/projects` | Create new project |
| PUT | `/projects/{id}` | Update project |
| DELETE | `/projects/{id}` | Delete project |

**Examples:**
```bash
# Get all projects
curl http://localhost:8080/api/projects

# Create project
curl -X POST http://localhost:8080/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"My Project","description":"Description","technologies":"Tech1,Tech2"}'

# Update project
curl -X PUT http://localhost:8080/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title"}'

# Delete project
curl -X DELETE http://localhost:8080/api/projects/1
```

## 📁 Project Structure

```
My_Portfolio/
├── backend/
│   ├── src/main/
│   │   ├── java/com/portfolio/
│   │   │   ├── PortfolioApplication.java
│   │   │   ├── controller/ApiController.java
│   │   │   ├── entity/
│   │   │   │   ├── PersonalInfo.java
│   │   │   │   └── Project.java
│   │   │   └── repository/
│   │   │       ├── PersonalInfoRepository.java
│   │   │       └── ProjectRepository.java
│   │   └── resources/
│   │       ├── application.yml
│   │       └── data.sql
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── api/apiClient.js
│   │   ├── config.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── database/
    └── init.sql
```

## 🐛 Troubleshooting

### Backend Issues

**Port 8080 already in use:**
```bash
# Windows
netstat -ano | findstr :8080

# Mac/Linux
lsof -i :8080
```
Change port in `application.yml`: `server.port: 8081`

**MySQL connection refused:**
1. Verify MySQL is running
2. Check credentials in `application.yml`
3. Test connection: `mysql -u portfolio_user -p portfolio_db`

**Build fails:**
```bash
mvn clean install -DskipTests
```

### Frontend Issues

**Port 5173 in use:**
Vite automatically uses next available port (5174, 5175, etc.)

**CORS error:**
Ensure `@CrossOrigin(origins = "http://localhost:5173")` in `ApiController.java`

**Blank page:**
1. Open browser console (F12)
2. Check Network tab for failed requests
3. Verify backend is running

## 📚 Learning Resources

### For Beginners

- **React Docs**: https://react.dev
- **HTTP Basics**: https://developer.mozilla.org/en-US/docs/Web/HTTP
- **REST API Concepts**: https://www.restfulapi.net/
- **MySQL Basics**: https://dev.mysql.com/doc/

### For Intermediate Developers

- **Spring Boot**: https://spring.io/projects/spring-boot
- **Material-UI**: https://mui.com/
- **Database Design**: https://en.wikipedia.org/wiki/Database_normalization
- **React Hooks**: https://react.dev/reference/react

### For Advanced Developers

- **Spring Security**: https://spring.io/projects/spring-security
- **React Performance**: https://react.dev/reference/react/Profiler
- **Database Optimization**: https://use-the-index-luke.com/
- **Microservices**: https://microservices.io/

## 🚢 Deployment

### Build for Production

**Backend:**
```bash
cd backend
mvn clean install
# JAR file: target/portfolio-app-1.0.0.jar
```

**Frontend:**
```bash
cd frontend
npm run build
# Static files: dist/
```

### Deploy to Heroku

1. Create Heroku account
2. Install Heroku CLI
3. Push to Heroku Git repository
4. Set environment variables: `DB_PASSWORD`

### Deploy to AWS

1. Backend: EC2 with Java or Elastic Beanstalk
2. Frontend: S3 + CloudFront
3. Database: RDS MySQL

### Deploy to Azure

1. Create App Service for Java backend
2. Create Static Web App for React frontend
3. Create MySQL Database

## 🔒 Security

### Before Production

- [ ] Change MySQL default password
- [ ] Remove hardcoded credentials
- [ ] Enable HTTPS/SSL
- [ ] Add input validation
- [ ] Implement rate limiting
- [ ] Update dependencies

### Best Practices

- Use environment variables for secrets
- Validate all user inputs
- Use parameterized queries
- Implement CORS for production domain
- Enable SQL prepared statements
- Keep dependencies updated

## 📊 Database Schema

### personal_info Table
```
id (PK)
name (VARCHAR 255)
title (VARCHAR 255)
bio (TEXT)
email (VARCHAR 255)
phone (VARCHAR 20)
location (VARCHAR 255)
github (VARCHAR 500)
linkedin (VARCHAR 500)
twitter (VARCHAR 500)
```

### projects Table
```
id (PK)
title (VARCHAR 255)
description (TEXT)
technologies (VARCHAR 500)
github_link (VARCHAR 500)
live_link (VARCHAR 500)
created_at (DATETIME)
```

## 📝 Common Commands

### Backend
```bash
mvn clean install          # Build
java -jar target/*.jar     # Run
mvn test                   # Test
mvn clean                  # Clean
```

### Frontend
```bash
npm install                # Install dependencies
npm run dev                # Development server
npm run build              # Production build
npm run preview            # Preview production build
```

### Database
```bash
mysql -u portfolio_user -p portfolio_db    # Connect
mysqldump -u portfolio_user -p portfolio_db > backup.sql  # Backup
mysql -u portfolio_user -p portfolio_db < backup.sql      # Restore
```

## 🎓 Educational Value

This project demonstrates:

**For Beginners:**
- How to build a React application
- Understanding REST APIs
- Basic database design
- Component-based architecture

**For Intermediate:**
- Spring Boot best practices
- JPA/Hibernate ORM
- React hooks and state management
- CORS and HTTP headers

**For Advanced:**
- Microservices architecture
- Database optimization
- Security implementation
- Deployment strategies

## 📞 Support & Contribution

### Getting Help

1. Check Troubleshooting section
2. Review component documentation
3. Check API Reference
4. Enable debug logging

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React, Spring Boot, and MySQL
- UI Components from Material-UI
- Icons from Material-UI Icons

---

## Quick Links

- [Setup Guide](docs/SETUP.md)
- [API Documentation](docs/API.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

---

**Happy coding! 🚀**

For more information, visit the documentation files or check the source code comments.

Last Updated: 2026-11-09
Version: 1.0.0
