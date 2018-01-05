<template>
  <div id="app">
    <md-tabs md-alignment="fixed">
     <md-tab id="tab-home" md-icon="home" md-label="Pokemons"><PokeArc/></md-tab>
     <md-tab id="tab-search" md-icon="search" md-label="Find Pokemon"><FindPoke/></md-tab>
     <md-tab id="tab-fav" md-icon="favorite" md-label="Favorites"><Favorite/></md-tab>
     <md-tab id="tab-about" md-icon="pages" md-label="About"><About/></md-tab>
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
    },
    fixPadding: function (padding) {
      document.getElementById('tab-home').style.padding = '0'
      document.getElementById('tab-search').style.padding = '0'
      document.getElementById('tab-fav').style.padding = '0'
      document.getElementById('tab-about').style.padding = '0'
    }
  },
  mounted () {
    this.fixPadding(0)
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
body {
    font-family: 'Roboto';font-size: 16px;
}
</style>
