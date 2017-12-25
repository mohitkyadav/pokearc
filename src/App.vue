<template>
  <div id="app">
    <md-tabs md-alignment="fixed">
     <md-tab id="tab-home" md-icon="home" md-label="Pokemons"></md-tooltip><PokeArc/></md-tab>
     <md-tab id="tab-pages" md-icon="search" md-label="Find Pokemon"><FindPoke/></md-tab>
     <md-tab id="tab-posts" md-icon="favorite" md-label="Favorites"></md-tab>
     <md-tab id="tab-favorites" md-icon="pages" md-label="About"></md-tab>
   </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scopped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 0 0 0;
}
.md-tab {
  padding: 0;
}
</style>
