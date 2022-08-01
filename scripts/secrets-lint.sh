#!/usr/bin/env bash

for arg in "$@"
do
  relative_path="$(realpath --relative-to="$(PWD)" "$arg")"
  run=$(detect-secrets-launcher scan $relative_path)

  if [[ $run == *"ERROR"* ]]; then
    # echo first 10 lines of run
    echo "$run" | head -n 15
    exit 1
  fi
done
