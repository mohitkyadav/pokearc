<template>
  <div id="app">
    <md-tabs md-alignment="fixed" class="md-elevation-24">
     <md-tab id="tab-home" md-icon="home" md-label="Pokemons"></md-tooltip><PokeArc/></md-tab>
     <md-tab id="tab-pages" md-icon="search" md-label="Find Pokemon"><FindPoke/></md-tab>
     <md-tab id="tab-posts" md-icon="favorite" md-label="Favorites"></md-tab>
     <md-tab id="tab-favorites" md-icon="pages" md-label="About"></md-tab>
    </md-tabs>
    <div class="separator">
      <md-button v-on:click="openUrl(githubProfile)" class="md-icon-button md-raised">
        <md-avatar class="md-large">
          <img v-bind:src="avtarUrl" alt="Me">
          <md-tooltip md-direction="right">Click to see my github profile.</md-tooltip>
        </md-avatar>
      </md-button>
      <div class="github-buttons">
        <a class="github-button" href="https://github.com/mohitkyadav/pokearc" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star PokeArc on GitHub">Give it a star on GitHub</a>
        <a class="github-button" href="https://github.com/mohitkyadav/pokearc/issues" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="PokeArc on GitHub">Issue</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      avtarUrl: 'static/avtar.jpg',
      githubProfile: 'https://github.com/mohitkyadav'
    }
  },
  methods: {
    openUrl: function (url) {
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
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
.separator{
    margin-top: 10px;
}
.github-buttons {
  margin-top: 10px;
  margin-bottom: 10px;
}
.md-tab {
  padding: 0;
}
</style>
