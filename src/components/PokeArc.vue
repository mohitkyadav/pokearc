<template>
  <div class="container">
    <h1 class="md-display-2">{{ msg }}</h1>
    <ul>
      <li v-for="pokemon in pokemons">
        <md-card class="md-elevation-20">
          <md-card-media>
            <img style="height:220px;width:200px;" v-bind:src="pokemon.sprites.front_default" alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{ pokemon.name }}</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button class="md-icon-button">
                  <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                <span class="md-body-2">
                  Weight: {{ pokemon.weight }}
                  <br/>
                  Base experience: {{ pokemon.base_experience }}
                </span>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'PokeArc',
  data () {
    return {
      msg: 'Pokemon Archive',
      pokemons: [],
      next: ''
    }
  },
  methods: {
    getPokemons: function () {
      this.$http.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(function (data) {
        for (var pokemon in data.body.results) {
          this.getPokemon(parseInt(pokemon) + 1)
        }
      })
    },
    getPokemon: function (pokemon) {
      var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
      this.$http.get(url)
      .then(function (data) {
        this.pokemons.push(data.body)
      })
    }
  },
  beforeMount () {
    this.getPokemons()
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
.container {
  padding: 0.05%;
}
.card-expansion {
    height: 480px;
}
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
