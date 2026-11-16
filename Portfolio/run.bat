@echo off
echo ===================================================
echo Starting Debdipttya Das Portfolio Full-Stack App
echo ===================================================

set "JAVA_EXE=C:\Program Files\Java\jdk-17\bin\java.exe"
if not exist "%JAVA_EXE%" set "JAVA_EXE=java"

echo [1/2] Launching Spring Boot Backend (Port 8080)...
start "Portfolio-Backend" cmd /k "cd /d "%~dp0backend" && "%JAVA_EXE%" -Dspring.profiles.active=h2 -jar target\portfolio-app-1.0.0.jar"

echo [2/2] Launching React + Vite Frontend (Port 5173)...
start "Portfolio-Frontend" cmd /k "cd /d "%~dp0frontend" && npm run preview"

echo Waiting for servers to initialize...
ping -n 7 127.0.0.1 >nul

echo Opening Portfolio in your default web browser...
start http://localhost:5173

echo ===================================================
echo App is now running!
echo Backend API: http://localhost:8080/api/personal-info
echo Frontend:    http://localhost:5173
echo ===================================================
