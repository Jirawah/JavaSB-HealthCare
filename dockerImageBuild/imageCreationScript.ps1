$projects = @(
    @{ Name = "configServer"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\configServer"; Image = "jirawah/configserver:latest" },
    @{ Name = "eurekaServer"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\eurekaServer"; Image = "jirawah/eurekaserver:latest" },
    @{ Name = "msPatient"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\msPatient"; Image = "jirawah/mspatient:latest" },
    @{ Name = "webApp"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\webApp"; Image = "jirawah/webapp:latest" },
    @{ Name = "msNote"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\msNote"; Image = "jirawah/msnote:latest" },
    @{ Name = "msScore"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\msScore"; Image = "jirawah/msscore:latest" }
)

foreach ($project in $projects) {
    Write-Host "=== Building $($project.Name) ===" -ForegroundColor Cyan
    Set-Location $project.Path

    # Build Maven
    mvn clean install -DskipTests
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed for $($project.Name). Exiting..." -ForegroundColor Red
        exit 1
    }

    # Build Docker image
    docker build -t $project.Image .
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Docker build failed for $($project.Name). Exiting..." -ForegroundColor Red
        exit 1
    }

    Write-Host ""
    Write-Host "============================================" -ForegroundColor DarkGray
    Write-Host "Image for $($project.Name) created successfully!" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor DarkGray
    Write-Host ""
}

Write-Host "All backend builds completed successfully!" -ForegroundColor Green
Write-Host ""

# ------------------------------------------------------------
# webapp-frontend
# ------------------------------------------------------------
$frontendPath = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\webApp-frontend"
Write-Host "=== Building webapp-frontend ===" -ForegroundColor Cyan

Set-Location $frontendPath

docker build -t jirawah/webapp-frontend:latest .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker build failed for webapp-frontend. Exiting..." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host "Image for webapp-frontend created successfully!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host ""
Write-Host "All builds (backend + frontend) completed successfully!" -ForegroundColor Green

