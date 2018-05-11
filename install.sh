#!/usr/bin/env bash

files=(
    'vim'
    'vimrc'
    'screenrc'
    'bash'
    'bashrc'
    'bash_sessions_disable'
    'bash_profile'
    'local'
    'gitconfig'
    'gitignore'
    'config'
    'curlrc'
    'gnupg'
    'ssh'
    'editorconfig'
    'eslintrc'
    'gemrc'
    'my.cnf'
    'hushlogin'
    'default-npm-packages'
)

for file in "${files[@]}"
do
    rm -rf ~/.$file
    ln -s $(pwd)/$file ~/.$file
done

