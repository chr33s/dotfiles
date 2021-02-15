#!/usr/bin/env zsh

function datauri() {
  local mimeType=$(file -b --mime-type "$1");
  if [[ $mimeType == text/* ]]; then
    mimeType="${mimeType};charset=utf-8";
  fi
  echo "data:${mimeType};base64,$(openssl base64 -in "$1" | tr -d '\n')";
}

function extract () {
  if [ -f $1 ] ; then
    case $1 in
    *.tar.bz2)   tar xjf $1     ;;
    *.tar.gz)    tar xzf $1     ;;
    *.bz2)       bunzip2 $1     ;;
    *.rar)       unrar e $1     ;;
    *.gz)        gunzip $1      ;;
    *.tar)       tar xf $1      ;;
    *.tbz2)      tar xjf $1     ;;
    *.tgz)       tar xzf $1     ;;
    *.zip)       unzip $1       ;;
    *.Z)         uncompress $1  ;;
    *.7z)        7z x $1        ;;
    *)     echo "'$1' cannot be extracted via extract()" ;;
    esac
   else
    echo "'$1' is not a valid file"
   fi
}

function scrub() {
  if [ -f $1 ] && [[ "$1" == *.zip ]] ; then
    zip -qd $1 __MACOSX/\*
    zip -qd $1 \*/.DS_Store
    unzip -vl $1
  else
    echo "'$1' invalid file"
  fi
}

function server() {
  local port="${1:-8000}";
  sleep 1 && open "http://localhost:${port}/" &
  python -m http.server ${port}
}

function random() {
  echo $(openssl rand -${2:-base64} ${1:-32})
}

function spoof() {
  sudo ifconfig en0 ether $(openssl rand -hex 6 | sed 's%\(..\)%\1:%g; s%.$%%')
}

function audit() {
  sudo praudit -l /dev/auditpipe
}

function todo() {
  find ./ -type f -print | xargs grep 'TODO\|FIXME\|IDEA'
}

function rm_ds_store() {
  find ${PWD} -name ".DS_Store" -depth -exec rm {} \;
}

function brew_rm() {
  brew deps $1 | xargs brew remove --ignore-dependencies
  brew remove $1
  brew missing | cut -d: -f2 | sort | uniq | xargs brew install
}

function dotenv() {
  export $(cat .env | xargs)
}

function pipx() {
  pip uninstall $1
  for dep in $(pip show $1 | grep Requires | sed 's/Requires: //g; s/,//g') ; do pip uninstall -y $dep ; done
}

function encrypt() {
  tar -zcvf $1.tar.gz $1 && \
    openssl enc -aes-256-cbc -salt -in $1.tar.gz -out $1.tar.gz.enc && \
    rm $1.tar.gz
}

function decrypt() {
  openssl enc -aes-256-cbc -d -in $1.tar.gz.enc -out $1.tar.gz && \
    tar -zxvf $1.tar.gz && \
    rm $1.tar.gz
}

function uuid() {
  uuidgen | tr '[:upper:]' '[:lower:]'
}

function password() {
  LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c ${1:-24}
}

function json() {
  if [ -p /dev/stdin ]; then
    python -mjson.tool
  else
    python -mjson.tool <<< "$*"
  fi
}

function browsers(){
  chrome $1
  firefox $1
  safari $1
}

function manp() {
  man -t $1 | open -f -a /Applications/Preview.app
}

function tre(){
  tree -aC -I '.git|node_modules|bower_components|.DS_Store' --dirsfirst "$@"
}