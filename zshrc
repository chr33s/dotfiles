#!/usr/bin/env zsh

setopt append_history
setopt share_history
setopt histignorealldups
setopt EXTENDED_HISTORY
setopt HIST_EXPIRE_DUPS_FIRST
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_IGNORE_SPACE
setopt HIST_FIND_NO_DUPS
setopt HIST_SAVE_NO_DUPS
export HISTSIZE=1000000000
export SAVEHIST=$HISTSIZE

bindkey -e

for src in exports aliases plugins completions; do
  source ${HOME}/.zsh/${src}.zsh
done
unset src

if (( $+commands[mise] )); then
  eval "$(mise activate zsh)"
fi

printf "\033c" # clear
