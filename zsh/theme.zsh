#!/usr/bin/env zsh

function setTheme() {
  THEME=$(osascript -e 'tell application "Terminal" to return name of current settings of first window')
  [[ "${THEME}" == "${1}" ]] && return

  osascript -e "tell application \"Terminal\" to set current settings of tabs of windows to settings set \"${1}\""
}

function SetBackgroundMode() {
  [[ "${TERM_PROGRAM}" != "Apple_Terminal" ]] && return

  MODE=$(defaults read -g AppleInterfaceStyle 2>/dev/null || echo "Light")
  if [[ ${MODE} = "Dark" ]]; then
    setTheme "github_dark"
  else
    setTheme "github_light"
  fi
}

SetBackgroundMode
add-zsh-hook periodic SetBackgroundMode || while sleep 30; do SetBackgroundMode; done &