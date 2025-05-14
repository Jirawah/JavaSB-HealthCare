$projects = @(
    @{ Name = "configServer"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\configServer"; Image = "jirawah/configserver:latest" },
    @{ Name = "eurekaServer"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\eurekaServer"; Image = "jirawah/eurekaserver:latest" },
    @{ Name = "msPatient"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\msPatient"; Image = "jirawah/mspatient:latest" },
    @{ Name = "webApp"; Path = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\webApp"; Image = "jirawah/webapp:latest" }
)

foreach ($project in $projects) {
    Write-Host "=== Building $($project.Name) ===" -ForegroundColor Cyan
    Set-Location $project.Path

    mvn clean install -DskipTests
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed for $($project.Name). Exiting..." -ForegroundColor Red
        exit 1
    }

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

Write-Host "All builds completed successfully!" -ForegroundColor Green
