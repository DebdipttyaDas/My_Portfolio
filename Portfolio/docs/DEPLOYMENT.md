FRONTEND REACT COMPONENTS - COMPLETE IMPLEMENTATION
====================================================

FILE 1: frontend/package.json
============================

{
  "name": "my-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "@mui/material": "^5.14.0",
    "@emotion/react": "^11.11.0",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0"
  }
}


FILE 2: frontend/src/App.jsx
============================

import { useState, useEffect } from 'react'
import { Container, Box, CircularProgress, Alert, Snackbar } from '@mui/material'
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
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

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
      const message = err.response?.status === 404 
        ? 'Portfolio data not found. Make sure backend is initialized.'
        : 'Failed to load portfolio data. Make sure the backend is running on http://localhost:8080'
      setError(message)
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    fetchData()
  }

  const handleContactSubmit = (message) => {
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I will get back to you soon.'
    })
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
        <Alert severity="error" onClose={handleRefresh} sx={{ m: 2, cursor: 'pointer' }}>
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
              <Contact info={personalInfo} onSubmit={handleContactSubmit} />
            </>
          )}
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  )
}

export default App


FILE 3: frontend/src/components/Header.jsx
===========================================

import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

export default function Header({ info }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (!info) return null

  const socialLinks = [
    { icon: GitHub, url: info.github, label: 'GitHub' },
    { icon: LinkedIn, url: info.linkedin, label: 'LinkedIn' },
    { icon: Email, url: `mailto:${info.email}`, label: 'Email' }
  ]

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
      <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ fontWeight: 'bold', mb: 1 }}>
        {info.name}
      </Typography>
      <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ mb: 2, opacity: 0.9 }}>
        {info.title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Button
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                border: '2px solid white',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Icon />
            </Button>
          )
        })}
      </Stack>

      {info.location && (
        <Typography variant="body1">
          📍 {info.location}
        </Typography>
      )}
    </Box>
  )
}


FILE 4: frontend/src/components/About.jsx
==========================================

import { Box, Typography, Paper, Grid } from '@mui/material'

export default function About({ info }) {
  if (!info) return null

  const details = [
    { label: 'Email', value: info.email },
    { label: 'Phone', value: info.phone },
    { label: 'Location', value: info.location }
  ]

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
        {details.map((detail) => (
          <Grid item xs={12} sm={6} md={4} key={detail.label}>
            <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                {detail.label}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {detail.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}


FILE 5: frontend/src/components/Projects.jsx
=============================================

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
                transition: 'transform 0.3s, box-shadow 0.3s',
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


FILE 6: frontend/src/components/Contact.jsx
===========================================

import { Box, Typography, TextField, Button, Paper, Stack } from '@mui/material'
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData)
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
                  sx={{ mt: 2 }}
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
              Other Ways to Reach Me
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Email
                </Typography>
                <Typography variant="body1">
                  <a href={`mailto:${info.email}`} style={{ textDecoration: 'none', color: '#667eea' }}>
                    {info.email}
                  </a>
                </Typography>
              </Box>
              {info.phone && (
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">{info.phone}</Typography>
                </Box>
              )}
              {info.github && (
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    GitHub
                  </Typography>
                  <Typography variant="body1">
                    <a href={info.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#667eea' }}>
                      {info.github}
                    </a>
                  </Typography>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}


FILE 7: frontend/src/App.css
=============================

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #764ba2;
}


FILE 8: frontend/index.html
===========================

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
    <meta name="description" content="Full Stack Developer Portfolio" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


FILE 9: frontend/src/main.jsx
=============================

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
    background: {
      default: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    }
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


DEPLOYMENT NOTES
================

PRODUCTION CHECKLIST
====================

Backend:
□ Update DB_PASSWORD environment variable
□ Set spring.jpa.hibernate.ddl-auto=validate
□ Enable HTTPS/SSL
□ Add Spring Security authentication
□ Configure proper CORS for production domain
□ Set up logging and monitoring
□ Configure backup strategy

Frontend:
□ Run: npm run build
□ Test: npm run preview
□ Update apiConfig.baseURL to production URL
□ Enable gzip compression
□ Configure CDN for static assets
□ Set up error tracking (Sentry)

Database:
□ Create backups
□ Enable replication
□ Set up monitoring
□ Implement indexing strategy
□ Configure automatic backups


TESTING GUIDE
=============

MANUAL TESTING STEPS

1. Frontend Component Testing:
   - Edit config.js with test data
   - Verify all sections display correctly
   - Test responsive design on mobile
   - Check all links work
   - Test form submission

2. Backend API Testing (using curl):

   Get Personal Info:
   curl http://localhost:8080/api/personal-info

   Get All Projects:
   curl http://localhost:8080/api/projects

   Create Project:
   curl -X POST http://localhost:8080/api/projects \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Test Project",
       "description": "A test project",
       "technologies": "React, Spring Boot",
       "githubLink": "https://github.com/test",
       "liveLink": "https://test.com"
     }'

   Update Project:
   curl -X PUT http://localhost:8080/api/projects/1 \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Updated Title",
       "description": "Updated description"
     }'

   Delete Project:
   curl -X DELETE http://localhost:8080/api/projects/1

3. Database Testing:
   mysql -u portfolio_user -p portfolio_db
   SELECT * FROM personal_info;
   SELECT * FROM projects;


PERFORMANCE OPTIMIZATION TIPS
==============================

Frontend:
- Use React.memo for components that don't change often
- Lazy load images with <img loading="lazy">
- Minify CSS and JavaScript
- Use code splitting for large components
- Cache API responses

Backend:
- Add database indexing
- Use pagination for large datasets
- Implement caching layer
- Use connection pooling
- Monitor query performance


SECURITY BEST PRACTICES
=======================

Frontend:
- Never store sensitive data in localStorage
- Use HTTPS in production
- Validate all user input
- Sanitize output to prevent XSS
- Use strong Content Security Policy

Backend:
- Use environment variables for secrets
- Implement rate limiting
- Validate all API inputs
- Use parameterized queries
- Keep dependencies updated
- Implement request logging


SCALING CONSIDERATIONS
======================

When your portfolio grows:

1. Database:
   - Add read replicas
   - Implement sharding
   - Use connection pooling

2. Backend:
   - Load balance multiple instances
   - Use caching (Redis)
   - Implement API versioning
   - Add authentication

3. Frontend:
   - Deploy to CDN
   - Enable compression
   - Use service workers for caching

4. Monitoring:
   - Set up error tracking
   - Monitor performance metrics
   - Log important events
   - Set up alerts


ENVIRONMENT VARIABLES
====================

Backend (.env file or system variables):
DB_PASSWORD=YourSecurePassword123!
JAVA_OPTS=-Xmx1024m

Frontend (.env file):
VITE_API_URL=http://localhost:8080/api


QUICK REFERENCE
===============

Start Backend:
cd backend && java -jar target/portfolio-app-1.0.0.jar

Start Frontend:
cd frontend && npm run dev

Stop Services:
Press Ctrl+C in each terminal

Clean Build:
cd backend && mvn clean install

Install Frontend Updates:
cd frontend && npm install

View Logs (Backend):
Check console output or log files

View Logs (Frontend):
Check browser console (F12)

Access Databases:
mysql -u portfolio_user -p portfolio_db

Restart MySQL:
Windows: Services → MySQL80 → Restart
Mac: brew services restart mysql
Linux: sudo systemctl restart mysql
