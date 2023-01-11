<p align="center"><img src="https://static.userback.io/image/logo_full.svg" alt="Logo" height="32px" /></p>

# Userback Widgets
:package: A Monolithic repository for [Userback.io](https://www.userback.io) npm packages

<p>
<img alt="version" src="https://img.shields.io/github/package-json/v/userback/widget-js" />
<img alt="ci status" src="https://img.shields.io/github/actions/workflow/status/userback/widget-js/main.yml?branch=master">
<img alt="known vulnerabilities" src="https://snyk.io/test/github/userback/widget-js/badge.svg">
<img alt="license" src="https://img.shields.io/github/license/userback/widget-js" />
</p>

## Packages
- [@userback/widget](widget-js/)
- [@userback/react](widget-react/)
- [@userback/vue](widget-vue/)
- [@userback/vue2](widget-vue2/)

## Developing and running examples
After cloning the repo, you can install all dependencies and build the widgets with:
```yarn && yarn build```

After which you can run an example package using `yarn start:widget` or `yarn start:react`.

To provide your api token, create a `.env` file containing your Userback api key like the following: 
``` sh
VITE_UB_TOKEN=XXXxxxXXX
```

### End to End Testing
Test coverage is mainly achieved through playwright and docker compose. In order to run the e2e test suite run the following:

``` sh
yarn test:docker
```

## Documentation
Refer to each of the packages listed above for framework specific documentation and examples. For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)

## Release Process

1. Checkout `develop` against the commit you plan to release.
2. Build a production build with `yarn build`.
3. Ensure CI is green and Local testing are successful (eg: `yarn test`).
4. Update all versions with `yarn version:all (major/minor/patch)`.
5. `git commit -m "vX.X.X"` and `git tag vX.X.X` where X.X.X is your new version.
6. `yarn publish` to publish all packages to the npm repo.
7. `git push && git push --tags` to push the release to github.
8. Create a github release :tada:
