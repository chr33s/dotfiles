if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | source $MYVIMRC
\| endif

call plug#begin()

Plug 'itchyny/lightline.vim'
if !has('nvim')
    Plug 'tpope/vim-sensible'
endif
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'ap/vim-css-color'
Plug 'sheerun/vim-polyglot'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'editorconfig/editorconfig-vim'
Plug 'Yggdroot/indentLine'
Plug 'ap/vim-readdir'
Plug 'neoclide/coc.nvim', {'branch': 'release'}

call plug#end()

let g:ctrlp_user_command = 'rg %s --files --color=never --glob ""'
let g:ctrlp_use_caching = 1

let g:netrw_list_hide='.DS_Store'
let g:loaded_netrwPlugin=1

set noshowmode
set background=light

let g:indentLine_char = ''
let g:indentLine_first_char = ''
let g:indentLine_showFirstIndentLevel = 1
let g:indentLine_setColors = 0
