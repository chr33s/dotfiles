#!/usr/bin/env sh

sudo -v
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

if test ! $(which brew); then
  scutil --set ComputerName `whoami`
  scutil --set HostName `whoami`
  scutil --set LocalHostName `whoami`

  defaults(
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

  xcode-select --install
  xcodebuild -license accept

  bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  eval "$(/opt/homebrew/bin/brew shellenv)"
  brew doctor
  brew install mas
  mas signin
  brew bundle

  vim +PlugInstall +qall
else
  softwareupdate -ia

  brew bundle check

  ~/.local/bin/_sync vscode

  gh extension upgrade --all

  zinit self-update
  zinit update
  
  vim +PlugUpdate +qall
fi

brew cleanup

../setup.sh

cat ../vscode/extensions.txt | xargs -L 1 code --install-extension