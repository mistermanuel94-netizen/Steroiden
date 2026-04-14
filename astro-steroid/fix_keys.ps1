$f = "C:\Users\CTech Electronics\Desktop\Steroid\Steroiden\astro-steroid\src\i18n\translations.ts"
$content = [IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Fix TypeScript interface keys and object property keys
# These are identifiers, NOT displayed text. They must match across interface + all language blocks + component references.
# Key pattern: these appear as "  keyName: " or "  keyName: '" at the start of a line (after whitespace)

# Fix nav keys
$content = $content -creplace '(\s+)steroids(:\s)', '${1}peptides${2}'
$content = $content -creplace '(\s+)allsteroids(:\s)', '${1}allPeptides${2}'

# Fix learnPage keys  
$content = $content -creplace '(\s+)shopsteroids(:\s)', '${1}shopPeptides${2}'
$content = $content -creplace '(\s+)shopsteroidsDesc(:\s)', '${1}shopPeptidesDesc${2}'
$content = $content -creplace '(\s+)whatAresteroids(:\s)', '${1}whatArePeptides${2}'
$content = $content -creplace '(\s+)whatAresteroidsDescription(:\s)', '${1}whatArePeptidesDescription${2}'
$content = $content -creplace '(\s+)browsesteroids(:\s)', '${1}browsePeptides${2}'
$content = $content -creplace '(\s+)understandingsteroids(:\s)', '${1}understandingPeptides${2}'

# Fix bundlesPage keys
$content = $content -creplace '(\s+)popularsteroid(:\s)', '${1}popularPeptide${2}'

# Fix home.bestSellers key
$content = $content -creplace '(\s+)viewAllsteroids(:\s)', '${1}viewAllPeptides${2}'

# Also fix any t() function references in translation values that may reference these keys
$content = $content -creplace "'nav\.steroids'", "'nav.peptides'"
$content = $content -creplace "'nav\.allsteroids'", "'nav.allPeptides'"
$content = $content -creplace "'blogPage\.shopsteroids'", "'blogPage.shopPeptides'"
$content = $content -creplace "'checkout\.actions\.browsesteroids'", "'checkout.actions.browsePeptides'"
$content = $content -creplace "'bundlesPage\.features\.popularsteroid'", "'bundlesPage.features.popularPeptide'"
$content = $content -creplace "'home\.bestSellers\.viewAllsteroids'", "'home.bestSellers.viewAllPeptides'"

# Check what changed
$remaining_steroids_keys = ([regex]::Matches($content, '\s+(steroids|allsteroids|shopsteroids|whatAresteroids|browsesteroids|understandingsteroids|popularsteroid|viewAllsteroids):')).Count
Write-Host "Remaining corrupted keys: $remaining_steroids_keys"

# Verify peptides keys are back
$peptides_keys = ([regex]::Matches($content, '\s+(peptides|allPeptides|shopPeptides|whatArePeptides|browsePeptides|understandingPeptides|popularPeptide|viewAllPeptides):')).Count
Write-Host "Restored peptide keys: $peptides_keys"

[IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "Saved"
