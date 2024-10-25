# Specify the input and output file paths
$FileName = "C:\Users\User\Desktop\file.exe"
$OutputTextFile = "C:\Users\User\Desktop\file.exe.txt"

# Read file bytes, convert to Base64, and write to a text file
$base64string = [Convert]::ToBase64String([IO.File]::ReadAllBytes($FileName))
[IO.File]::WriteAllText($OutputTextFile, $base64string)


# Specify the input text file and the output file
$InputTextFile = "C:\Users\User\Desktop\file.exe.txt"
$DecodedFileName = "C:\Users\User\Desktop\file.exe"

# Read Base64 string from text file, decode, and write to original file format
$base64string = [IO.File]::ReadAllText($InputTextFile)
[IO.File]::WriteAllBytes($DecodedFileName, [Convert]::FromBase64String($base64string))
