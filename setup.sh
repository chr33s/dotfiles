#!/usr/bin/env sh

files=(
  "curlrc"
  "editorconfig"
  "gemrc"
  "gitconfig"
  "gitignore"
  "gnupg"
  "npmrc"
  "screenrc"
  "ssh"
  "tmux.conf"
  "vim"
  "vimrc"
  "zsh"
  "zshrc"
)

for file in "${files[@]}"
do
  rm -rf ~/.$file && ln -s $(pwd)/$file ~/.$file
done
unset file

path="local/bin"
for file in $(ls ./$path)
do
  mkdir -p ~/.$path
  rm -f ~/.$path/_$file && ln -s $(pwd)/$path/$file ~/.$path/_$file
done
unset file

./vscode/setup.sh
