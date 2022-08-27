#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

declare -a products=(
  # "bridge"
  "credentials"
  "crossrefs"
  "iam"
  "identity"
  "image"
  "knowledge"
  "library"
  "multimedia"
  # "payment"
  "product"
  "release"
  # "resourcemanager"
  "tracker"
  "vision"
  "webcache"
  "webpage"
  # "websearch"
)

# This is necessary because `yarn generate:openapi` doesn't generate all docs as expected.
for i in "${products[@]}"
do
  rm -rf "content/products/${i}/documentation/docs/reference/rest"
  PRODUCTS=${i}/documentation yarn generate:openapi
done

exit 0