# ==========================================
# FireProject1 Local Server Launcher
# ==========================================



Write-Host "================================="
Write-Host " FireProject1 Local Development:Sever-Launcher"
Write-Host " by C. J. Rao - ChintaLabs"
Write-Host "================================="
Write-Host "Opening:"
Write-Host $projectFolder
Write-Host ""
Write-Host "Server starting..."
Write-Host ""

$projectFolder = "E:\DevelopmentSpace\Projects\Firebase\FireProject1\public"

$serverScript = "E:\DevelopmentSpace\DevToolsAndLibraries\PowerShell\SimpleHttpServer.ps1"


Set-Location $projectFolder


# powershell -ExecutionPolicy Bypass -File $serverScript
& $serverScript

