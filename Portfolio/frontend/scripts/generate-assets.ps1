Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Admin\Downloads\My_Portfolio\Portfolio\frontend\pic_perfect.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$outDir = "C:\Users\Admin\Downloads\My_Portfolio\Portfolio\frontend\public\assets"

function Resize-Image($srcImg, $targetW, $targetH) {
    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($srcImg, 0, 0, $targetW, $targetH)
    $g.Dispose()
    return $bmp
}

# 1. Scaled portraits: 1100, 720, 420
foreach ($w in @(1100, 720, 420)) {
    $h = [int][Math]::Round($w * ($src.Height / $src.Width))
    $resized = Resize-Image $src $w $h
    $resized.Save("$outDir\portrait-$w.png", [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Saved portrait-$w.png ($w x $h)"
    $resized.Dispose()
}

# Full size portrait
$src.Save("$outDir\portrait-debdipttya.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved portrait-debdipttya.png"

# Full size JPG on dark background
$jpgBmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gJpg = [System.Drawing.Graphics]::FromImage($jpgBmp)
$gJpg.Clear([System.Drawing.Color]::FromArgb(7, 7, 10))
$gJpg.DrawImage($src, 0, 0, $src.Width, $src.Height)
$gJpg.Dispose()
$jpgBmp.Save("$outDir\portrait-debdipttya.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$jpgBmp.Dispose()
Write-Host "Saved portrait-debdipttya.jpg"

# 2. Avatar (280x280 square headshot)
$avatarBmp = New-Object System.Drawing.Bitmap(280, 280, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gAv = [System.Drawing.Graphics]::FromImage($avatarBmp)
$gAv.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gAv.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gAv.Clear([System.Drawing.Color]::Transparent)

# Crop rectangle: x=75, y=45, size=240
$srcRect = New-Object System.Drawing.Rectangle(75, 45, 240, 240)
$destRect = New-Object System.Drawing.Rectangle(0, 0, 280, 280)
$gAv.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gAv.Dispose()
$avatarBmp.Save("$outDir\avatar-debdipttya.png", [System.Drawing.Imaging.ImageFormat]::Png)
$avatarBmp.Dispose()
Write-Host "Saved avatar-debdipttya.png"

# 3. OG Social Share Image (1200x630)
$og = New-Object System.Drawing.Bitmap(1200, 630, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$gOg = [System.Drawing.Graphics]::FromImage($og)
$gOg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gOg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gOg.Clear([System.Drawing.Color]::FromArgb(7, 7, 10))

# Crimson glow on right
$brushGlow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 160, 15, 30))
$gOg.FillEllipse($brushGlow, 700, 0, 500, 630)
$brushGlow.Dispose()

# Draw portrait on right
$pH = 610
$pW = [int][Math]::Round($pH * ($src.Width / $src.Height))
$pX = 1200 - $pW - 40
$pY = 630 - $pH
$gOg.DrawImage($src, $pX, $pY, $pW, $pH)

# Left text
$fontTitle = New-Object System.Drawing.Font("Impact", 78, [System.Drawing.FontStyle]::Bold)
$fontSeries = New-Object System.Drawing.Font("Arial", 22, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)

$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244, 241, 236))
$brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 61, 90))
$brushMist = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(167, 166, 173))

$gOg.DrawString("DEBDIPTTYA", $fontTitle, $brushWhite, 70, 200)
$gOg.DrawString("T H E   S E R I E S", $fontSeries, $brushRed, 75, 310)
$gOg.DrawString("JAVA FULL STACK DEVELOPER  *  REACT.JS  *  SPRING BOOT", $fontSub, $brushMist, 75, 370)

$fontTitle.Dispose()
$fontSeries.Dispose()
$fontSub.Dispose()
$brushWhite.Dispose()
$brushRed.Dispose()
$brushMist.Dispose()
$gOg.Dispose()

$og.Save("$outDir\og-image.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$og.Dispose()
Write-Host "Saved og-image.jpg"

$src.Dispose()
Write-Host "DONE_ALL_ASSETS"
