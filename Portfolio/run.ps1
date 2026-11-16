Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "Starting Debdipttya Das Portfolio Full-Stack App" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$javaExe = "C:\Program Files\Java\jdk-17\bin\java.exe"
if (-not (Test-Path $javaExe)) { $javaExe = "java" }

Write-Host "`n[1/2] Launching Spring Boot Backend (Port 8080)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root\backend'; & '$javaExe' -Dspring.profiles.active=h2 -jar target\portfolio-app-1.0.0.jar"

Write-Host "[2/2] Launching React + Vite Frontend (Port 5173)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$root\frontend'; npm run preview"

Write-Host "`nWaiting for servers to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 6

Write-Host "Opening Portfolio in default browser (http://localhost:5173)..." -ForegroundColor Magenta
Start-Process "http://localhost:5173"

Write-Host "`nApp successfully launched!" -ForegroundColor Green
Write-Host "Backend API: http://localhost:8080/api/personal-info"
Write-Host "Frontend:    http://localhost:5173"

