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

  plugins(
    "deno"
    "golang"
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
  asdf plugin add "${plugins[@]}"
  asdf install "${plugins[@]}" latest
  asdf global "${plugins[@]}" latest
else
  softwareupdate -ia

  brew bundle check

  ./local/bin/sync-local vscode

  vagrant plugin update vagrant-parallels

  asdf plugin update --all

  zinit self-update
  zinit update
fi

brew cleanup

../setup.sh

cat ../vscode/extensions.txt | xargs -L 1 code --install-extension