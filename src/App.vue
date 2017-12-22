<template>
  <div id="app">
    <h1 class="md-display-1">Pokemon Archive</h1>
    <md-content class="md-scrollbar">
      <router-view/>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
