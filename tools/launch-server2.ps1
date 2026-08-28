# ==========================================
# FireProject1 Local Server Launcher 2.0
# ChintaLabs
# ==========================================


$projectFolder =
"E:\DevelopmentSpace\Projects\Firebase\FireProject1\public"


$serverScript =
"E:\DevelopmentSpace\DevToolsAndLibraries\PowerShell\SimpleHttpServer2.0.ps1"



Write-Host ""
Write-Host "================================="
Write-Host " FireProject1 Local Development"
Write-Host " Server Launcher 2.0"
Write-Host " ChintaLabs"
Write-Host "================================="
Write-Host ""

Write-Host "Project:"
Write-Host $projectFolder

Write-Host ""

Set-Location $projectFolder


Write-Host "Starting Server 2.0..."
Write-Host ""


& $serverScript -Port 8000