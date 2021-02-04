#!/usr/bin/env zsh

setopt append_history share_history histignorealldups
bindkey -e
clear

. ${HOME}/.zsh/exports
. ${HOME}/.zsh/aliases
. ${HOME}/.zsh/functions

if [[ -d "${HOME}/.asdf" ]]; then
  . $(brew --prefix asdf)/asdf.sh
fi

if [[ -d "$HOME/.zsh/pure" ]]; then
  fpath+=$HOME/.zsh/pure
  autoload -U promptinit; promptinit
  zstyle :prompt:pure:git:fetch only_upstream yes
  zstyle :prompt:pure:git:stash show yes
  prompt pure
fi

if [[ -d "$HOME/.zsh/zsh-autosuggestions" ]]; then
  . ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
fi

function setTheme() {
  THEME=$(osascript -e 'tell application "Terminal" to return name of current settings of first window')
  [[ "${THEME}" == "${1}" ]] && return

  osascript -e "tell application \"Terminal\" to set current settings of tabs of windows to settings set \"${1}\""
}

function SetBackgroundMode() {
  MODE=$(defaults read -g AppleInterfaceStyle 2>/dev/null || echo "Light")
  if [[ ${MODE} = "Dark" ]]; then
    setTheme "ayu_dark"
  else
    setTheme "ayu_light"
  fi
}

SetBackgroundMode

PID_FILE=${HOME}/.zsh/.pid
function setBackgroundModeProcess() {
  if [[ -f "${PID_FILE}" ]]; then
    PID=$(<"${PID_FILE}")
    if ps -p "${PID}" > /dev/null; then
      return
    fi
  fi

  while sleep 30; do SetBackgroundMode; done &
  echo $! > ${PID_FILE}

  clear
}

setBackgroundModeProcess
