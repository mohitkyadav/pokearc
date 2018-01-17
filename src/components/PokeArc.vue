<template>
  <div class="container">
    <md-progress-bar id="progress-bar" md-mode="indeterminate"></md-progress-bar>
    <md-dialog-alert
      :md-active.sync="popup"
      md-content="Done, refresh the page to find your favourites."
      md-confirm-text="Cool!" />
    <md-content class="md-scrollbar">
      <ul>
        <li v-for="pokemon in pokemons">
          <md-card md-with-hover class="md-elevation-20">
            <md-card-media>
              <img style="height:180px;width:180px;" v-bind:src="pokemon.sprites.front_default" alt="People">
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{ pokemon.name }}</div>
              <div class="md-subhead">Moves : {{ pokemon.moves.length }}</div>
            </md-card-header>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <div>
                    <md-button v-on:click="addToFav(pokemon.id)" @click="popup = true" class="md-icon-button">
                        <md-icon>favorite<md-tooltip md-direction="bottom">Add to favorite</md-tooltip></md-icon>
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
        </li>
      </ul>
      <md-button class="md-dense md-raised md-primary" v-on:click='getMorePokemons()'>Load more Pokemons</md-button>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'PokeArc',
  data () {
    return {
      pokemons: [],
      favPokemon: [],
      limit: 5,
      popup: false,
      offset: 0
    }
  },
  methods: {
    getPokemons: function (limit, offset) {
      this.offset += offset
      var url = 'https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + this.offset
      this.$http.get(url)
      .then(function (data) {
        var i = 0
        while (i < this.limit) {
          this.getPokemon(data.body.results[i].url)
          i++
        }
      })
    },
    getMorePokemons: function () {
      this.showProgressBar()
      this.getPokemons(5, 5)
    },
    getPokemon: function (url) {
      this.$http.get(url)
      .then(function (data) {
        this.pokemons.push(data.body)
      }).then(function () {
        if (this.pokemons.length === this.limit + this.offset) {
          this.hideProgressBar()
        }
      })
    },
    hideProgressBar: function () {
      document.getElementById('progress-bar').style.visibility = 'hidden'
    },
    showProgressBar: function () {
      document.getElementById('progress-bar').style.visibility = 'visible'
    },
    addToFav: function (pokeid) {
      if (this.favPokemon.indexOf(pokeid) < 0) {
        this.favPokemon.push(pokeid)
      } else {
        this.favPokemon.pop(this.favPokemon.indexOf(pokeid))
      }
      localStorage.setItem('favPokemon', JSON.stringify(this.favPokemon))
      this.favPokemon = JSON.parse(localStorage.getItem('favPokemon'))
    }
  },
  beforeMount () {
    if (localStorage.getItem('favPokemon')) {
      this.favPokemon = JSON.parse(localStorage.getItem('favPokemon'))
    }
    this.getPokemons(5, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.md-body-2, li, h1, h2, .md-title {
  text-shadow: 2px 2px 5px black;
}
.container {
  padding: 0.05%;
}
.card-expansion {
    height: 480px;
}
.md-card {
    width: 300px;
    margin: 6px;
    display: inline-block;
    vertical-align: top;
}
.md-title, .capitalize {
  text-transform: capitalize;
}
.md-content {
    max-width: 100%;
    height: 650px;
    max-height: 650px;
    overflow: auto;
}
</style>
