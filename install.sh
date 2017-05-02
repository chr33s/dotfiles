#!/usr/bin/env bash

files=( 'vim' 'vimrc' 'screenrc' )

for file in "${files[@]}"
do
    rm -rf ~/.$file
    ln -s $(pwd)/$file ~/.$file
done

