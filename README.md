<p align="center"><img src="https://raw.githubusercontent.com/userback/widget-js/master/logo.svg" alt="Logo" height="120px" /></p>
<h1 align="center">Userback Widgets</h1>
<p align="center">A Monolithic repository for [Userback.io](https://userback.io) npm packages :package:</p>

<p align="center">
<img alt="ci" src="https://github.com/userback/widget-js/workflows/main/badge.svg?branch=master">
<img alt="version" src="https://img.shields.io/npm/v/@userback/widget.svg" />
<img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/@userback/widget">
<img alt="known vulnerabilities" src="https://snyk.io/test/github/userback/widget-js/badge.svg">
</p>

## Packages
- [@userback/widget](widget-js/)
- [@userback/react](widget-react/)
- [@userback/vue](widget-vue/)

## Quickstart
After cloning the repo, you can install all dependencies and build the widgets with:
```yarn && yarn build```

After which you can run an example package using `yarn start:js` or `yarn start:react`.

To provide your api token, create a `.env` file containing your Userback api key like the following: 
``` sh
VITE_UB_TOKEN=XXXxxxXXX
```

## Documentation
For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)

## @TODO
- Publish 📦🔥
- Add named functions
- Flush out Documentation
- Jest unit testing
- Playwright e2e testing
