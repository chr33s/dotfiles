#!/usr/bin/env sh

sudo -v
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

plugins(
  "actionlint"
  "deno"
  "golang"
  "hadolint"
  "java"
  "kotlin"
  "nodejs"
  "packer"
  "python"
  "ruby"
  "rust"
  "sqlite"
  "terraform"
)

if test ! $(which brew); then
  # MacOS

  scutil --set ComputerName `whoami`
  scutil --set HostName `whoami`
  scutil --set LocalHostName `whoami`

  defaults(
    "/Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string `whoami`"
    "-g AppleInterfaceStyleSwitchesAutomatically -bool true"
    "com.apple.dock mouse-over-hilite-stack -bool true"
    'com.apple.print.PrintingPrefs "Quit When Finished" -bool true'
    "com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true"
    "com.apple.desktopservices DSDontWriteNetworkStores -bool true"
    "com.apple.dock minimize-to-application -bool true"
    "com.apple.dock enable-spring-load-actions-on-all-items -bool true"
    "com.apple.dock mru-spaces -bool false"
    'com.apple.Safari HomePage -string "about:blank"'
    "com.apple.Safari ShowFavoritesBar -bool false"
    "com.apple.Safari IncludeDevelopMenu -bool true"
    "com.apple.Safari AutoOpenSafeDownloads -bool false"
    "com.apple.terminal StringEncodings -array 4"
    "com.apple.CrashReporter DialogType none"
    "com.apple.iTunes dontAutomaticallySyncIPods -integer 1"
    "com.apple.TextEdit RichText -int 0"
    "com.apple.screencapture location -string ~/Downloads"
    "com.apple.screencapture type -string png"
    "com.apple.CrashReporter DialogType -string none"
    "com.apple.dock autohide -bool true"
    "com.apple.dock showhidden -bool true"
    "NSGlobalDomain com.apple.mouse.tapBehavior -int 1"
    "NSGlobalDomain AppleFontSmoothing -int 2"
    "NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false"
    "NSGlobalDomain WebKitDeveloperExtras -bool true"
  )
  defaults write "${defaults[@]}"

  macos-hidden-show
  chflags -h nohidden ${HOME}/Library

  flags(
    "--setglobalstate"
    "--setblockall on"
  )
  /usr/libexec/ApplicationFirewall/socketfilterfw "${flags[@]}" on || true

  softwareupdate -ia

  # Brew

  xcode-select --install
  xcodebuild -license

  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew doctor
  brew install mas
  mas signin
  brew bundle

  vagrant plugin install vagrant-parallels
  brew install docker-machine-parallels

  asdf plugin add "${plugins[@]}"
  asdf install "${plugins[@]}" latest
  asdf global "${plugins[@]}" latest
  
  vim +PlugInstall +qall
else
  softwareupdate -ia

  brew bundle check

  ~/.local/bin/_sync vscode

  vagrant plugin update

  asdf plugin update --all

  _current=$(asdf current "${plugins[@]}"  | tr -s ' ' | cut -d ' ' -f 2)
  _latest=$(asdf latest "${plugins[@]}")
  if [[ "$_current" != "$_latest" ]]; then
    asdf install "${plugins[@]}" latest
    asdf global "${plugins[@]}" latest
    asdf uninstall "${plugins[@]}" ${_current}
  fi

  zinit self-update
  zinit update
  
  vim +PlugUpdate +qall
fi

brew cleanup

../setup.sh

cat ../vscode/extensions.txt | xargs -L 1 code --install-extension