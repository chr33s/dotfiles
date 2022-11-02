export ANDROID_HOME="${HOME}/Library/Android/sdk"
export CLICOLOR=1
export COPYFILE_DISABLE=true
export EDITOR="vim"
export VISUAL="vim"
export GOPATH=${HOME}/go
export HOMEBREW_NO_ANALYTICS=1
export LANG="en_GB.UTF-8"
export LSCOLORS="ExGxBxDxCxEgEdxbxgxcxd"
export PATH="${HOME}/.local/bin:${PATH}:./bin:./.bin:./node_modules/.bin:${GOPATH}/bin"
export PATH="/opt/homebrew/bin:${PATH}"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools"
export PATH="${PATH}:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export TERM=xterm-256color
export ZSH_DOTENV_PROMPT=false
export ZPLUG_HOME="${HOME}/.zplug"

. $(brew --prefix asdf)/libexec/asdf.sh