syntax on
filetype indent on
filetype plugin on

set hidden
set history=10000
if !has('nvim')
    set cryptmethod=blowfish2
endif
set expandtab
set tabstop=2
set shiftwidth=2
set softtabstop=2
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
set termguicolors

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
Plug 'editorconfig/editorconfig-vim'
Plug 'Yggdroot/indentLine'

call plug#end()

let g:prettier#config#semi = 'false'
let g:prettier#config#singleQuote = 'true'

let g:airline_theme='ayu'
let g:netrw_list_hide='.DS_Store'

set background=light
let ayucolor='light'
colorscheme ayu
" IndentLine {{
let g:indentLine_char = ''
let g:indentLine_first_char = ''
let g:indentLine_showFirstIndentLevel = 1
let g:indentLine_setColors = 0
" }}

function! SetBackgroundMode(...)
  let s:background = 'light'
  if $TERM_PROGRAM ==? 'Apple_Terminal'
    let s:mode = systemlist('defaults read -g AppleInterfaceStyle')
    if len(s:mode) != 0 && s:mode[0] == 'Dark'
      let s:background = 'dark'
    endif

    if &background !=? s:background
      let &background = s:background
    endif

    if g:ayucolor !=? s:background
      let g:ayucolor = s:background
    endif
  endif
endfunction

call SetBackgroundMode()
call timer_start(30000, "SetBackgroundMode", {"repeat": -1})
