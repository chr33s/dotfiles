#!/usr/bin/env sh

set -eu

root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

if ! command -v mise >/dev/null 2>&1; then
  curl https://mise.run | sh
fi

export PATH="$HOME/.local/bin:/opt/homebrew/bin:$PATH"

cd "$root"
mise trust "$root/mise.toml"
mise trust "$root/config/mise/config.toml"
exec mise bootstrap --yes "$@"
