# @userback/widget
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Javascript or Typescript application.

## Installation
`npm i @userback/widget` or `yarn add @userback/widget`

## Quickstart

``` javascript
import Userback from '@userback/widget';
Userback('**USERBACK_TOKEN**', options);
```

## Examples
Show the Userback Widget with user data identified.
``` javascript
const options = {
  user_data: {
    id: "123456",
    info: {
      name: "someone",
      email: "someone@example.com"
    }
  }
};

Userback('**USERBACK_TOKEN**', options);
```

Show the widget on clicking a custom button.
``` javascript
Userback(access_token, { autohide: true }).then(ub => {
    document.querySelector('.my-own-help-button').addEventListener('click', function() {
        ub.show();
    });
});
```

After initialisation, you can use the named function `getUserback` to get a reference to the UserbackWidget.
``` javascript
import { getUserback } from '@userback/widget';

document.querySelector('button.screenshot').addEventListener('click', (event) => {
    event.preventDefault();
    getUserback().open('bug', 'screenshot');
});
```


For more information about available configuration settings and and functions available, see our [Javascript API](https://docs.userback.io/reference/javascript-api-overview)
