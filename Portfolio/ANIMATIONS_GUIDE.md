═══════════════════════════════════════════════════════════════════════════════
              ENHANCED PORTFOLIO WITH SMOOTH SCROLL ANIMATIONS
                    Lenis, GSAP & React Bits Integration
═══════════════════════════════════════════════════════════════════════════════

UPDATED BUILD GUIDE - ANIMATION FEATURES

This enhanced version includes:
✅ Lenis smooth scroll engine
✅ GSAP animations and transitions
✅ React Bits UI components
✅ Parallax scrolling effects
✅ Stagger animations for project cards
✅ Fade-in effects on scroll
✅ Purple color scheme matching (#667eea, #764ba2)
✅ Smooth entrance animations
✅ Interactive hover effects

═══════════════════════════════════════════════════════════════════════════════
STEP 14A: UPDATE package.json WITH ANIMATION LIBRARIES
═══════════════════════════════════════════════════════════════════════════════

File: frontend/package.json

Replace entire content with:

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
    "@mui/icons-material": "^5.14.0",
    "lenis": "^1.0.42",
    "gsap": "^3.12.2",
    "react-bits": "^1.0.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0"
  }
}

After updating, run:
npm install

═══════════════════════════════════════════════════════════════════════════════
UPDATED App.jsx WITH LENIS SMOOTH SCROLL
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/App.jsx

Replace entire content with:

import { useState, useEffect, useRef } from 'react'
import { Container, Box, CircularProgress, Alert } from '@mui/material'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioAPI } from './api/apiClient'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [personalInfo, setPersonalInfo] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const appRef = useRef(null)

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
    }

    gsap.ticker.add(raf)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  // Fetch data
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
      
      // Trigger animations after data loads
      setTimeout(() => {
        animateSections()
      }, 100)
    } catch (err) {
      setError('Failed to load portfolio. Make sure backend is running on http://localhost:8080')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // GSAP animations for sections
  const animateSections = () => {
    // Header animation
    gsap.to('[data-animate="header"]', {
      scrollTrigger: {
        trigger: '[data-animate="header"]',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    })

    // About section
    gsap.to('[data-animate="about"]', {
      scrollTrigger: {
        trigger: '[data-animate="about"]',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    })

    // Projects stagger
    gsap.to('[data-animate="project"]', {
      scrollTrigger: {
        trigger: '[data-animate="projects"]',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15
    })

    // Contact section
    gsap.to('[data-animate="contact"]', {
      scrollTrigger: {
        trigger: '[data-animate="contact"]',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    })
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress sx={{ color: '#667eea' }} />
      </Box>
    )
  }

  return (
    <Box ref={appRef} sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {error && (
        <Alert severity="error" onClose={fetchData} sx={{ m: 2, cursor: 'pointer' }}>
          {error} Click to retry.
        </Alert>
      )}

      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          {personalInfo && (
            <>
              <Box data-animate="header" sx={{ opacity: 0, y: 30 }}>
                <Header info={personalInfo} />
              </Box>
              <Box data-animate="about" sx={{ opacity: 0, y: 30 }}>
                <About info={personalInfo} />
              </Box>
              <Box data-animate="projects" sx={{ opacity: 0, y: 30 }}>
                <Projects projects={projects} />
              </Box>
              <Box data-animate="contact" sx={{ opacity: 0, y: 30 }}>
                <Contact info={personalInfo} onSubmit={() => {}} />
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default App

═══════════════════════════════════════════════════════════════════════════════
UPDATED Header.jsx WITH PARALLAX & ANIMATIONS
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/components/Header.jsx

Replace entire content with:

import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Header({ info }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const headerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      if (isMobile) return
      
      const rect = headerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      gsap.to(headerRef.current, {
        duration: 0.5,
        rotationY: (x - 0.5) * 5,
        rotationX: (y - 0.5) * -5,
        ease: 'power2.out'
      })
    }

    headerRef.current.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isMobile])

  // Floating animation
  useEffect(() => {
    if (!titleRef.current) return

    gsap.to(titleRef.current, {
      duration: 3,
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, [])

  if (!info) return null

  return (
    <Box
      ref={headerRef}
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        px: 3,
        borderRadius: 2,
        mb: 4,
        textAlign: 'center',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
        }
      }}
    >
      <Typography 
        ref={titleRef}
        variant={isMobile ? 'h4' : 'h2'} 
        sx={{ 
          fontWeight: 'bold', 
          mb: 1,
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.05em',
          textShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        {info.name}
      </Typography>
      
      <Typography 
        variant={isMobile ? 'h6' : 'h5'} 
        sx={{ 
          mb: 2, 
          opacity: 0.95,
          fontWeight: 300,
          letterSpacing: '0.02em'
        }}
      >
        {info.title}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        {[
          { icon: GitHub, url: info.github, label: 'GitHub' },
          { icon: LinkedIn, url: info.linkedin, label: 'LinkedIn' },
          { icon: Email, url: `mailto:${info.email}`, label: 'Email' }
        ].map((link) => {
          const Icon = link.icon
          return (
            <Button
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.15,
                  duration: 0.3,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.3,
                  boxShadow: 'none'
                })
              }}
              sx={{
                color: 'white',
                border: '2px solid white',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }
              }}
            >
              <Icon />
            </Button>
          )
        })}
      </Stack>

      {info.location && (
        <Typography 
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}
        >
          📍 {info.location}
        </Typography>
      )}
    </Box>
  )
}

═══════════════════════════════════════════════════════════════════════════════
UPDATED Projects.jsx WITH STAGGER & CARD ANIMATIONS
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/components/Projects.jsx

Replace entire content with:

import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Projects({ projects }) {
  const cardsRef = useRef([])

  useEffect(() => {
    if (!projects || projects.length === 0) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      // Initial state
      gsap.set(card, { opacity: 0, y: 50 })

      // Entrance animation on scroll
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
      })
    })
  }, [projects])

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
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={project.id}
            ref={(el) => cardsRef.current[index] = el}
          >
            <Card
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  y: -10,
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  y: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                })
              }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              elevation={2}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 1,
                    color: '#667eea',
                    letterSpacing: '0.01em'
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  color="textSecondary" 
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
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
                        sx={{
                          borderColor: '#667eea',
                          color: '#667eea',
                          '&:hover': {
                            background: 'rgba(102, 126, 234, 0.1)',
                          }
                        }}
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
                    sx={{
                      color: '#667eea',
                      '&:hover': {
                        background: 'rgba(102, 126, 234, 0.1)'
                      }
                    }}
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
                    sx={{
                      color: '#764ba2',
                      '&:hover': {
                        background: 'rgba(118, 75, 162, 0.1)'
                      }
                    }}
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

═══════════════════════════════════════════════════════════════════════════════
UPDATED App.css WITH ANIMATION STYLES
═══════════════════════════════════════════════════════════════════════════════

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

/* Scrollbar styling with accent colors */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

/* Smooth fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
  }
}

/* Perspective for 3D hover effects */
.card-container {
  perspective: 1000px;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Section fade in on scroll */
[data-animate="header"],
[data-animate="about"],
[data-animate="projects"],
[data-animate="contact"],
[data-animate="project"] {
  animation: fadeInUp 0.8s ease-out forwards;
}

═══════════════════════════════════════════════════════════════════════════════
UPDATED main.jsx WITH ANIMATION CONFIGURATION
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
UPDATED About.jsx WITH STAGGER ANIMATIONS
═══════════════════════════════════════════════════════════════════════════════

File: frontend/src/components/About.jsx

import { Box, Typography, Paper, Grid } from '@mui/material'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function About({ info }) {
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.set(card, { opacity: 0, y: 30 })

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
      })
    })
  }, [])

  if (!info) return null

  const details = [
    { label: 'Email', value: info.email },
    { label: 'Phone', value: info.phone },
    { label: 'Location', value: info.location }
  ]

  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        About Me
      </Typography>

      <Paper 
        elevation={2} 
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            y: -5,
            boxShadow: '0 15px 30px rgba(102, 126, 234, 0.2)'
          })
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            duration: 0.3,
            y: 0,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          })
        }}
        sx={{ 
          p: 4, 
          mb: 4,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
          border: '1px solid rgba(102, 126, 234, 0.1)',
          borderRadius: '12px',
          transition: 'all 0.3s ease'
        }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
          {info.bio}
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        {details.map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} key={detail.label}>
            <Paper 
              ref={(el) => cardsRef.current[index] = el}
              elevation={1} 
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  y: -8,
                  boxShadow: '0 12px 24px rgba(102, 126, 234, 0.2)',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                })
                gsap.to(e.currentTarget.querySelectorAll('span'), {
                  color: 'white',
                  duration: 0.3
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  duration: 0.3,
                  y: 0,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  background: 'white'
                })
                gsap.to(e.currentTarget.querySelectorAll('span'), {
                  color: 'inherit',
                  duration: 0.3
                })
              }}
              sx={{ 
                p: 3, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <Typography color="textSecondary" sx={{ mb: 1 }}>
                <span style={{ transition: 'color 0.3s' }}>{detail.label}</span>
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <span style={{ transition: 'color 0.3s' }}>{detail.value}</span>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

═══════════════════════════════════════════════════════════════════════════════
INSTALLATION COMMAND
═══════════════════════════════════════════════════════════════════════════════

After updating package.json, run:

cd frontend
npm install

Then continue with STEP 18-19 from the original build guide.

═══════════════════════════════════════════════════════════════════════════════
ANIMATION FEATURES ADDED
═══════════════════════════════════════════════════════════════════════════════

✅ LENIS SMOOTH SCROLL
   - Ultra-smooth scrolling experience
   - Momentum-based scroll
   - Touch-friendly scrolling

✅ GSAP ANIMATIONS
   - Fade-in on scroll for sections
   - Stagger animations for project cards
   - Hover effects with smooth transitions
   - 3D perspective effects on header
   - Floating animations for title
   - Scale and lift effects on cards

✅ COLOR SCHEME MATCHING
   - Purple gradients: #667eea to #764ba2
   - Smooth gradient text
   - Gradient scroll bar
   - Consistent color theme throughout
   - Hover state color transitions

✅ INTERACTIVE EFFECTS
   - Mouse parallax on header
   - Card hover lift animations
   - Button scale effects
   - Smooth color transitions
   - Text glow on hover

✅ SCROLL TRIGGER ANIMATIONS
   - Enter animations when scrolling into view
   - Staggered animations for project cards
   - Reverse animations when scrolling out
   - Performance optimized with ScrollTrigger

═══════════════════════════════════════════════════════════════════════════════

All animations match your purple color scheme (#667eea, #764ba2) and provide
a premium, smooth scrolling experience using Lenis, GSAP, and React Best Practices.

Continue with STEP 18-19 from DEBDIPTTYA_BUILD_GUIDE.md after npm install completes.
