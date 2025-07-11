# ------------------------------------------------------------
# Définition des micro-services backend
# ------------------------------------------------------------
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

    mvn clean install -DskipTests
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build Maven échoué pour $($project.Name). Abandon." -ForegroundColor Red
        exit 1
    }

    docker build -t $project.Image .
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Échec du docker build pour $($project.Name). Abandon." -ForegroundColor Red
        exit 1
    }

    Write-Host ""
    Write-Host "============================================" -ForegroundColor DarkGray
    Write-Host "Image pour $($project.Name) créée avec succès !" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor DarkGray
    Write-Host ""
}

Write-Host "Toutes les images backend sont construites !" -ForegroundColor Green
Write-Host ""

# ------------------------------------------------------------
# webapp-frontend
# ------------------------------------------------------------
$frontendPath = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\webApp-frontend"
Write-Host "=== Building webapp-frontend ===" -ForegroundColor Cyan

Set-Location $frontendPath

docker build -t jirawah/webapp-frontend:latest .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Échec du docker build pour webapp-frontend. Abandon." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host "Image pour webapp-frontend créée avec succès !" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host ""
Write-Host "Toutes les builds (backend + frontend) sont terminées !" -ForegroundColor Green
Write-Host ""

# ------------------------------------------------------------
# Lancement de docker-compose en mode production
# ------------------------------------------------------------
$composePath = "C:\Users\StagiaireDEV\Desktop\Projets\HealthCareProto\docker-compose\prod"
Write-Host "=== Passage dans le dossier docker-compose/prod ===" -ForegroundColor Cyan
Set-Location $composePath

Write-Host "=== Lancement de docker-compose up -d ===" -ForegroundColor Cyan
docker-compose up -d
if ($LASTEXITCODE -ne 0) {
    Write-Host "Échec du lancement de docker-compose. Vérifiez votre configuration." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host "docker-compose a démarré les conteneurs en arrière-plan." -ForegroundColor Green
Write-Host "============================================" -ForegroundColor DarkGray
Write-Host ""
Write-Host "Script terminé avec succès !" -ForegroundColor Green
