alias ll='ls -la'
alias update='sudo apt-get update && sudo apt-get upgrade'

#Welcome Message
echo "Happy working!"

# Show recent login attempts
last | head -n 5

# Display available disk space
df -h /

# Set custom prompt with date, time, username, and hostname
PS1='$(date +"%Y-%m-%d %H:%M") \u@\h\n# '

