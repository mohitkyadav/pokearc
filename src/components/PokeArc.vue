<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<md-button v-on:click='getFighters()'>
      Magic
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'PokeArc',
  data () {
    return {
      msg: 'Pokemon Archive'
    }
  },
  methods: {
    getFighters: function () {
      this.$http.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(function (data) {
        console.log(data)
      })
    }
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
color: red;
a {
}
</style>
