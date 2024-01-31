### Publish package to npm:

Login to npm
* npm login

Update package version
* npm version <major|minor|patch>

New commit can be seen for version update from git log

Push it to repo with tag
* git push origin main --tag

Publish updated package
* npm publish --access public

Semver cheatsheet: https://devhints.io/semver