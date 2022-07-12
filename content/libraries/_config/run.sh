#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

declare -a products=(
  "dotnet"
  "go"
  "java"
  "nodejs"
  "php"
  "python"
)

for i in "${products[@]}"
do
  gotemplate run \
    --import ./_config/${i}.json \
    --source ./_template \
    --target ./${i}/documentation \
    --base \
    --overwrite \
    $(cd _template && find . -type f)
done

exit 0