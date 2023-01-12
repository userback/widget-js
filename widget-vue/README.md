# @userback/vue
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Vue3 application. If you are using Vue2 we also have [@userback/vue2](https://github.com/userback/widget-js/tree/develop/widget-vue2)

## Installation
`npm i @userback/vue` or `yarn add @userback/vue`

## Quickstart
To setup the plugin simply use `App().use` to install Userback into the global scope under `$userback`
``` javascript
import UserbackPlugin from '@userback/vue'

createApp(App)
    .use(UserbackPlugin, { token: USERBACK_TOKEN })
    .mount('#app')
```

The `$userback` API can now be used throughout your application:
``` vue
<template>
  <button type="button" @click="$userback.show()">Show</button>
  <button type="button" @click="$userback.hide()">Hide</button>

  <button type="button" @click="$userback.open('bug')">Open Bugs</button>
  <button type="button" @click="$userback.open('general', 'screenshot')">Screenshot me!</button>
</template>
```

## Nuxt
We also support the Nuxt framework and have an [example](https://github.com/userback/widget-js/tree/develop/examples/nuxt) of it's usage within a project.

``` javascript
// plugins/userback.client.js
import UserbackPlugin from '@userback/vue';

export default defineNuxtPlugin((nuxtApp) => {
    const { UB_TOKEN: token } = useRuntimeConfig();
    nuxtApp.vueApp.use(UserbackPlugin, { token });
});
```

For more information about available configuration settings and and functions available, see our [Javascript API](https://docs.userback.io/reference/javascript-api-overview)
