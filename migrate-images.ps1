# PowerShell script to migrate images from Sample Work folder
# Run this from your project root: C:\Users\efra\Documents\efra_repos\site

param(
    [string]$SourcePath = "C:\Users\efra\Documents\Sample Work 2021-2024",
    [string]$DestPath = ".\design"
)

Write-Host "Migrating images from $SourcePath to $DestPath" -ForegroundColor Cyan

# Create category folders if they don't exist
$categories = @("artwork", "posters", "brand-identity", "ui-design", "misc")
foreach ($cat in $categories) {
    $path = Join-Path $DestPath $cat
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "Created folder: $cat" -ForegroundColor Green
    }
}

# Copy all images
Write-Host "`nCopying images..." -ForegroundColor Yellow
$imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp")
$copiedFiles = @()

foreach ($ext in $imageExtensions) {
    $files = Get-ChildItem -Path $SourcePath -Filter $ext -Recurse
    foreach ($file in $files) {
        # Copy to misc folder by default (you can organize later)
        $destFile = Join-Path (Join-Path $DestPath "misc") $file.Name
        Copy-Item $file.FullName -Destination $destFile -Force
        $copiedFiles += $file.Name
        Write-Host "  Copied: $($file.Name)" -ForegroundColor Gray
    }
}

Write-Host "`nMigration complete!" -ForegroundColor Green
Write-Host "Total images copied: $($copiedFiles.Count)" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Organize images into category folders (artwork, posters, brand-identity, ui-design)" -ForegroundColor White
Write-Host "2. Update js/design-data.js with image metadata" -ForegroundColor White
Write-Host "3. See the list below for all copied files:" -ForegroundColor White
Write-Host ""

# List all copied files
$copiedFiles | Sort-Object | ForEach-Object { Write-Host "  - $_" -ForegroundColor DarkGray }
