# @userback/widget
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Javascript or Typescript application.

## Installation
`npm i @userback/widget` or `yarn add @userback/widget`

## Quickstart

``` javascript
import Userback from '@userback/widget'
Userback('**USERBACK_TOKEN**')
```

## Examples
Show the Userback Widget immediately after loading on the bug screen.
``` javascript
Userback(..).then(ub => {
    ub.show('bug')
})
```

Or delay showing it until later:
``` javascript
Userback(.., { autohide: true }).then(ub => {
    document.querySelector('button.show-feedback').addEventListener('click', function(){
        ub.show()
    })
})
```

Using the options object to enable native screenshots while binding screenshots to a HTML button:
``` javascript
const userback = await Userback(..., { navtive_screenshot: true })
document.querySelector('button.screenshot').addEventListener('click', (event) => {
    event.preventDefault()
    userback.open('bug', 'screenshot')
})
```

After initialisation, you can use the named function `getUserback` to get a reference to the UserbackWidget.
``` javascript
import { getUserback } from '@userback/widget'

document.querySelector('button.screenshot').addEventListener('click', (event) => {
    event.preventDefault()
    getUserback().open('bug', 'screenshot')
})
```


For more information about available configuration settings and and functions available, see our [Javascript API](https://docs.userback.io/reference/javascript-api-overview)
