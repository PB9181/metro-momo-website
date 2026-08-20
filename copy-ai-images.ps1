# Copy AI-generated placeholder images into the public folder
$source = "C:\Users\bhatt\.cursor\projects\c-Users-bhatt-OneDrive-Desktop-Fewa-Resto-App\assets"
$destination = "$PSScriptRoot\public"

$images = @(
    "hero-momos.png",
    "about-community.png",
    "model-stall.png",
    "model-kiosk.png",
    "model-restaurant.png",
    "jhol-momo.png",
    "menu-fried-momo.png"
)

New-Item -ItemType Directory -Force -Path $destination | Out-Null

foreach ($image in $images) {
    $sourcePath = Join-Path $source $image
    $destPath = Join-Path $destination $image
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "Copied $image"
    } else {
        Write-Host "Missing: $image (it may not have been generated in this session)" -ForegroundColor Yellow
    }
}

Write-Host "Done. Images are now in public/" -ForegroundColor Green
