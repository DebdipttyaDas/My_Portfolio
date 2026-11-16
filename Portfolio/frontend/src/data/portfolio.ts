/**
 * Central portfolio data — custom generated for Debdipttya Das.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Debdipttya Das',
  displayName: 'Debdipttya Das',
  firstName: 'DEBDIPTTYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DAS ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack Developer', 'React.js', 'Spring Boot', 'MySQL'],
  intro:
    'Final-year BCA student and Java Full Stack Developer building AI-powered agricultural platforms, placement management systems and scalable web applications with React, Spring Boot, MySQL and REST APIs.',
  location: 'Kolkata, West Bengal, India',
  phone: '+91 6290552384',
  email: 'das39808@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/debdipttya-das-678755310',
    github: 'https://github.com/DebdipttyaDas',
  },
  resumePdf: '/assets/Debdipttya_Das_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.png',
    srcSet: '/assets/portrait-420.png 420w, /assets/portrait-720.png 720w, /assets/portrait-1100.png 1100w',
    alt: 'Portrait of Debdipttya Das',
  },
  interests: ['Machine Learning', 'Cloud Computing', 'n8n Automation', 'System Design'],
};

export const education = [
  {
    school: 'Techno Main Salt Lake',
    place: 'Kolkata',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA 7.63',
  },
  {
    school: 'National Gems Higher Secondary School',
    place: 'Kolkata',
    degree: 'Higher Secondary (Class XII)',
    period: '2021 – 2023',
    score: 'Score 82%',
  },
  {
    school: 'National Gems Higher Secondary School',
    place: 'Kolkata',
    degree: 'Secondary Examination (Class X)',
    period: '2019 – 2021',
    score: 'Score 89%',
  },
];

export const experience = [
  {
    company: 'NeoSkillZ',
    role: 'Machine Learning with Python Intern',
    place: 'Remote / Kolkata',
    period: 'November 2025 – January 2027 (Expected; Ongoing)',
    points: [
      'Gaining practical exposure to Python programming, ML fundamentals, data preprocessing and model evaluation.',
      'Developing algorithms for feature engineering, data pipelines and predictive modeling on real-world datasets.',
      'Collaborating on integrating machine learning models with web backend pipelines.',
    ],
  },
  {
    company: 'MyJobGrow',
    role: 'Cloud Computing Intern',
    place: 'Remote / Kolkata',
    period: 'November 2025 – January 2027 (Expected; Ongoing)',
    points: [
      'Studying cloud computing fundamentals, service models (IaaS, PaaS, SaaS), infrastructure design and deployment concepts.',
      'Hands-on experience with cloud virtualization, networking, database hosting, and scalable application deployment.',
      'Exploring automated deployment workflows and microservice orchestration in cloud environments.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'plant-disease-ai',
    title: 'AI Plant Disease Detection',
    year: '2026',
    genre: 'AI • AgriTech • Computer Vision',
    logline: 'An intelligent agricultural platform empowering farmers with instant plant disease identification, expert consultations, and prediction history.',
    stack: ['React.js', 'Spring Boot', 'Python', 'Machine Learning', 'MySQL', 'REST API'],
    build: [
      'Developing an agricultural application to support plant disease identification and smart farmer assistance with planned image-classification integration.',
      'Architected farmer and agricultural expert portal workflows, enabling real-time advisory pipelines and automated diagnostic guidance.',
      'Engineered historical prediction tracking, disease treatment advisories, and Spring Boot REST APIs backed by MySQL relational persistence.',
    ],
    features: [
      'Automated plant disease image identification',
      'Farmer and agricultural expert dual portal workflows',
      'Prediction history tracking & analytical records',
      'Disease treatment recommendations & farmer assistance',
      'Spring Boot REST APIs with MySQL database persistence',
    ],
    metrics: [
      { value: 'AI-Driven', label: 'disease prediction' },
      { value: '2 Portals', label: 'farmer & expert workflows' },
      { value: 'Instant', label: 'diagnostic guidance' },
      { value: 'REST API', label: 'Spring Boot backend' },
    ],
    github: 'https://github.com/DebdipttyaDas',
    palette: { from: '#02180d', via: '#0c5c36', to: '#040b07', accent: '#38e892' },
    motif: 'shield',
  },
  {
    id: 'placement-management',
    title: 'Placement Management System',
    year: '2026',
    genre: 'Full-Stack • Enterprise • Automation',
    logline: 'End-to-end recruitment and placement portal with role-based access for Admins, Students, and Companies, featuring automated interview workflows.',
    stack: ['Java', 'JSP', 'Servlets', 'Spring MVC', 'MySQL', 'n8n', 'JavaScript'],
    build: [
      'Developing a comprehensive placement application supporting 3 specialized roles: Administrators, Students, and Company Recruiters.',
      'Implemented company registration, profile verification, drive announcements, and administrator approval workflows.',
      'Designing interview scheduling pipelines and automated candidate notification systems with n8n email automation workflows.',
    ],
    features: [
      '3-Tier Role-Based Access (Admin, Student, Company)',
      'Company verification & recruitment drive management',
      'Student application tracking & eligibility verification',
      'Interview scheduling & status dashboards',
      'n8n automated email dispatch & status notifications',
    ],
    metrics: [
      { value: '3 Roles', label: 'Admin, Student & Company' },
      { value: '100%', label: 'automated email dispatch' },
      { value: 'n8n', label: 'workflow integration' },
      { value: 'Role-Based', label: 'access control' },
    ],
    github: 'https://github.com/DebdipttyaDas',
    palette: { from: '#1c1003', via: '#7c4307', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'fullstack-portfolio-platform',
    title: 'Full-Stack Portfolio & API',
    year: '2026',
    genre: 'Full-Stack • Spring Boot • Microservices',
    logline: 'Production-ready full-stack web application featuring decoupled React frontend, Spring Boot REST backend, MySQL persistence, and cinematic UI.',
    stack: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Postman', 'Tailwind CSS'],
    build: [
      'Designed and implemented full-stack REST architecture decoupling high-performance React UI from Spring Boot Java service layers.',
      'Implemented relational schema normalization in MySQL with JPA/Hibernate repositories and transaction management.',
      'Configured production build pipelines, H2 in-memory testing fallbacks, and resilient API exception handling.',
    ],
    features: [
      'Decoupled REST API architecture',
      'Spring Data JPA with MySQL persistence',
      'Dynamic content management & live updates',
      'High-performance responsive UI with 60 FPS cinematic motion',
    ],
    metrics: [
      { value: 'Spring Boot', label: 'REST backend' },
      { value: 'MySQL', label: 'relational persistence' },
      { value: '<50ms', label: 'API response time' },
      { value: 'Full-Stack', label: 'end-to-end architecture' },
    ],
    github: 'https://github.com/DebdipttyaDas',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon',
    org: 'Govt. of India / AICTE',
    detail: "Participated twice in India's premier national open innovation initiative, solving complex real-world problem statements.",
    laurel: '2× National Participant',
    link: 'https://github.com/DebdipttyaDas',
  },
  {
    id: 'bca-scholar',
    title: 'BCA Academic Distinction',
    org: 'Techno Main Salt Lake',
    detail: 'Maintaining consistent academic performance with CGPA 7.63 across computer science and software development coursework.',
    laurel: 'BCA Candidate',
    link: 'https://github.com/DebdipttyaDas',
  },
  {
    id: 'ml-fellow',
    title: 'Machine Learning Fellow',
    org: 'NeoSkillZ',
    detail: 'Selected for intensive Machine Learning with Python internship focusing on data preprocessing, ML fundamentals, and model evaluation.',
    laurel: 'ML Intern',
    link: 'https://github.com/DebdipttyaDas',
  },
  {
    id: 'cloud-fellow',
    title: 'Cloud Computing Fellow',
    org: 'MyJobGrow',
    detail: 'Comprehensive cloud architecture internship mastering cloud service models (IaaS/PaaS/SaaS), virtualization, and deployment.',
    laurel: 'Cloud Intern',
    link: 'https://github.com/DebdipttyaDas',
  },
  {
    id: 'high-school-merit',
    title: 'High School Distinction',
    org: 'National Gems Higher Secondary School',
    detail: 'Achieved 89% in Class X and 82% in Class XII with scholastic distinction in Science and Mathematics.',
    laurel: 'Merit Scholar',
    link: 'https://github.com/DebdipttyaDas',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NeoSkillZ', name: 'Machine Learning with Python Internship', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'MyJobGrow', name: 'Cloud Computing Internship Certification', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'SIH', name: 'Smart India Hackathon Participation (Twice)', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'Techno Main Salt Lake', name: 'BCA Degree Program (In Progress — CGPA 7.63)', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'Oracle / Java', name: 'Java Full Stack Development & Object-Oriented Programming', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'Spring Boot', name: 'Spring Boot REST APIs & Enterprise Architecture', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'MySQL', name: 'Relational Database Management & SQL Optimization', link: 'https://github.com/DebdipttyaDas' },
  { issuer: 'React.js', name: 'Modern React & Component-Driven Frontend Development', link: 'https://github.com/DebdipttyaDas' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'AI / ML' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js', note: 'ES6+' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    subtitle: 'Enterprise server-side logic & APIs',
    skills: [
      { name: 'Spring Boot', mono: 'Sb', note: 'Enterprise' },
      { name: 'Core Java', mono: 'Jv' },
      { name: 'Spring MVC', mono: 'Sm' },
      { name: 'JSP & Servlets', mono: 'Js' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JSON', mono: 'Jn' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern interfaces & web architecture',
    skills: [
      { name: 'React.js', mono: 'Re', note: 'Primary UI' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & APIs',
    subtitle: 'Relational data & API testing',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Relational' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Postman', mono: 'Pm', note: 'API Testing' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    subtitle: 'Theoretical engineering foundations',
    skills: [
      { name: 'OOP', mono: 'Oo' },
      { name: 'DSA', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
  {
    id: 'tools-emerging',
    title: 'Tools & Emerging Tech',
    subtitle: 'Automation, ML & Cloud deployment',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Eclipse & VS Code', mono: 'Id' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Cloud Computing', mono: 'Cc' },
      { name: 'n8n Automation', mono: 'N8' },
    ],
  },
  {
    id: 'languages-spoken',
    title: 'Spoken Languages',
    subtitle: 'Fluent multilingual communication',
    skills: [
      { name: 'English', mono: 'En', note: 'Professional' },
      { name: 'Bengali', mono: 'Bn', note: 'Native' },
      { name: 'Hindi', mono: 'Hi', note: 'Conversational' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Placement Management System', 'Techno Main Salt Lake', 'Core Java Applications'],
  'Spring Boot': ['Plant Disease Detection System', 'Full-Stack Portfolio REST API'],
  'React.js': ['AI-Based Plant Disease Detection System', 'Cinematic Streaming Portfolio'],
  Python: ['AI-Based Plant Disease Detection System', 'NeoSkillZ ML Internship'],
  'C++': ['DSA & Competitive Problem Solving'],
  MySQL: ['Placement Management System', 'Plant Disease Detection System', 'Relational Schemas'],
  'REST APIs': ['AI-Based Plant Disease Detection', 'Spring Boot Backend', 'Postman Testing'],
  'JSP & Servlets': ['Placement Management System Enterprise Architecture'],
  'Cloud Computing': ['MyJobGrow Cloud Internship'],
  'Machine Learning': ['NeoSkillZ ML Internship', 'Plant Disease Detection System'],
  'n8n Automation': ['Placement Management System automated email workflows'],
  'Smart India Hackathon': ['2× National SIH Innovation Participant'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic Foundation',
    period: '2019 – 2023',
    synopsis: 'Formative schooling at National Gems Higher Secondary School, Kolkata — building mathematical rigor and logical thinking.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Scholastic Start',
        description: 'Completed Secondary Education (Class X) with 89% and Higher Secondary (Class XII) with 82% at National Gems Higher Secondary School.',
        tags: ['Class X: 89%', 'Class XII: 82%', 'Kolkata'],
        runtime: '2019 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Entering Computer Science',
    period: '2023 – Present',
    synopsis: 'Bachelor of Computer Applications (BCA) at Techno Main Salt Lake — mastering Java, Spring Boot, React, and Data Structures.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The BCA Journey',
        description: 'Undergraduate study in Computer Applications at Techno Main Salt Lake, maintaining a solid CGPA of 7.63 across core CS subjects.',
        tags: ['BCA', 'Techno Main Salt Lake', 'CGPA 7.63'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Core CS Deep Dive',
        description: 'Mastered Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Operating Systems.',
        tags: ['Core Java', 'OOP', 'DSA', 'DBMS', 'OS'],
        runtime: 'Academic Core',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Hackathon Crucible',
    period: '2024 – 2025',
    synopsis: 'Pushing boundaries under pressure at the national level in the Smart India Hackathon.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Smart India Hackathon',
        description: 'Participated twice in the prestigious Smart India Hackathon (SIH), collaborating in high-intensity sprints to build scalable tech solutions.',
        tags: ['SIH', 'Hackathon', 'National Stage', 'Problem Solving'],
        runtime: '2× Participant',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'The Industry Internships',
    period: 'Nov 2025 – Present',
    synopsis: 'Expanding from web development into Machine Learning and Cloud Computing through professional internships.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Machine Learning Intern',
        description: 'Machine Learning with Python Intern at NeoSkillZ — hands-on data preprocessing, predictive modeling, and model evaluation.',
        tags: ['NeoSkillZ', 'Python', 'Machine Learning', 'Data Preprocessing'],
        runtime: 'Nov 2025 – Ongoing',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Cloud Computing Intern',
        description: 'Cloud Computing Intern at MyJobGrow — studying cloud architecture, virtualization, service models (IaaS/PaaS/SaaS), and deployment.',
        tags: ['MyJobGrow', 'Cloud Computing', 'Deployment', 'Virtualization'],
        runtime: 'Nov 2025 – Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Designing and engineering real-world software applications: AgriTech AI, enterprise placement workflows, and full-stack platforms.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The AgriTech Innovator',
        description: 'AI-Based Plant Disease Detection System — assisting farmers with image-based disease prediction and expert portals.',
        tags: ['React.js', 'Spring Boot', 'Python', 'AI / ML'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S05 E02',
        title: 'The Enterprise Developer',
        description: 'Placement Management System — 3-tier role-based access for Admin, Students, and Companies with automated n8n notifications.',
        tags: ['Java', 'JSP / Servlets', 'MySQL', 'n8n'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Targeting software engineering roles and building scalable cloud-native web systems.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Milestone',
        description: 'Building microservices, cloud-native deployments, and distributed software systems.',
        tags: ['Full Stack', 'Cloud', 'System Design', 'Spring Boot'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java & Spring Boot', detail: 'Enterprise backend • Core Java • REST APIs', palette: amber },
  { label: 'The AI Original', title: 'Plant Disease AI', detail: 'AgriTech • Image classification & farmer portal', palette: jade },
  { label: 'National stage', title: 'Smart India Hackathon', detail: '2× National Participant (SIH)', palette: crimson },
  { label: 'Enterprise system', title: 'Placement Portal', detail: 'Role-based access • n8n email automation', palette: amber },
  { label: 'ML credential', title: 'NeoSkillZ ML Fellow', detail: 'Machine Learning with Python Intern', palette: ocean },
  { label: 'Cloud credential', title: 'MyJobGrow Cloud Fellow', detail: 'Cloud computing & scalable deployment', palette: violet },
  { label: 'Undergraduate degree', title: 'BCA (2023–2027)', detail: 'Techno Main Salt Lake • CGPA 7.63', palette: jade },
  { label: 'Frontend stack', title: 'React.js & Modern Web', detail: 'Component architecture • Responsive UI', palette: crimson },
  { label: 'Database & testing', title: 'MySQL & Postman', detail: 'Relational design • REST API testing', palette: ocean },
  { label: 'Location & availability', title: 'Kolkata, India', detail: 'Open for Software Engineering opportunities', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · Techno Main Salt Lake',
    lines: ['Techno Main Salt Lake, Kolkata', '2023 – 2027 (Expected) · CGPA 7.63'],
    chips: ['CGPA 7.63', 'BCA', 'Kolkata'],
  },
  {
    kicker: 'Primary Stack',
    title: 'Java & Spring Boot.',
    lines: ['React.js, JavaScript, HTML5, CSS3', 'Spring Boot, MySQL, REST APIs, JSON, Postman'],
    chips: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
  },
  {
    kicker: 'Hackathons',
    title: 'Smart India Hackathon',
    lines: ['Participated twice in the prestigious Smart India Hackathon (SIH)', 'Building real-world software solutions under high-intensity sprints'],
    chips: ['2× SIH Participant', 'National Stage'],
  },
  {
    kicker: 'Internships',
    title: 'ML & Cloud Fellowships',
    lines: ['NeoSkillZ — Machine Learning with Python Intern', 'MyJobGrow — Cloud Computing Intern'],
    chips: ['Machine Learning', 'Cloud Computing', 'Python', 'Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Featured Productions',
    lines: ['AI-Based Plant Disease Detection System — React, Spring Boot, Python, ML', 'Placement Management System — Java, Servlets, MySQL, n8n Automation'],
  },
  {
    kicker: 'CS Core',
    title: 'Engineering Fundamentals',
    lines: ['OOP · DSA · DBMS · Operating Systems · Computer Networks'],
    chips: ['OOP', 'DSA', 'DBMS', 'OS', 'Networks'],
  },
];

export type ProfileId = 'debdipttya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'debdipttya',
    name: 'Debdipttya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, projects, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
