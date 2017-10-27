[[ -s ~/.bashrc ]] && source ~/.bashrc
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

shopt -s histappend
shopt -s histverify
shopt -s expand_aliases

source ~/.bash/aliases
source ~/.bash/exports
source ~/.bash/functions
source ~/.bash/path
