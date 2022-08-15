<p align="center"><img src="https://raw.githubusercontent.com/userback/widget-js/master/logo.svg" alt="Logo" height="32px" /></p>

# Userback Widgets
:package: A Monolithic repository for [Userback.io](https://www.userback.io) npm packages

<p>
<img alt="version" src="https://img.shields.io/github/package-json/v/userback/widget-js" />
<img alt="ci status" src="https://img.shields.io/github/workflow/status/userback/widget-js/Userback%20Widgets">
<img alt="known vulnerabilities" src="https://snyk.io/test/github/userback/widget-js/badge.svg">
<img alt="license" src="https://img.shields.io/github/license/userback/widget-js" />
</p>

## Packages
- [@userback/widget](widget-js/)
- [@userback/react](widget-react/)
- [@userback/vue](widget-vue/)

## Developing and running examples
After cloning the repo, you can install all dependencies and build the widgets with:
```yarn && yarn build```

After which you can run an example package using `yarn start:js` or `yarn start:react`.

To provide your api token, create a `.env` file containing your Userback api key like the following: 
``` sh
VITE_UB_TOKEN=XXXxxxXXX
```

### End to End Testing
Test coverage is mainly achieved through playwright and docker compose. In order to run the e2e test suite run the following:

``` sh
yarn && yarn build
docker compose up -d
docker compose build playwright
docker compose run playwright
```

## Documentation
Refer to each of the packages listed above for framework specific documentation and examples. For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)
