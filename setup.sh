#!/usr/bin/env sh

files=(
  "curlrc"
  "editorconfig"
  "gemrc"
  "gitconfig"
  "gitignore"
  "gnupg"
  "local"
  "npmrc"
  "screenrc"
  "ssh"
  "tool-versions"
  "zsh"
  "zshrc"
  "vim"
  "vimrc"
)

for file in "${files[@]}"
do
  rm -rf ~/.$file
  ln -s $(pwd)/$file ~/.$file
done
unset file

./zsh/setup.zsh
./vscode/setup.sh
