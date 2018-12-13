<template lang="html">
  <div id="FindPoke container">
    <md-progress-bar id="search-progress-bar" md-mode="indeterminate"></md-progress-bar>
    <md-toolbar md-elevation="0" class="md-transparent">
      <div class="md-toolbar-row">
        <md-field class="search">
         <label>Enter Pokemon name or id</label>
         <md-input  v-on:keyup.enter="searchPokemon()" v-model="query"></md-input>
        </md-field>
        <md-button id="search-btn" class="md-icon-button md-fab md-primary" v-on:click="searchPokemon()"><md-icon>search</md-icon><md-tooltip md-direction="bottom">Search</md-tooltip></md-button>
      </div>
    </md-toolbar>
    <md-content class="md-scrollbar">
      <div class="not-found" v-if="err">
        <md-empty-state>
          <h2 class="md-display-1">Oops.. it's a {{ err }}.</h2>
        </md-empty-state>
      </div>
      <div class="not-found" v-if="!pokemon && !err">
        <md-empty-state>
          <h2 class="md-display-1">You haven't searched yet. Try searching for any ID (numeric between 1 and 802 inclusive) or name of a pokemon, "Charizard".</h2>
        </md-empty-state>
      </div>
      <md-card md-with-hover v-if="pokemon && !err" class="md-elevation-24">
        <md-card-media>
          <img style="height:180px;width:180px;" v-bind:src="(settings.showShiny) ? pokemon.sprites.front_shiny : pokemon.sprites.front_default" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{ pokemon.name }}</div>
          <div class="md-subhead">Moves : {{ pokemon.moves.length }}</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button v-on:click="toggleFavourite(pokemon.id)" class="md-icon-button">
                  <md-icon v-if="favourites.includes(pokemon.id)">
                    favorite<md-tooltip md-direction="bottom">Remove from favourites</md-tooltip>
                  </md-icon>
                  <md-icon v-else>
                    favorite_border<md-tooltip md-direction="bottom">Add to favorites</md-tooltip>
                  </md-icon>
              </md-button>
            </div>

            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down<md-tooltip md-direction="bottom">Stats</md-tooltip></md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              <span class="md-body-2">
                Weight: {{ pokemon.weight }}
                <br/>
                Base experience: {{ pokemon.base_experience }}
                <br/>
                <ul  v-for="stat in pokemon.stats">
                  <li class="capitalize">
                    {{ stat.stat.name }} : {{ stat.base_stat }}
                  </li>
                </ul>
              </span>
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
      <div class="full-control" v-if="pokemon && !err">
        <md-list>
          <md-list-item md-expand>
            <md-icon>whatshot</md-icon>
            <span class="md-list-item-text">Moves</span>

            <md-list slot="md-expand">
              <md-list-item v-for="move in pokemon.moves" :key="move.move.name" class="md-inset"><span class="capitalize">{{ removeDashes(move.move.name) }}</span></md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <md-icon>videogame_asset</md-icon>
            <span class="md-list-item-text">Game Indices</span>

            <md-list slot="md-expand">
              <md-list-item v-for="index in pokemon.game_indices" :key="index.version.name" class="md-inset"> #{{index.game_index}} in  <span class="capitalize">{{ removeDashes(index.version.name) }}</span> </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <span class="md-list-item-text">Type</span>

            <md-list slot="md-expand">
              <md-list-item v-for="type in pokemon.types" :key="type.type.name" class="md-inset">{{ type.type.name }}</md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'FindPoke',
  props: ['settings', 'favourites'],
  data () {
    return {
      pokemon: null,
      err: null,
      query: ''
    }
  },
  methods: {
    getPokemon: function (url) {
      this.$http.get(url)
      .then(function (data) {
        this.pokemon = data.body
      }).then(function () {
        if (this.pokemon !== null) {
          this.err = null
          this.hideProgressBar()
          this.clickStop()
        }
      }).catch(error => {
        this.hideProgressBar()
        this.err = error.status
      })
    },
    toggleFavourite: function (pokeid) {
      this.$emit('favourite', pokeid)
    },
    searchPokemon: function () {
      document.getElementById('search-btn').classList.add('md-dense')
      this.showProgressBar()
      if (this.query === '') {
        this.query = '1'
      }
      this.query = this.query.toLowerCase()
      var url = 'https://pokeapi.co/api/v2/pokemon/' + this.query + '/'
      this.getPokemon(url)
    },
    hideProgressBar: function () {
      document.getElementById('search-progress-bar').style.visibility = 'hidden'
    },
    showProgressBar: function () {
      document.getElementById('search-progress-bar').style.visibility = 'visible'
    },
    clickStop: function () {
      document.getElementById('search-btn').classList.remove('md-dense')
    },
    removeDashes: function (inputString) {
      return inputString.replace('-', ' ')
    }
  },
  mounted () {
    this.hideProgressBar()
  }
}
</script>

<style scoped>
  .search {
    max-width: 100%;
  }
  .card-expansion {
      height: 480px;
  }
  .md-card {
      width: 300px;
      margin: 4px;
      vertical-align: bottom;
      float: right;
  }
  .md-title, .capitalize {
    text-transform: capitalize;
  }
  .md-content {
      max-width: 100%;
      height: 588px;
      max-height: 588px;
      overflow: auto;
  }
  .not-found {
    position: absolute;
    width: 100%;
    margin: 50px auto;
  }
  .container {
    padding: 0.05%;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .md-body-2, li {
    text-shadow: 2px 2px 5px black;
  }
  .full-control > .md-list {
    width: 60%;
    max-width: 100%;
    height: 600px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }
</style>
