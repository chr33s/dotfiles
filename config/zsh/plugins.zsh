ZINIT_HOME="${HOME}/.local/share/zinit/zinit.git"
if [ ! -d $ZINIT_HOME ]; then
  git clone https://github.com/zdharma-continuum/zinit.git "$ZINIT_HOME"
fi
source "${ZINIT_HOME}/zinit.zsh"

zinit ice from"github" depth"1"
zinit ice compile'(pure|async).zsh' pick'async.zsh' src'pure.zsh'
zinit light sindresorhus/pure
zstyle :prompt:pure:git:fetch only_upstream yes
zstyle :prompt:pure:git:stash show yes
zinit light "zsh-hooks/zsh-hooks"
zinit light "zdharma-continuum/fast-syntax-highlighting"
zinit light zsh-users/zsh-completions
zinit light "zsh-users/zsh-autosuggestions"
zinit light "zsh-users/zsh-history-substring-search"
bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down