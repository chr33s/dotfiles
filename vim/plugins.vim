if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | source $MYVIMRC
\| endif

call plug#begin()

Plug 'cormacrelf/vim-colors-github'
Plug 'itchyny/lightline.vim'
if !has('nvim')
    Plug 'tpope/vim-sensible'
endif
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'ap/vim-css-color'
Plug 'sheerun/vim-polyglot'
Plug 'prettier/vim-prettier'
Plug 'eslint/eslint'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'editorconfig/editorconfig-vim'
Plug 'Yggdroot/indentLine'
Plug 'ap/vim-readdir'

call plug#end()

let g:prettier#config#semi = 'false'
let g:prettier#config#singleQuote = 'true'

let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
let g:ctrlp_use_caching = 1

let g:netrw_list_hide='.DS_Store'
let g:loaded_netrwPlugin=1

set noshowmode
set background=light
colorscheme github
" IndentLine {{
let g:indentLine_char = ''
let g:indentLine_first_char = ''
let g:indentLine_showFirstIndentLevel = 1
let g:indentLine_setColors = 0
" }}
let g:lightline = { 'colorscheme': 'github' }

function! SetBackgroundMode(...)
  if $TERM_PROGRAM ==? 'Apple_Terminal'
    let s:background = 'light'
    let s:mode = systemlist('defaults read -g AppleInterfaceStyle')
    if len(s:mode) != 0 && s:mode[0] == 'Dark'
      let s:background = 'dark'
    endif

    if &background !=? s:background
      let &background = s:background
    endif
  endif
endfunction

call SetBackgroundMode()
call timer_start(30000, "SetBackgroundMode", {"repeat": -1})
