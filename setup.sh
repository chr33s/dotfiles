#!/usr/bin/env sh

files=(
  "vim"
  "vimrc"
  "screenrc"
  "local"
  "gitconfig"
  "gitignore"
  "curlrc"
  "gnupg"
  "ssh"
  "editorconfig"
  "gemrc"
  "tool-versions"
  "npmrc"
  "zsh"
  "zshrc"
)

for file in "${files[@]}"
do
  rm -rf ~/.$file
  ln -s $(pwd)/$file ~/.$file
done
unset file

./zsh/setup
./vscode/setup
