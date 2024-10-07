#!/usr/bin/env zsh

setopt append_history share_history histignorealldups
bindkey -e

for src in exports aliases plugins theme completions; do
  source ${HOME}/.zsh/${src}.zsh
done
unset src

printf "\033c" # clear