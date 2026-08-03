" The GridCN Tron for Vim and Neovim.
"
" Use :set background=dark (or light) before :colorscheme tron to choose a
" variant.  The palette is ported from the accompanying Tron Zed/VS Code
" themes.

if exists('g:colors_name')
  highlight clear
endif

if exists('syntax_on')
  syntax reset
endif

let g:colors_name = 'tron'

if &background ==# 'light'
  let s:bg        = '#f7fcfd'
  let s:surface   = '#eef8fa'
  let s:line      = '#edf8fa'
  let s:selection = '#caf5fd'
  let s:fg        = '#173238'
  let s:fg_soft   = '#29474c'
  let s:muted     = '#5d7073'
  let s:comment   = '#64777a'
  let s:border    = '#a9c8cc'
  let s:cyan      = '#006d75'
  let s:blue      = '#007384'
  let s:teal      = '#007e85'
  let s:green     = '#236b3b'
  let s:yellow    = '#765700'
  let s:red       = '#a32733'
  let s:magenta   = '#71347e'
  let s:ct_bg     = 231
  let s:ct_surface = 255
  let s:ct_fg     = 23
  let s:ct_muted  = 66
  let s:ct_cyan   = 30
  let s:ct_blue   = 31
  let s:ct_green  = 28
  let s:ct_yellow = 94
  let s:ct_red    = 124
  let s:ct_magenta = 91
else
  set background=dark
  let s:bg        = '#000103'
  let s:surface   = '#010408'
  let s:line      = '#00171a'
  let s:selection = '#00333f'
  let s:fg        = '#d7e8ee'
  let s:fg_soft   = '#e1f2f8'
  let s:muted     = '#8f8f8f'
  let s:comment   = '#618585'
  let s:border    = '#003839'
  let s:cyan      = '#00cacb'
  let s:blue      = '#00a4bb'
  let s:teal      = '#00959d'
  let s:green     = '#35c177'
  let s:yellow    = '#eab312'
  let s:red       = '#fc2835'
  let s:magenta   = '#cb86db'
  let s:ct_bg     = 16
  let s:ct_surface = 16
  let s:ct_fg     = 195
  let s:ct_muted  = 245
  let s:ct_cyan   = 44
  let s:ct_blue   = 38
  let s:ct_green  = 42
  let s:ct_yellow = 178
  let s:ct_red    = 197
  let s:ct_magenta = 176
endif

let s:cursor = '#00d4ff'
let s:string = '#24b6a1'
let s:number = '#67d2cc'
let s:punct  = '#008485'

if has('termguicolors') && !has('gui_running')
  set termguicolors
endif

function! s:hi(group, fg, bg, attr) abort
  execute 'highlight' a:group
        \ 'guifg=' . a:fg
        \ 'guibg=' . a:bg
        \ 'gui=' . a:attr
        \ 'cterm=' . a:attr
endfunction

function! s:link(group, target) abort
  execute 'highlight! link' a:group a:target
endfunction

" Editor chrome
call s:hi('Normal',        s:fg,      s:bg,        'NONE')
call s:hi('NormalFloat',   s:fg,      s:surface,   'NONE')
call s:hi('NormalNC',      s:fg,      s:bg,        'NONE')
call s:hi('EndOfBuffer',   s:border,  s:bg,        'NONE')
call s:hi('ColorColumn',   'NONE',    s:surface,   'NONE')
call s:hi('Conceal',       s:comment, s:bg,        'NONE')
call s:hi('Cursor',        s:bg,      s:cursor,    'NONE')
call s:hi('CursorIM',      s:bg,      s:cursor,    'NONE')
call s:hi('CursorColumn',  'NONE',    s:line,      'NONE')
call s:hi('CursorLine',    'NONE',    s:line,      'NONE')
call s:hi('CursorLineNr',  s:cursor,  s:line,      'bold')
call s:hi('LineNr',        s:comment, s:bg,        'NONE')
call s:hi('SignColumn',    s:comment, s:bg,        'NONE')
call s:hi('FoldColumn',    s:comment, s:bg,        'NONE')
call s:hi('Folded',        s:comment, s:surface,   'NONE')
call s:hi('VertSplit',     s:border,  s:bg,        'NONE')
call s:hi('WinSeparator',  s:border,  s:bg,        'NONE')
call s:hi('StatusLine',    s:fg,      s:surface,   'NONE')
call s:hi('StatusLineNC',  s:muted,   s:surface,   'NONE')
call s:hi('TabLine',       s:muted,   s:surface,   'NONE')
call s:hi('TabLineSel',    s:fg,      s:bg,        'bold')
call s:hi('TabLineFill',   s:border,  s:surface,   'NONE')
call s:hi('Pmenu',         s:fg,      s:surface,   'NONE')
call s:hi('PmenuSel',      s:fg,      s:selection, 'NONE')
call s:hi('PmenuSbar',     'NONE',    s:border,    'NONE')
call s:hi('PmenuThumb',    'NONE',    s:cyan,      'NONE')
call s:hi('Visual',        'NONE',    s:selection, 'NONE')
call s:hi('VisualNOS',     'NONE',    s:selection, 'NONE')
call s:hi('Search',        s:bg,      s:yellow,    'NONE')
call s:hi('IncSearch',     s:bg,      s:cursor,    'bold')
call s:hi('CurSearch',     s:bg,      s:yellow,    'bold')
call s:hi('MatchParen',    s:cursor,  s:selection, 'bold')
call s:hi('QuickFixLine',  s:fg,      s:selection, 'NONE')
call s:hi('Whitespace',    s:border,  s:bg,        'NONE')
call s:hi('NonText',       s:border,  s:bg,        'NONE')
call s:hi('SpecialKey',    s:border,  s:bg,        'NONE')
call s:hi('Directory',     s:blue,    s:bg,        'NONE')
call s:hi('Title',         s:cyan,    s:bg,        'bold')
call s:hi('Question',      s:cyan,    s:bg,        'bold')
call s:hi('MoreMsg',       s:green,   s:bg,        'NONE')
call s:hi('ModeMsg',       s:fg,      s:bg,        'bold')
call s:hi('MsgArea',       s:fg,      s:bg,        'NONE')
call s:hi('MsgSeparator',  s:border,  s:bg,        'NONE')
call s:hi('ErrorMsg',      s:red,     s:bg,        'bold')
call s:hi('WarningMsg',    s:yellow,  s:bg,        'bold')
call s:hi('WildMenu',      s:bg,      s:cyan,      'NONE')

" Syntax
call s:hi('Comment',       s:comment, s:bg,        'italic')
call s:hi('Constant',      s:number,  s:bg,        'NONE')
call s:hi('String',        s:string,  s:bg,        'NONE')
call s:hi('Character',     s:number,  s:bg,        'NONE')
call s:hi('Number',        s:number,  s:bg,        'NONE')
call s:hi('Boolean',       s:number,  s:bg,        'bold')
call s:hi('Float',         s:number,  s:bg,        'NONE')
call s:hi('Identifier',    s:fg,      s:bg,        'NONE')
call s:hi('Function',      s:blue,    s:bg,        'NONE')
call s:hi('Statement',     s:cyan,    s:bg,        'bold')
call s:hi('Conditional',   s:cyan,    s:bg,        'bold')
call s:hi('Repeat',        s:cyan,    s:bg,        'bold')
call s:hi('Label',         s:teal,    s:bg,        'NONE')
call s:hi('Operator',      s:string,  s:bg,        'NONE')
call s:hi('Keyword',       s:cyan,    s:bg,        'bold')
call s:hi('Exception',     s:red,     s:bg,        'bold')
call s:hi('PreProc',       s:blue,    s:bg,        'NONE')
call s:hi('Include',       s:blue,    s:bg,        'NONE')
call s:hi('Define',        s:cyan,    s:bg,        'NONE')
call s:hi('Macro',         s:cyan,    s:bg,        'NONE')
call s:hi('PreCondit',     s:cyan,    s:bg,        'NONE')
call s:hi('Type',          s:number,  s:bg,        'NONE')
call s:hi('StorageClass',  s:cyan,    s:bg,        'bold')
call s:hi('Structure',     s:number,  s:bg,        'NONE')
call s:hi('Typedef',       s:number,  s:bg,        'NONE')
call s:hi('Special',       s:teal,    s:bg,        'NONE')
call s:hi('SpecialChar',   s:number,  s:bg,        'bold')
call s:hi('Tag',           s:cyan,    s:bg,        'bold')
call s:hi('Delimiter',     s:punct,   s:bg,        'NONE')
call s:hi('SpecialComment',s:comment, s:bg,        'italic')
call s:hi('Debug',         s:red,     s:bg,        'NONE')
call s:hi('Underlined',    s:blue,    s:bg,        'underline')
call s:hi('Ignore',        s:muted,   s:bg,        'NONE')
call s:hi('Error',         s:red,     s:bg,        'bold')
call s:hi('Todo',          s:bg,      s:yellow,    'bold')

" Diagnostics, diff, and spell checking
call s:hi('DiffAdd',       s:green,   s:surface,   'NONE')
call s:hi('DiffChange',    s:yellow,  s:surface,   'NONE')
call s:hi('DiffDelete',    s:red,     s:surface,   'NONE')
call s:hi('DiffText',      s:bg,      s:yellow,    'bold')
call s:hi('SpellBad',      s:red,     s:bg,        'undercurl')
call s:hi('SpellCap',      s:blue,    s:bg,        'undercurl')
call s:hi('SpellLocal',    s:cyan,    s:bg,        'undercurl')
call s:hi('SpellRare',     s:magenta, s:bg,        'undercurl')
call s:hi('DiagnosticError', s:red,    s:bg,        'NONE')
call s:hi('DiagnosticWarn',  s:yellow, s:bg,        'NONE')
call s:hi('DiagnosticInfo',  s:blue,   s:bg,        'NONE')
call s:hi('DiagnosticHint',  s:cyan,   s:bg,        'NONE')
call s:hi('DiagnosticOk',    s:green,  s:bg,        'NONE')
call s:hi('DiagnosticUnderlineError', s:red, s:bg,  'undercurl')
call s:hi('DiagnosticUnderlineWarn',  s:yellow, s:bg, 'undercurl')
call s:hi('DiagnosticUnderlineInfo',  s:blue, s:bg, 'undercurl')
call s:hi('DiagnosticUnderlineHint',  s:cyan, s:bg, 'undercurl')

" Lightline normally derives its GitHub palette from GitHub-only highlight
" groups. Define this palette before Lightline is initialized and select it.
if !exists('g:lightline')
  let g:lightline = {}
endif
let g:lightline.colorscheme = 'tron'
let g:lightline#colorscheme#tron#palette = {
        \ 'normal': {
        \   'left': [[s:cyan, s:bg, s:ct_cyan, s:ct_bg, 'bold'], [s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
        \   'right': [[s:fg, s:surface, s:ct_fg, s:ct_surface, ''], [s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'error': [[s:bg, s:red, s:ct_bg, s:ct_red, 'bold']],
        \   'warning': [[s:bg, s:yellow, s:ct_bg, s:ct_yellow, 'bold']]},
        \ 'insert': {
        \   'left': [[s:bg, s:blue, s:ct_bg, s:ct_blue, 'bold']],
        \   'right': [[s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']]},
        \ 'replace': {
        \   'left': [[s:bg, s:red, s:ct_bg, s:ct_red, 'bold']],
        \   'right': [[s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']]},
        \ 'visual': {
        \   'left': [[s:bg, s:magenta, s:ct_bg, s:ct_magenta, 'bold']],
        \   'right': [[s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']]},
        \ 'inactive': {
        \   'left': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'right': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']]},
        \ 'tabline': {
        \   'left': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'right': [[s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
        \   'middle': [[s:muted, s:surface, s:ct_muted, s:ct_surface, '']],
        \   'tabsel': [[s:fg, s:bg, s:ct_fg, s:ct_bg, 'bold']]}}

" Tree-sitter captures use @ in their group name, which classic Vim rejects.
if has('nvim')
  call s:link('@comment',             'Comment')
  call s:link('@comment.documentation', 'SpecialComment')
  call s:link('@string',              'String')
  call s:link('@string.escape',       'SpecialChar')
  call s:link('@string.regex',        'Special')
  call s:link('@character',           'Character')
  call s:link('@number',              'Number')
  call s:link('@boolean',             'Boolean')
  call s:link('@constant',            'Constant')
  call s:link('@constant.builtin',    'Boolean')
  call s:link('@function',            'Function')
  call s:link('@function.builtin',    'Function')
  call s:link('@function.macro',      'Macro')
  call s:link('@method',              'Function')
  call s:link('@constructor',         'Function')
  call s:link('@keyword',             'Keyword')
  call s:link('@keyword.function',    'Keyword')
  call s:link('@keyword.return',      'Keyword')
  call s:link('@conditional',         'Conditional')
  call s:link('@repeat',              'Repeat')
  call s:link('@operator',            'Operator')
  call s:link('@type',                'Type')
  call s:link('@type.builtin',        'Type')
  call s:link('@attribute',           'Special')
  call s:link('@property',            'Special')
  call s:link('@variable',            'Identifier')
  call s:link('@variable.parameter',  'Identifier')
  call s:link('@variable.builtin',    'Special')
  call s:link('@namespace',           'Identifier')
  call s:link('@module',              'Identifier')
  call s:link('@tag',                 'Tag')
  call s:link('@tag.attribute',       'Special')
  call s:link('@tag.delimiter',       'Delimiter')
  call s:link('@punctuation',         'Delimiter')
  call s:link('@punctuation.bracket', 'Special')
  call s:link('@markup.heading',      'Title')
  call s:link('@markup.strong',       'Tag')
  call s:link('@markup.italic',       'Underlined')
  call s:link('@markup.link',         'Underlined')
  call s:link('@markup.raw',          'String')
  call s:link('@markup.list',         'Tag')
endif

" Frequently used plugin integrations
call s:link('GitSignsAdd',          'DiffAdd')
call s:link('GitSignsChange',       'DiffChange')
call s:link('GitSignsDelete',       'DiffDelete')
call s:link('GitSignsAddNr',        'GitSignsAdd')
call s:link('GitSignsChangeNr',     'GitSignsChange')
call s:link('GitSignsDeleteNr',     'GitSignsDelete')
call s:link('TelescopeBorder',      'WinSeparator')
call s:link('TelescopeSelection',   'PmenuSel')
call s:link('TelescopeMatching',    'Title')
call s:link('FloatBorder',          'WinSeparator')
call s:link('WhichKey',             'Title')
call s:link('WhichKeyGroup',        'Function')
call s:link('WhichKeyDesc',         'Identifier')
call s:link('NvimTreeFolderName',   'Directory')
call s:link('NvimTreeFolderIcon',   'Directory')
call s:link('NvimTreeGitNew',       'DiffAdd')
call s:link('NvimTreeGitDeleted',   'DiffDelete')

unlet s:bg s:surface s:line s:selection s:fg s:fg_soft s:muted s:comment
unlet s:border s:cyan s:blue s:teal s:green s:yellow s:red s:magenta
unlet s:cursor s:string s:number s:punct
unlet s:ct_bg s:ct_surface s:ct_fg s:ct_muted s:ct_cyan s:ct_blue s:ct_green
unlet s:ct_yellow s:ct_red s:ct_magenta
delfunction s:hi
delfunction s:link
