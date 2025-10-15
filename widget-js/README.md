# @userback/widget
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Javascript or Typescript application.

## Installation
`npm i @userback/widget`

or

`yarn add @userback/widget`

## Quickstart

``` javascript
import Userback from '@userback/widget';
Userback('**USERBACK_TOKEN**', options);
```

## Error Handling

The widget now includes comprehensive error handling to help you debug initialization issues:

### Timeout Protection
By default, the widget will timeout after 30 seconds if initialization doesn't complete. This prevents promises from hanging indefinitely when a domain isn't allowed. You can customize this timeout:

``` javascript
Userback('**USERBACK_TOKEN**', {
  init_timeout: 60000 // 60 seconds
});
```

### Error Callback
You can provide an `on_error` callback to handle initialization errors:

``` javascript
Userback('**USERBACK_TOKEN**', {
  on_error: (error) => {
    console.error('Userback failed to initialize:', error.message);
    // Handle the error (e.g., show a fallback contact form)
  }
});
```

### Safe Method Wrappers
The module exports safe wrapper functions that provide helpful error messages when called on an uninitialized widget:

``` javascript
import { safeOpen, safeShow, safeHide, safeShowLauncher, safeHideLauncher } from '@userback/widget';

// These will throw descriptive errors if the widget isn't initialized
safeOpen('bug');
safeShow();
```

Common error scenarios:
- Domain not allowed in project settings
- Invalid token
- Network errors loading the widget script

## Documentation

For full usage instructions, examples, and API reference, please visit the [official Userback NPM integration guide](https://docs.userback.io/docs/npm).
