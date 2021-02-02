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
