gotemplate run \
  --import ./_config/image.json \
  --source ./_template \
  --target ./image/documentation/docs \
  --base \
  --overwrite \
  $(cd _template && find . -type f)