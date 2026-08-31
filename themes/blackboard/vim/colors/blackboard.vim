" Blackboard for Vim and Neovim.
"
" Use :set background=dark (or light) before :colorscheme blackboard to choose
" a variant.  The palette is ported from the accompanying Blackboard VS Code /
" Ghostty themes.

if exists('g:colors_name')
  highlight clear
endif

if exists('syntax_on')
  syntax reset
endif

let g:colors_name = 'blackboard'

if &background ==# 'light'
  let s:bg        = '#F8FAFD'
  let s:surface   = '#F1F4FA'
  let s:line      = '#ECEFF6'
  let s:selection = '#C6D6EE'
  let s:fg        = '#1E2840'
  let s:muted     = '#5B6B88'
  let s:comment   = '#878E9B'
  let s:border    = '#DCE3EF'
  let s:yellow    = '#8F6F00'
  let s:green     = '#2E7D1B'
  let s:lime      = '#6C7A00'
  let s:orange    = '#BF4D00'
  let s:blue      = '#3D639C'
  let s:sky       = '#2A5E9F'
  let s:pale      = '#35548F'
  let s:slate     = '#5B6B88'
  let s:red       = '#AB2A1D'
  let s:cursor    = '#0C1021'
  let s:ct_bg     = 231
  let s:ct_surface = 255
  let s:ct_fg     = 236
  let s:ct_muted  = 60
  let s:ct_yellow = 94
  let s:ct_green  = 28
  let s:ct_lime   = 64
  let s:ct_orange = 130
  let s:ct_blue   = 25
  let s:ct_red    = 124
else
  set background=dark
  let s:bg        = '#0C1021'
  let s:surface   = '#10152A'
  let s:line      = '#171B2E'
  let s:selection = '#253B76'
  let s:fg        = '#F8F8F8'
  let s:muted     = '#899AB6'
  let s:comment   = '#7E8089'
  let s:border    = '#26314F'
  let s:yellow    = '#FBDE2D'
  let s:green     = '#61CE3C'
  let s:lime      = '#D8FA3C'
  let s:orange    = '#FF6400'
  let s:blue      = '#8DA6CE'
  let s:sky       = '#BECDE6'
  let s:pale      = '#D5E0F3'
  let s:slate     = '#7F90AA'
  let s:red       = '#D74E41'
  let s:cursor    = '#FFFFFF'
  let s:ct_bg     = 233
  let s:ct_surface = 234
  let s:ct_fg     = 255
  let s:ct_muted  = 103
  let s:ct_yellow = 220
  let s:ct_green  = 77
  let s:ct_lime   = 191
  let s:ct_orange = 202
  let s:ct_blue   = 110
  let s:ct_red    = 167
endif

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
call s:hi('CursorLineNr',  s:fg,      s:line,      'bold')
call s:hi('LineNr',        s:muted,   s:bg,        'NONE')
call s:hi('SignColumn',    s:muted,   s:bg,        'NONE')
call s:hi('FoldColumn',    s:muted,   s:bg,        'NONE')
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
call s:hi('PmenuThumb',    'NONE',    s:blue,      'NONE')
call s:hi('Visual',        'NONE',    s:selection, 'NONE')
call s:hi('VisualNOS',     'NONE',    s:selection, 'NONE')
call s:hi('Search',        s:bg,      s:yellow,    'NONE')
call s:hi('IncSearch',     s:bg,      s:orange,    'bold')
call s:hi('CurSearch',     s:bg,      s:yellow,    'bold')
call s:hi('MatchParen',    s:yellow,  s:selection, 'bold')
call s:hi('QuickFixLine',  s:fg,      s:selection, 'NONE')
call s:hi('Whitespace',    s:border,  s:bg,        'NONE')
call s:hi('NonText',       s:border,  s:bg,        'NONE')
call s:hi('SpecialKey',    s:border,  s:bg,        'NONE')
call s:hi('Directory',     s:blue,    s:bg,        'NONE')
call s:hi('Title',         s:yellow,  s:bg,        'bold')
call s:hi('Question',      s:green,   s:bg,        'bold')
call s:hi('MoreMsg',       s:green,   s:bg,        'NONE')
call s:hi('ModeMsg',       s:fg,      s:bg,        'bold')
call s:hi('MsgArea',       s:fg,      s:bg,        'NONE')
call s:hi('MsgSeparator',  s:border,  s:bg,        'NONE')
call s:hi('ErrorMsg',      s:red,     s:bg,        'bold')
call s:hi('WarningMsg',    s:yellow,  s:bg,        'bold')
call s:hi('WildMenu',      s:bg,      s:yellow,    'NONE')

" Syntax
call s:hi('Comment',       s:comment, s:bg,        'italic')
call s:hi('Constant',      s:lime,    s:bg,        'NONE')
call s:hi('String',        s:green,   s:bg,        'NONE')
call s:hi('Character',     s:green,   s:bg,        'NONE')
call s:hi('Number',        s:lime,    s:bg,        'NONE')
call s:hi('Boolean',       s:lime,    s:bg,        'NONE')
call s:hi('Float',         s:lime,    s:bg,        'NONE')
call s:hi('Identifier',    s:fg,      s:bg,        'NONE')
call s:hi('Function',      s:sky,     s:bg,        'NONE')
call s:hi('Statement',     s:yellow,  s:bg,        'NONE')
call s:hi('Conditional',   s:yellow,  s:bg,        'NONE')
call s:hi('Repeat',        s:yellow,  s:bg,        'NONE')
call s:hi('Label',         s:yellow,  s:bg,        'NONE')
call s:hi('Operator',      s:fg,      s:bg,        'NONE')
call s:hi('Keyword',       s:yellow,  s:bg,        'NONE')
call s:hi('Exception',     s:yellow,  s:bg,        'NONE')
call s:hi('PreProc',       s:orange,  s:bg,        'NONE')
call s:hi('Include',       s:orange,  s:bg,        'NONE')
call s:hi('Define',        s:orange,  s:bg,        'NONE')
call s:hi('Macro',         s:orange,  s:bg,        'NONE')
call s:hi('PreCondit',     s:orange,  s:bg,        'NONE')
call s:hi('Type',          s:pale,    s:bg,        'NONE')
call s:hi('StorageClass',  s:yellow,  s:bg,        'NONE')
call s:hi('Structure',     s:orange,  s:bg,        'NONE')
call s:hi('Typedef',       s:pale,    s:bg,        'NONE')
call s:hi('Special',       s:blue,    s:bg,        'NONE')
call s:hi('SpecialChar',   s:orange,  s:bg,        'NONE')
call s:hi('Tag',           s:slate,   s:bg,        'NONE')
call s:hi('Delimiter',     s:fg,      s:bg,        'NONE')
call s:hi('SpecialComment',s:comment, s:bg,        'italic')
call s:hi('Debug',         s:red,     s:bg,        'NONE')
call s:hi('Underlined',    s:blue,    s:bg,        'underline')
call s:hi('Ignore',        s:muted,   s:bg,        'NONE')
call s:hi('Error',         s:red,     s:bg,        'bold')
call s:hi('Todo',          s:bg,      s:yellow,    'bold')

" Diagnostics, diff, and spell checking
call s:hi('DiffAdd',       s:green,   s:surface,   'NONE')
call s:hi('DiffChange',    s:blue,    s:surface,   'NONE')
call s:hi('DiffDelete',    s:red,     s:surface,   'NONE')
call s:hi('DiffText',      s:bg,      s:blue,      'bold')
call s:hi('Added',         s:green,   s:bg,        'NONE')
call s:hi('Changed',       s:blue,    s:bg,        'NONE')
call s:hi('Removed',       s:red,     s:bg,        'NONE')
call s:hi('SpellBad',      s:red,     s:bg,        'undercurl')
call s:hi('SpellCap',      s:blue,    s:bg,        'undercurl')
call s:hi('SpellLocal',    s:sky,     s:bg,        'undercurl')
call s:hi('SpellRare',     s:orange,  s:bg,        'undercurl')
call s:hi('DiagnosticError', s:red,    s:bg,        'NONE')
call s:hi('DiagnosticWarn',  s:yellow, s:bg,        'NONE')
call s:hi('DiagnosticInfo',  s:blue,   s:bg,        'NONE')
call s:hi('DiagnosticHint',  s:green,  s:bg,        'NONE')
call s:hi('DiagnosticOk',    s:green,  s:bg,        'NONE')
call s:hi('DiagnosticUnderlineError', s:red, s:bg,  'undercurl')
call s:hi('DiagnosticUnderlineWarn',  s:yellow, s:bg, 'undercurl')
call s:hi('DiagnosticUnderlineInfo',  s:blue, s:bg, 'undercurl')
call s:hi('DiagnosticUnderlineHint',  s:green, s:bg, 'undercurl')

" Lightline normally derives its palette from colorscheme-specific highlight
" groups. Define this palette before Lightline is initialized and select it.
if !exists('g:lightline')
  let g:lightline = {}
endif
let g:lightline.colorscheme = 'blackboard'
let g:lightline#colorscheme#blackboard#palette = {
        \ 'normal': {
        \   'left': [[s:bg, s:yellow, s:ct_bg, s:ct_yellow, 'bold'], [s:fg, s:surface, s:ct_fg, s:ct_surface, '']],
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
        \   'left': [[s:bg, s:orange, s:ct_bg, s:ct_orange, 'bold']],
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
  call s:link('@string.regex',        'String')
  call s:link('@character',           'Character')
  call s:link('@number',              'Number')
  call s:link('@boolean',             'Boolean')
  call s:link('@constant',            'Constant')
  call s:link('@constant.builtin',    'Constant')
  call s:link('@function',            'Function')
  call s:link('@function.builtin',    'Function')
  call s:link('@function.macro',      'Macro')
  call s:link('@method',              'Function')
  call s:link('@constructor',         'PreProc')
  call s:link('@keyword',             'Keyword')
  call s:link('@keyword.function',    'Keyword')
  call s:link('@keyword.return',      'Keyword')
  call s:link('@conditional',         'Conditional')
  call s:link('@repeat',              'Repeat')
  call s:link('@operator',            'Operator')
  call s:link('@type',                'Type')
  call s:link('@type.builtin',        'Type')
  call s:link('@attribute',           'PreProc')
  call s:link('@property',            'Special')
  call s:link('@variable',            'Identifier')
  call s:link('@variable.parameter',  'Identifier')
  call s:link('@variable.builtin',    'Constant')
  call s:link('@namespace',           'Tag')
  call s:link('@module',              'Tag')
  call s:link('@tag',                 'Tag')
  call s:link('@tag.attribute',       'Special')
  call s:link('@tag.delimiter',       'Delimiter')
  call s:link('@punctuation',         'Delimiter')
  call s:link('@punctuation.bracket', 'Delimiter')
  call s:link('@markup.heading',      'Title')
  call s:link('@markup.strong',       'ModeMsg')
  call s:link('@markup.italic',       'Underlined')
  call s:link('@markup.link',         'Underlined')
  call s:link('@markup.raw',          'String')
  call s:link('@markup.list',         'Statement')
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

unlet s:bg s:surface s:line s:selection s:fg s:muted s:comment s:border
unlet s:yellow s:green s:lime s:orange s:blue s:sky s:pale s:slate s:red
unlet s:cursor
unlet s:ct_bg s:ct_surface s:ct_fg s:ct_muted s:ct_yellow s:ct_green
unlet s:ct_lime s:ct_orange s:ct_blue s:ct_red
delfunction s:hi
delfunction s:link
