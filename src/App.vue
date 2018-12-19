<template>
  <div id="app" v-bind:class="[ settings.toggleTheme ? 'light-theme' : 'dark-theme']">
  <div id="content">
    <md-tabs md-alignment="fixed">
     <md-tab id="tab-home" md-icon="home" md-label="Pokemons"><PokeArc :settings="settings" v-on:favourite="onFavourite" :favourites="favourites"/></md-tab>
     <md-tab id="tab-search" md-icon="search" md-label="Find Pokemon"><FindPoke :settings="settings" v-on:favourite="onFavourite" :favourites="favourites"/></md-tab>
     <md-tab id="tab-fav" md-icon="favorite" md-label="Favorites"><Favorite :settings="settings" v-on:favourite="onFavourite" :favourites="favourites"/></md-tab>
     <md-tab id="tab-about" md-icon="pages" md-label="About"><About :settings="settings"/></md-tab>
     <md-tab id="tab-settings" md-icon="settings" md-label="Settings"><Settings :settings="settings" v-on:updateSettings="onUpdateSettings"/></md-tab>
    </md-tabs>
    </div>
    <footer>
    <div class="separator md-content md-theme-default">
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
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      avtarUrl: 'static/avtar.jpg',
      githubProfile: 'https://github.com/mohitkyadav',
      settings: {
        showShiny: false,
        toggleTheme: false
      },
      favourites: []
    }
  },
  created () {
    if (localStorage.getItem('settings')) {
      let settings = JSON.parse(localStorage.getItem('settings'))
      this.settings = settings
    }
    if (localStorage.getItem('favourites')) {
      let favourites = JSON.parse(localStorage.getItem('favourites'))
      this.favourites = favourites
    }
  },
  methods: {
    onUpdateSettings: function (settings) {
      this.settings = Object.assign({}, settings)
      localStorage.setItem('settings', JSON.stringify(settings))
    },
    onFavourite: function (pokeid) {
      console.log('favourite', pokeid)
      let index = this.favourites.indexOf(pokeid)
      if (index > -1) {
        this.favourites.splice(index, 1)
      } else {
        this.favourites.push(pokeid)
      }
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    },
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
  height: 100vhxed;
  display: flex;
  flex-direction: column;
}
.separator{
    height:25%;
    padding-top: 10px;
    border-top: 1px solid #424242;
}
footer{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
#content  {
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  height: 100vh;
}

 div.dark-theme div#content {
  background-color: #424242;
  background-color: var(--md-theme-default-background, #424242);
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