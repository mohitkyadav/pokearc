<template>
  <div class="container">
    <md-progress-bar id="fav-progress-bar" md-mode="indeterminate"></md-progress-bar>
    <md-content class="md-scrollbar">
      <ul class="layout">
        <li v-for="pokemon in pokemons" :key="pokemon.id" class="card">
          <md-card md-with-hover class="md-elevation-20">
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
        </li>
      </ul>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'Favorite',
  props: ['settings', 'favourites'],
  data () {
    return {
      pokemons: []
    }
  },
  watch: {
    favourites: function (newFavourites, oldFavourites) {
      this.pokemons = []
      this.getPokemons()
    }
  },
  methods: {
    getPokemons: function () {
      for (var i = 0; i < this.favourites.length; i++) {
        var url = 'https://pokeapi.co/api/v2/pokemon/' + this.favourites[i] + '/'
        this.getPokemon(url)
      }
    },
    getPokemon: function (url) {
      this.$http.get(url)
      .then(function (data) {
        this.pokemons.push(data.body)
        if (this.pokemons.length === this.favourites.length) {
          this.hideProgressBar()
        }
      })
    },
    hideProgressBar: function () {
      document.getElementById('fav-progress-bar').style.visibility = 'hidden'
    },
    showProgressBar: function () {
      document.getElementById('fav-progress-bar').style.visibility = 'visible'
    },
    toggleFavourite: function (pokeid) {
      this.$emit('favourite', pokeid)
    }
  },
  beforeMount () {
    this.getPokemons()
  }
}
</script>

<style scoped lang="css">
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
  width: 230px;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
  padding-bottom: 2%;
}
.md-title, .capitalize {
  text-transform: capitalize;
}
template {
  min-height:100%;
}
.layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 15%;
}
.md-content {
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    margin-bottom: 100%;
}
.card {
   margin: 0;
}
@media all and (min-width: 1500px) {
  .md-card {
  width: 280px;
  }
}
@media all and (min-width: 1920px) {
  .card {
    margin: 0 1.2%;
  }
  .md-card {
  width: 300px;
  }
}
@media all and (min-width: 2000px) {
  .card {
    margin: 0 3%;
  }
}
@media all and (min-width: 3000px) {
  .card {
    margin: 0 6%;
  }
.md-content {
  margin-bottom: 200%;
}
}
</style>

