export LANG="en_GB.UTF-8"

export ANDROID_HOME=${HOME}/Library/Android/sdk
export CLICOLOR=1
export COPYFILE_DISABLE=true
export EDITOR="vim" # | code
export VISUAL="vim"
export GOPATH=${HOME}/go
export HOMEBREW_NO_ANALYTICS=1
export LSCOLORS=ExGxBxDxCxEgEdxbxgxcxd
export NODE_TLS_REJECT_UNAUTHORIZED="0"
export PATH=${HOME}/.local/bin:$PATH:./bin:./.bin:./node_modules/.bin:${GOPATH}/bin
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export TERM=xterm-256color
export ZSH_DOTENV_PROMPT=false
export ZPLUG_HOME=${HOME}/.zplug

if [[ -d "${HOME}/.asdf" ]]; then
  source $(brew --prefix asdf)/asdf.sh
fi
