<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
//导入导航头
import layout from './layout'

export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
