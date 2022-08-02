<script setup lang="ts">
 import { ref } from 'vue'
 const count = ref(0)
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button type="button" @click="count++">count is {{ count }}</button>
  <hr />
  <button type="button" @click="$userback.show()">Show</button>
  <button type="button" @click="$userback.hide()">Hide</button>
  <hr />
  <button type="button" @click="$userback.open('bug')">Open Bugs</button>
  <button type="button" @click="$userback.open('general', 'screenshot')">Screenshot me!</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
