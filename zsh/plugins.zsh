source ${HOME}/.zplug/init.zsh

zplug "zsh-users/zsh-syntax-highlighting"
zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-history-substring-search"
if zplug check "zsh-users/zsh-history-substring-search"; then
  bindkey '^[[A' history-substring-search-up
  bindkey '^[[B' history-substring-search-down
fi
zplug "plugins/dotenv", from:oh-my-zsh
zplug "mafredri/zsh-async", from:github
zplug "sindresorhus/pure", use:pure.zsh, from:github, as:theme
if zplug check "sindresorhus/pure"; then
  zstyle :prompt:pure:git:fetch only_upstream yes
  zstyle :prompt:pure:git:stash show yes
fi
zplug "zsh-hooks/zsh-hooks"
# zplug "~/.zsh", from:local
# zplug 'zplug/zplug', hook-build:'zplug --self-manage'
if ! zplug check --verbose; then
  zplug install
fi
zplug load # --verbose