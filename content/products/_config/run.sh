#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

declare -a products=(
  "bridge"
  "credentials"
  "crossrefs"
  "iam"
  "identity"
  "image"
  "knowledge"
  "library"
  "multimedia"
  "payment"
  "product"
  "release"
  "resourcemanager"
  "tracker"
  "vision"
  "webcache"
  "webpage"
  "websearch"
)

for i in "${products[@]}"
do
  gotemplate run \
    --import ./_config/${i}.yaml \
    --source ./_template \
    --target ./${i}/documentation \
    --base \
    --sprig \
    --overwrite \
    $(cd _template && find . -type f)
  
  [ -d "./_overwrite/${i}" ] && cp -r ./_overwrite/${i}/* ./${i}/documentation
done

exit 0