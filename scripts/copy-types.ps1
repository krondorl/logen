# Get the absolute path of the script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Resolve paths relative to the script
$sharedFile = Join-Path $scriptDir "..\\shared\\index.ts"
$clientDest = Join-Path $scriptDir "..\\client\\src\\types"
$serverDest = Join-Path $scriptDir "..\\server\\src\\types"

# Ensure client/src/types exists
if (!(Test-Path -Path $clientDest)) {
    New-Item -ItemType Directory -Path $clientDest -Force | Out-Null
}

# Copy to client
Copy-Item -Path $sharedFile -Destination $clientDest

# Ensure server/src/types exists
if (!(Test-Path -Path $serverDest)) {
    New-Item -ItemType Directory -Path $serverDest -Force | Out-Null
}

# Copy to server
Copy-Item -Path $sharedFile -Destination $serverDest
