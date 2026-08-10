export ANDROID_HOME="${HOME}/Library/Android/sdk"
export CLICOLOR=1
export COPYFILE_DISABLE=true
export EDITOR="vim"
export VISUAL="vim"
export GOPATH=${HOME}/go
export GPG_TTY=$(tty)
export LANG="en_GB.UTF-8"
export PATH="/opt/homebrew/bin:${PATH}"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools"
export PATH="${PATH}:${HOME}/.local/bin:${GOPATH}/bin"
export PATH="${PATH}:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

# mise must activate before anything that invokes a mise-managed tool below.
if (( $+commands[mise] )); then
  eval "$(mise activate zsh)"
fi

if (( $+commands[gh] )); then
  eval "$(gh copilot alias -- zsh)"
fi
