<template>
  <div class="contain">
    <md-progress-bar id="progress-bar" md-mode="indeterminate"></md-progress-bar>
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
                      <md-icon v-if="favourites && favourites.includes(pokemon.id)">
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
                    <li class="capitalize full-w align-l">
                      Weight :
                      <span class="align-r">
                        {{ pokemon.weight }}
                      </span>
                    </li>

                    <br/>

                    <li class="capitalize full-w align-l">
                      Base experience :
                      <span class="align-r">
                        {{ pokemon.base_experience }}
                      </span>
                    </li>

                    <br/>
                    <ul class="align-l" v-for="stat in pokemon.stats" :key="stat.id">
                      <li class="capitalize full-w">
                        <span>
                          {{ stat.stat.name }} :
                        </span>
                        <span class="align-r">
                          {{ stat.base_stat }}
                        </span>
                      </li>
                    </ul>
                  </span>
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card>
        </li>
      </ul>
      <md-button class="md-dense md-raised md-primary loadB" v-on:click='getMorePokemons()'>Load more Pokemons</md-button>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'PokeArc',
  props: ['settings', 'favourites'],
  data () {
    return {
      pokemons: [],
      limit: 5,
      offset: 0
    }
  },
  methods: {
    getPokemons: function (limit, offset) {
      this.offset += offset
      var url =
        'https://pokeapi.co/api/v2/pokemon/?limit=' +
        limit +
        '&offset=' +
        this.offset
      this.$http.get(url).then(function (data) {
        var i = 0
        var offsetLimit = i
        while (i < (offsetLimit + this.limit)) {
          console.log(' i = ' + i)
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
      this.$http
        .get(url)
        .then(function (data) {
          this.pokemons.push(data.body)
        })
        .then(function () {
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
    toggleFavourite: function (pokeid) {
      this.$emit('favourite', pokeid)
    },
    getRandomInt: function (max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  },
  beforeMount () {
    this.getPokemons(5, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.md-body-2,
li,
h1,
h2,
.md-title {
  text-shadow: 2px 2px 5px black;
}
.contain {
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
.md-title,
.capitalize {
  text-transform: capitalize;
}
template {
  min-height:100%;
}
.align-l {
  text-align: left !important;
}
.align-r {
  float: right !important;
}
.full-w {
  width: 100%;
}
.md-content {
  max-width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: auto;
  margin-bottom: 150%;
}
.layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.loadB {
  margin-bottom: 60%;
}
.card {
   margin: 0;
}
@media all and (min-width: 1500px) {
  .md-card {
  width: 280px;
  }

.loadB {
  margin-bottom: 20%;
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
