# @userback/widget
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Javascript or Typescript application.

## Installation
`npm i @userback/widget` or `yarn add @userback/widget`

## Quickstart

``` javascript
import Userback from '@userback/widget'
Userback('**USERBACK_TOKEN**')
```

### Examples
Show the Userback Widget immediately after loading on the bug screen.
``` javascript
Userback(..).then(ub => {
    ub.show('bug')
})
```

Using options to enable native screenshots:
``` javascript
Userback(..., {
    navtive_screenshot: true
})
```

For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)
