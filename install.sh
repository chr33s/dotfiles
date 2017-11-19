#!/usr/bin/env bash

files=( 'vim' 'vimrc' 'screenrc' 'bash' 'bashrc' 'bash_profile' 'local' 'gitconfig' 'config' 'curlrc' 'gnupg' 'ssh' 'editorconfig' 'eslintrc' )

for file in "${files[@]}"
do
    rm -rf ~/.$file
    ln -s $(pwd)/$file ~/.$file
done

