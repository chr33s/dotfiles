#!/usr/bin/env sh

set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

export PATH="$HOME/.local/bin:/opt/homebrew/bin:$PATH"

# https://mise.run is a self-contained installer that needs no Homebrew, which is
# what lets mise.toml own the Homebrew install itself (see
# [bootstrap.hooks.pre-packages], step 1.7). Do not switch this to `brew install
# mise`: that would put Homebrew back in front of mise and make this script,
# rather than the config, the thing that bootstraps the machine.
#
# mise is intentionally absent from [bootstrap.packages] so nothing installs a
# second copy over this one.
if ! command -v mise >/dev/null 2>&1; then
  curl -fsSL https://mise.run | sh
fi

cd "$root"
mise trust "$root/mise.toml"
mise trust "$root/config/mise/config.toml"

# `--yes` only skips the confirmation prompt; it does NOT resolve conflicts with
# existing files. Pass --force-dotfiles to replace them (see [dotfiles] in
# mise.toml — every mapping is a single file, so nothing is recursively removed).
exec mise bootstrap --yes "$@"
