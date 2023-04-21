ZINIT_HOME="${HOME}/.local/share/zinit/zinit.git"
if [ ! -d $ZINIT_HOME ]; then
  git clone https://github.com/zdharma-continuum/zinit.git "$ZINIT_HOME"
fi
source "${ZINIT_HOME}/zinit.zsh"

zinit load "zsh-users/zsh-syntax-highlighting"
zinit load "zsh-users/zsh-autosuggestions"
zinit load "zsh-users/zsh-history-substring-search"
if zinit loaded "zsh-users/zsh-history-substring-search" >> /dev/null; then
  bindkey '^[[A' history-substring-search-up
  bindkey '^[[B' history-substring-search-down
fi
zinit ice from"github"
zinit load "mafredri/zsh-async"
zinit ice pick"pure.zsh" from"github" as"theme"
zinit load "sindresorhus/pure"
if zinit loaded "sindresorhus/pure" >> /dev/null; then
  zstyle :prompt:pure:git:fetch only_upstream yes
  zstyle :prompt:pure:git:stash show yes
fi