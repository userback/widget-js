# @userback/vue2
The official NPM module for embedding the [Userback.io](https://userback.io) widget into your Vue2 or Vue3 application. If you are using Vue3 we also have [@userback/vue3](https://github.com/userback/widget-js/tree/develop/widget-vue3)

## Installation
`npm i @userback/vue2` or `yarn add @userback/vue2`

## Quickstart
To use the Userback plugin you just need to utilize `Vue.use` and provide your token like so:
``` javascript
import Vue from 'vue';
import UserbackPlugin from '@userback/vue2';

Vue.use(UserbackPlugin, { token: USERBACK_TOKEN });
new Vue({ render: (h) => h(App) }).$mount('#app');
```

You can access the Userback api via the `Vue.prototype.$userback` object:
``` vue
<template>
  <div id="app">
    <button type="button" v-on:click="$userback.open('bug')">Open Bugs</button>
    <button type="button" v-on:click="$userback.open('general', 'screenshot')">Screenshot me!</button>
  </div>
</template>
```

For more information about available configuration settings and and functions available, see our [Javascript API](https://docs.userback.io/reference/javascript-api-overview)
