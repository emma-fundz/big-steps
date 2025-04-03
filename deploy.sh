
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Setup Git config if needed (uncomment these if needed)
# git config --global user.email "your-email@example.com"
# git config --global user.name "Your Name"

# initialize a git repository if it doesn't already exist
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# replace 'USERNAME' with your GitHub username and 'REPO' with your repository name
git push -f git@github.com:USERNAME/REPO.git main:gh-pages

cd -
