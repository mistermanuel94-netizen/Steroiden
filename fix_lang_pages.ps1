Set-Location "c:\Users\CTech Electronics\Desktop\Steroid\Steroiden\astro-steroid"

$files = @(
  "src\pages\[lang]\[pageSlug].astro",
  "src\pages\[lang]\[pageSlug]\[slug].astro",
  "src\pages\[lang]\blog\[slug].astro",
  "src\pages\[lang]\blog\index.astro",
  "src\pages\[lang]\blog\category\[category].astro",
  "src\pages\[lang]\index.astro"
)

$totalChanges = 0

foreach ($f in $files) {
  $fullPath = Join-Path $PWD $f
  if (Test-Path -LiteralPath $fullPath) {
    $content = [IO.File]::ReadAllText($fullPath, [Text.Encoding]::UTF8)
    $changed = $false

    # 1. Hero title
    $old = 'Buy Research Peptides UK"'
    $new = 'Buy Steroids UK"'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 2. Hero description - replace the whole long string
    $old = 'Explore our complete collection of premium research peptides. From GLP-1 agonists like Semaglutide and Tirzepatide to recovery peptides like BPC-157, all compounds are HPLC-verified'
    $new = 'Explore our complete collection of premium anabolic steroids. Testosterone, Winstrol, Deca-Durabolin and more.'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 3. Showing count
    $old = 'Showing {count} research peptides'
    $new = 'Showing {count} steroids'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 4. SEO title
    $old = 'Buy Research Peptides UK - Premium Quality Guaranteed'
    $new = 'Buy Steroids UK - Premium Quality Guaranteed'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 5. SEO lead
    $old = 'premium research-grade peptides in the United Kingdom. Our extensive catalogue includes popular compounds such as Semaglutide, Tirzepatide, BPC-157, TB-500, Melanotan 2, and many more specialised peptides for scientific research.'
    $new = 'premium anabolic steroids in the UK and Europe. Testosterone, Winstrol, Deca-Durabolin, Anavar, and Trenbolone with guaranteed authenticity.'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 6. SEO body
    $old = 'Every peptide we supply undergoes rigorous HPLC testing'
    $new = 'Every product we supply undergoes rigorous lab testing'
    if ($content.Contains($old)) { $content = $content.Replace($old, $new); $changed = $true; $totalChanges++ }

    # 7. Clean up remaining old description fragments
    $old = "with `u{2265}99% purity and include Certificates of Analysis.`""
    $new = ""
    # Skip this - too tricky with special chars

    if ($changed) {
      [IO.File]::WriteAllText($fullPath, $content, (New-Object System.Text.UTF8Encoding $true))
      Write-Host "Fixed: $f ($totalChanges total changes so far)"
    } else {
      Write-Host "No changes: $f"
    }
  } else {
    Write-Host "NOT FOUND: $f"
  }
}

Write-Host "`nTotal replacements: $totalChanges"
