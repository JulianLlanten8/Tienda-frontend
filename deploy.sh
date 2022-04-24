#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# open terminal git bash y execute next command to deploy chmod +x deploy.sh && ./deploy.sh || npm run deploy
# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/JulianLlanten8/Tienda-frontend.git master:gh-pages


cd -