export ANDROID_HOME="${HOME}/Library/Android/sdk"
export CLICOLOR=1
export COPYFILE_DISABLE=true
export EDITOR="vim"
export VISUAL="vim"
export GOPATH=${HOME}/go
export GPG_TTY=$(tty)
export HOMEBREW_NO_ANALYTICS=1
export LANG="en_GB.UTF-8"
export PATH="${PATH}:/opt/homebrew/bin"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools"
export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"
export PATH="${PATH}:${HOME}/.local/bin:./bin:./node_modules/.bin:${GOPATH}/bin"
export PATH="${PATH}:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export PATH="${PATH}:/Users/chr33s/.lmstudio/bin"

. $(brew --prefix asdf)/libexec/asdf.sh