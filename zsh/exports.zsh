export ANDROID_HOME="${HOME}/Library/Android/sdk"
export CLICOLOR=1
export COPYFILE_DISABLE=true
export EDITOR="vim"
export VISUAL="vim"
export GOPATH=${HOME}/go
export GPG_TTY=$(tty)
export HOMEBREW_NO_ANALYTICS=1
export LANG="en_GB.UTF-8"
export LSCOLORS="ExGxBxDxCxEgEdxbxgxcxd"
export PATH="${HOME}/.local/bin:${PATH}:./bin:./.bin:./node_modules/.bin:${GOPATH}/bin"
export PATH="${PATH}:/opt/homebrew/bin:"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools"
export PATH="${PATH}:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export TERM=xterm-256color

. $(brew --prefix asdf)/libexec/asdf.sh