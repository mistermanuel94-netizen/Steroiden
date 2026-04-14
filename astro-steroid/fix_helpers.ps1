$f = "C:\Users\CTech Electronics\Desktop\Steroid\Steroiden\astro-steroid\src\i18n\translations.ts"
$content = [IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$before = ([regex]::Matches($content, '[Pp]eptid')).Count
Write-Host "Before: $before"

# Fix helper function content
# These are in translation map values that still say peptid
$content = $content -creplace "'Schlafpeptid'", "'Schlafsteroid'"
$content = $content -creplace "'Kupferpeptid'", "'Kupfersteroid'"
$content = $content -creplace "'Freisetzungspeptid'", "'Freisetzungssteroid'"
$content = $content -creplace "'Peptidmenge'", "'Steroidmenge'"
$content = $content -creplace "'Peptidgehalt'", "'Steroidgehalt'"
$content = $content -creplace "'Peptidabbau'", "'Steroidabbau'"
$content = $content -creplace "'Heilungspeptid'", "'Heilungssteroid'"
$content = $content -creplace "'Erholungspeptid'", "'Erholungssteroid'"
$content = $content -creplace "'Forschungspeptid'", "'Forschungssteroid'"

# Spanish translations
$content = $content -creplace [regex]::Escape("Reconstitución de Péptidos"), "Reconstitución de Esteroides"
$content = $content -creplace [regex]::Escape("Péptido para Pérdida de Grasa"), "Esteroide para Pérdida de Grasa"
$content = $content -creplace [regex]::Escape("Péptido del Sueño"), "Esteroide del Sueño"
$content = $content -creplace [regex]::Escape("Péptido de Cobre"), "Esteroide de Cobre"
$content = $content -creplace [regex]::Escape("Péptido Liberador"), "Esteroide Liberador"

# Russian translations  
$content = $content -creplace [regex]::Escape("Восстановление пептидов"), "Восстановление стероидов"
$content = $content -creplace [regex]::Escape("Пептид для сжигания жира"), "Стероид для сжигания жира"
$content = $content -creplace [regex]::Escape("Пептид сна"), "Стероид сна"
$content = $content -creplace [regex]::Escape("Медный пептид"), "Медный стероид"
$content = $content -creplace [regex]::Escape("Высвобождающий пептид"), "Высвобождающий стероид"

# Fix German product descriptions in helper functions
$content = $content -creplace "Forschungspeptid", "Premium-Steroid"

# Fix pentadecapeptide, hexapeptide etc in EN descriptions - these are correct chemistry terms, keep as peptide
# (They refer to the number of amino acids in a peptide chain - pentadecapeptide = 15 amino acid peptide)
# These are in product descriptions for deleted products - leave them

# Fix kopersteroid -> kopersteroïde (Dutch diacritic)
$content = $content -creplace "kopersteroid", "kopersteroïde"

# Fix Copper Tripeptide-1 (this is the actual chemical name and should stay)
# Actually 'Tripeptide' is the official chemical name for GHK-Cu, it's correct

$after = ([regex]::Matches($content, '[Pp]eptid')).Count
Write-Host "After: $after"

[IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "Saved"
