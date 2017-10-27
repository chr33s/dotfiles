syntax on
filetype indent on
filetype plugin on

set hidden
set history=10000
if !has('nvim')
    set cryptmethod=blowfish2
endif
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set smarttab
set autoindent
set laststatus=2
set showmatch
set incsearch
set hlsearch
set ignorecase smartcase       " make searches case-sensitive only if they contain upper-case characters
set cursorline
set switchbuf=useopen
set number
set numberwidth=5
set backspace=indent,eol,start
set showcmd                    " display incomplete commands
set nocompatible
set fileformats=unix,dos,mac
set foldmethod=syntax
set foldlevel=7
set tags=tags;
set mouse=a

set t_Co=256
" set termguicolors

" Clear highlighting on escape in normal mode
nnoremap <esc> :noh<return><esc>
nnoremap <esc>^[ <esc>^[

" Use tabs with Ctrl and arrow keys, Ctrl+n to open a new tab, and Ctrl+w to
" close it
map <C-up> :tabr<cr>
map <C-down> :tabl<cr>
map <C-left> :tabp<cr>
map <C-right> :tabn<cr>
" map <C-n> :tabnew<cr>
map <C-w> :tabclose<cr>

" Ctrl-D opens a shell.
nmap <silent> <C-D> :shell<CR>

" force two spaces indentation
autocmd Filetype html setlocal ts=2 sts=2 sw=2
autocmd Filetype ruby setlocal ts=2 sts=2 sw=2
autocmd Filetype eruby setlocal ts=2 sts=2 sw=2
autocmd Filetype c setlocal ts=2 sts=2 sw=2
autocmd Filetype cpp setlocal ts=2 sts=2 sw=2
autocmd Filetype js setlocal ts=2 sts=2 sw=2

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall
endif

call plug#begin()

Plug 'ayu-theme/ayu-vim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
if !has('nvim')
    Plug 'tpope/vim-sensible'
endif
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'ap/vim-css-color'
Plug 'hashivim/vim-vagrant'
Plug 'hashivim/vim-packer'
Plug 'sheerun/vim-polyglot'
Plug 'prettier/vim-prettier'
Plug 'ctrlpvim/ctrlp.vim'

call plug#end()

let g:prettier#config#semi = 'false'
let g:prettier#config#singleQuote = 'true'

let g:airline_theme='hybrid'
let g:netrw_list_hide='.DS_Store'

set termguicolors
let ayucolor='light'
colorscheme ayu
