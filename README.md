# Userback Widgets

A Monolithic repo for Userback.io npm packages:

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
- Finish types
- Publish 📦🔥
- Add named functions
- Flush out Documentation
- Jest unit testing
- Playwright e2e testing
