if [[ ! -d ~/.zinit ]];then
  git clone https://github.com/zdharma/zinit.git ~/.zinit/bin
fi
source ${HOME}/.zinit/bin/zinit.zsh

zinit load "zsh-users/zsh-syntax-highlighting"
zinit load "zsh-users/zsh-autosuggestions"
zinit load "zsh-users/zsh-history-substring-search"
if zinit loaded "zsh-users/zsh-history-substring-search" >> /dev/null; then
  bindkey '^[[A' history-substring-search-up
  bindkey '^[[B' history-substring-search-down
fi
zinit snippet OMZP::dotenv
zinit ice from"github"
zinit load "mafredri/zsh-async"
zinit ice pick"pure.zsh" from"github" as"theme"
zinit load "sindresorhus/pure"
if zinit loaded "sindresorhus/pure" >> /dev/null; then
  zstyle :prompt:pure:git:fetch only_upstream yes
  zstyle :prompt:pure:git:stash show yes
fi
zinit load "zsh-hooks/zsh-hooks"