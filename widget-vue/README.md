# @userback/vue
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Vue2 or Vue3 application.

## Installation
`npm i @userback/vue` or `yarn add @userback/vue`

## Quickstart

To setup the plugin simply use `App.use` to install Userback into the global scope under `$userback`
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

# Vue2

Vue2 is also supported using the `Vue.prototype`:
``` javascript
import Vue from 'vue';
import UserbackPlugin from '@userback/vue';

Vue.use(UserbackPlugin, { token });
new Vue({ render: (h) => h(App) }).$mount('#app');
```

Like in Vue3, you can use `$userback` globally:
``` vue
<template>
  <div id="app">
    <button type="button" v-on:click="$userback.open('bug')">Open Bugs</button>
    <button type="button" v-on:click="$userback.open('general', 'screenshot')">Screenshot me!</button>
  </div>
</template>
```

For more information about available configuration settings and and functions available, see our [Javascript API](https://support.userback.io/en/articles/5209252-javascript-api)
