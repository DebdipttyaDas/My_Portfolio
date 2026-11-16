═══════════════════════════════════════════════════════════════════════════════
              MOVING YOUR PORTFOLIO PROJECT TO D:\PROJECT-WORK\Portfolio
                          COMPLETE ORGANIZATION GUIDE
═══════════════════════════════════════════════════════════════════════════════

CURRENT LOCATION: C:\Users\Admin\.claude\projects\D--PROJECT-WORK-Portfolio\memory\
NEW LOCATION: D:\PROJECT-WORK\Portfolio

This guide will help you properly organize all your portfolio files in the final location.

═══════════════════════════════════════════════════════════════════════════════
📁 FINAL PROJECT STRUCTURE
═══════════════════════════════════════════════════════════════════════════════

D:\PROJECT-WORK\Portfolio\
│
├── README.md (Copy from README_template.md)
├── SETUP_GUIDE.md (Copy from DEBDIPTTYA_BUILD_GUIDE.md)
├── ANIMATIONS_GUIDE.md (Copy from ANIMATIONS_ENHANCED.md)
│
├── docs/
│   ├── MASTER_INDEX.md
│   ├── QUICK_START.md
│   ├── ANIMATIONS.md
│   ├── DEPLOYMENT.md
│   ├── TROUBLESHOOTING.md
│   └── API_REFERENCE.md
│
├── backend/
│   ├── pom.xml
│   ├── src/
│   │   └── main/
│   │       ├── java/com/portfolio/
│   │       │   ├── PortfolioApplication.java
│   │       │   ├── controller/
│   │       │   │   └── ApiController.java
│   │       │   ├── entity/
│   │       │   │   ├── PersonalInfo.java
│   │       │   │   └── Project.java
│   │       │   └── repository/
│   │       │       ├── PersonalInfoRepository.java
│   │       │       └── ProjectRepository.java
│   │       └── resources/
│   │           ├── application.yml
│   │           └── data.sql
│   └── target/
│       └── portfolio-app-1.0.0.jar
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── api/
│   │   │   └── apiClient.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── config.js
│   │   ├── main.jsx
│   │   └── index.html
│   ├── node_modules/
│   └── dist/
│
├── database/
│   ├── init.sql
│   └── schema.sql
│
└── .gitignore

═══════════════════════════════════════════════════════════════════════════════
🚀 STEP-BY-STEP MIGRATION GUIDE
═══════════════════════════════════════════════════════════════════════════════

STEP 1: CREATE PROJECT DIRECTORY STRUCTURE
───────────────────────────────────────────

Open PowerShell and run:

# Create main directory
mkdir D:\PROJECT-WORK\Portfolio
cd D:\PROJECT-WORK\Portfolio

# Create subdirectories
mkdir backend
mkdir frontend
mkdir database
mkdir docs

# Create backend Java structure
mkdir backend\src\main\java\com\portfolio\controller
mkdir backend\src\main\java\com\portfolio\entity
mkdir backend\src\main\java\com\portfolio\repository
mkdir backend\src\main\resources

# Create frontend structure
mkdir frontend\src\components
mkdir frontend\src\api
mkdir frontend\public

# Create docs
mkdir docs

Verify:
dir D:\PROJECT-WORK\Portfolio

Should show: backend, frontend, database, docs folders

═══════════════════════════════════════════════════════════════════════════════
STEP 2: COPY DOCUMENTATION FILES
─────────────────────────────────

From: C:\Users\Admin\.claude\projects\D--PROJECT-WORK-Portfolio\memory\
To: D:\PROJECT-WORK\Portfolio\

Copy to root folder:
✅ DEBDIPTTYA_BUILD_GUIDE.md → D:\PROJECT-WORK\Portfolio\SETUP_GUIDE.md
✅ ANIMATIONS_ENHANCED.md → D:\PROJECT-WORK\Portfolio\ANIMATIONS_GUIDE.md
✅ README_template.md → D:\PROJECT-WORK\Portfolio\README.md

Copy to docs folder:
✅ MASTER_INDEX.md → D:\PROJECT-WORK\Portfolio\docs\
✅ quick_start_roadmap.md → D:\PROJECT-WORK\Portfolio\docs\QUICK_START.md
✅ ANIMATIONS_QUICK_START.md → D:\PROJECT-WORK\Portfolio\docs\ANIMATIONS.md
✅ components_and_deployment.md → D:\PROJECT-WORK\Portfolio\docs\DEPLOYMENT.md
✅ implementation_summary.md → D:\PROJECT-WORK\Portfolio\docs\ARCHITECTURE.md

═══════════════════════════════════════════════════════════════════════════════
STEP 3: CREATE BACKEND FILES
─────────────────────────────

Copy/Create pom.xml:
Location: D:\PROJECT-WORK\Portfolio\backend\pom.xml
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 1

Create application.yml:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\resources\application.yml
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 2

Create PortfolioApplication.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\PortfolioApplication.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 8

Create PersonalInfo.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\entity\PersonalInfo.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 3

Create Project.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\entity\Project.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 4

Create PersonalInfoRepository.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\repository\PersonalInfoRepository.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 5

Create ProjectRepository.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\repository\ProjectRepository.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 6

Create ApiController.java:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\java\com\portfolio\controller\ApiController.java
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 7

Create data.sql:
Location: D:\PROJECT-WORK\Portfolio\backend\src\main\resources\data.sql
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 9

═══════════════════════════════════════════════════════════════════════════════
STEP 4: CREATE FRONTEND FILES
──────────────────────────────

Create package.json:
Location: D:\PROJECT-WORK\Portfolio\frontend\package.json
Content: From ANIMATIONS_ENHANCED.md - Updated package.json

Create vite.config.js:
Location: D:\PROJECT-WORK\Portfolio\frontend\vite.config.js
Content: From DEBDIPTTYA_BUILD_GUIDE.md

Create index.html:
Location: D:\PROJECT-WORK\Portfolio\frontend\index.html
Content: From ANIMATIONS_ENHANCED.md - FILE 8

Create main.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\main.jsx
Content: From ANIMATIONS_ENHANCED.md - FILE 9

Create config.js:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\config.js
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 10 (Updated with your info)

Create apiClient.js:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\api\apiClient.js
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 11

Create App.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\App.jsx
Content: From ANIMATIONS_ENHANCED.md - Updated App.jsx with animations

Create App.css:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\App.css
Content: From ANIMATIONS_ENHANCED.md - Updated App.css with animations

Create Header.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\components\Header.jsx
Content: From ANIMATIONS_ENHANCED.md - Updated Header.jsx with animations

Create About.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\components\About.jsx
Content: From ANIMATIONS_ENHANCED.md - Updated About.jsx with animations

Create Projects.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\components\Projects.jsx
Content: From ANIMATIONS_ENHANCED.md - Updated Projects.jsx with animations

Create Contact.jsx:
Location: D:\PROJECT-WORK\Portfolio\frontend\src\components\Contact.jsx
Content: From DEBDIPTTYA_BUILD_GUIDE.md - FILE 6

═══════════════════════════════════════════════════════════════════════════════
STEP 5: CREATE DATABASE FILES
──────────────────────────────

Create schema.sql:
Location: D:\PROJECT-WORK\Portfolio\database\schema.sql

Content:

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
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

Create init.sql:
Location: D:\PROJECT-WORK\Portfolio\database\init.sql

Content: (Copy from DEBDIPTTYA_BUILD_GUIDE.md - data.sql content)

═══════════════════════════════════════════════════════════════════════════════
STEP 6: CREATE .gitignore
──────────────────────────

Location: D:\PROJECT-WORK\Portfolio\.gitignore

Content:

# Node modules
frontend/node_modules/
frontend/dist/

# Backend build
backend/target/
backend/.settings/
backend/.classpath
backend/.project

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Environment
.env
.env.local
.DS_Store

# Logs
logs/
*.log
npm-debug.log*

═══════════════════════════════════════════════════════════════════════════════
STEP 7: INITIALIZE GIT REPOSITORY (Optional)
─────────────────────────────────────────────

cd D:\PROJECT-WORK\Portfolio

git init
git add .
git commit -m "Initial portfolio commit"

═══════════════════════════════════════════════════════════════════════════════
STEP 8: BUILD AND RUN
─────────────────────

BUILD BACKEND:
$ cd D:\PROJECT-WORK\Portfolio\backend
$ mvn clean install

BUILD FRONTEND:
$ cd D:\PROJECT-WORK\Portfolio\frontend
$ npm install

RUN BACKEND (Terminal 1):
$ cd D:\PROJECT-WORK\Portfolio\backend
$ java -jar target/portfolio-app-1.0.0.jar

RUN FRONTEND (Terminal 2):
$ cd D:\PROJECT-WORK\Portfolio\frontend
$ npm run dev

VERIFY:
→ Backend: http://localhost:8080/api/personal-info
→ Frontend: http://localhost:5173

═══════════════════════════════════════════════════════════════════════════════
📋 COMPLETE FILE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

ROOT FOLDER (D:\PROJECT-WORK\Portfolio\):
☑ README.md
☑ SETUP_GUIDE.md
☑ ANIMATIONS_GUIDE.md
☑ .gitignore

DOCS FOLDER:
☑ MASTER_INDEX.md
☑ QUICK_START.md
☑ ANIMATIONS.md
☑ DEPLOYMENT.md
☑ ARCHITECTURE.md

BACKEND FOLDER:
☑ pom.xml
☑ src/main/java/com/portfolio/PortfolioApplication.java
☑ src/main/java/com/portfolio/entity/PersonalInfo.java
☑ src/main/java/com/portfolio/entity/Project.java
☑ src/main/java/com/portfolio/repository/PersonalInfoRepository.java
☑ src/main/java/com/portfolio/repository/ProjectRepository.java
☑ src/main/java/com/portfolio/controller/ApiController.java
☑ src/main/resources/application.yml
☑ src/main/resources/data.sql

FRONTEND FOLDER:
☑ package.json
☑ vite.config.js
☑ index.html
☑ src/main.jsx
☑ src/App.jsx
☑ src/App.css
☑ src/config.js
☑ src/api/apiClient.js
☑ src/components/Header.jsx
☑ src/components/About.jsx
☑ src/components/Projects.jsx
☑ src/components/Contact.jsx

DATABASE FOLDER:
☑ schema.sql
☑ init.sql

═══════════════════════════════════════════════════════════════════════════════
🎯 QUICK CHECKLIST FOR MIGRATION
═══════════════════════════════════════════════════════════════════════════════

BEFORE YOU START:
☑ Backup existing files (if any)
☑ Have all documentation files ready
☑ Have admin access to create folders

DURING MIGRATION:
☑ Create all directories
☑ Copy documentation
☑ Create all backend files
☑ Create all frontend files
☑ Create database files
☑ Create .gitignore

AFTER MIGRATION:
☑ Verify all files in correct locations
☑ Run: mvn clean install (backend)
☑ Run: npm install (frontend)
☑ Run: npm run dev (frontend)
☑ Run: java -jar target/portfolio-app-1.0.0.jar (backend)
☑ Test: http://localhost:8080/api/personal-info
☑ Test: http://localhost:5173

═══════════════════════════════════════════════════════════════════════════════
✅ YOUR PROJECT IS NOW PROPERLY ORGANIZED
═══════════════════════════════════════════════════════════════════════════════

Location: D:\PROJECT-WORK\Portfolio
Status: Ready to build
Files: All organized
Documentation: Complete
Code: Ready to use

NEXT STEPS:
1. Follow SETUP_GUIDE.md (in project root)
2. Build backend
3. Build frontend
4. Run both
5. See portfolio live!

═══════════════════════════════════════════════════════════════════════════════
