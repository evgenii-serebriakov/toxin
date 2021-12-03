set -e

yarn build

cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:evgenii-serebriakov/toxin.git master:gh-pages

cd -