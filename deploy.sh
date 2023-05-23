
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
 set -e

# 生成静态文件
# pnpm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init

 # 如果发布到 https://<USERNAME>.github.io
git remote add origin git@github.com:wyxznl/interview.git

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git remote add git@github.com:<USERNAME>/<REPO>.git main

git branch -M main
git add .
git commit -m 'steps'
git push -u origin main:gh-pages

cd -