echo "Start building"

vuepress build .

echo "Build completed"

rm -fr docs
mkdir docs

echo "copy to docs/ "
cp -fr .vuepress/dist/* docs
rm -fr .vuepress/dist
