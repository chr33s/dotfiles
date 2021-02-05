#!/usr/bin/env sh

sudo -v
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

if test ! $(which brew); then
  # MacOS

  scutil --set ComputerName `whoami`
  scutil --set HostName `whoami`
  scutil --set LocalHostName `whoami`

  defaults(
    "/Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string `whoami`"
    "com.apple.dock mouse-over-hilite-stack -bool true"
    'com.apple.print.PrintingPrefs "Quit When Finished" -bool true'
    "com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true"
    "-currentHost NSGlobalDomain com.apple.mouse.tapBehavior -int 1"
    "NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false"
    "NSGlobalDomain com.apple.mouse.tapBehavior -int 1"
    "com.apple.desktopservices DSDontWriteNetworkStores -bool true"
    "com.apple.dock minimize-to-application -bool true"
    "com.apple.dock enable-spring-load-actions-on-all-items -bool true"
    "com.apple.dock mru-spaces -bool false"
    'com.apple.Safari HomePage -string "about:blank"'
    "com.apple.Safari ShowFavoritesBar -bool false"
    "com.apple.Safari IncludeDevelopMenu -bool true"
    "com.apple.Safari AutoOpenSafeDownloads -bool false"
    "com.apple.terminal StringEncodings -array 4"
    "NSGlobalDomain WebKitDeveloperExtras -bool true"
    "com.apple.CrashReporter DialogType none"
    "com.apple.iTunes dontAutomaticallySyncIPods -integer 1"
    "com.apple.TextEdit RichText -int 0"
    "-g AppleInterfaceStyleSwitchesAutomatically -bool true"
  )
  defaults write "${defaults[@]}"

  macos-hidden-show
  chflags -h nohidden ${HOME}/Library

  /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on || true
  /usr/libexec/ApplicationFirewall/socketfilterfw --setblockall on || true

  softwareupdate -ia

  # Brew

  xcode-select --install
  sudo xcodebuild -license

  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew doctor
  brew install mas
  mas signin
  brew bundle

  # ASDF

  plugins=(
    golang
    java
    nodejs
    python
    ruby
  )
  asdf plugin-add ${plugins[@]}

  bash -c '${ASDF_DATA_DIR:=${HOME}/.asdf}/plugins/nodejs/bin/import-release-team-keyring'

  versions=$(< ${PWD}/tool-versions)  
  asdf install "${versions[@]}"
  asdf global "${versions[@]}"
else
  softwareupdate -ia

  brew bundle check

  asdf upgrade

  ./bin/sync/vscode
fi

brew cleanup

./vscode/extensions.sh
