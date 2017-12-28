<template lang="html">
  <div id="About">
    <md-content class="md-scrollbar">
      <h1>PokeArc</h1>

        <blockquote>
          <p>A Pokemon Encyclopedia</p>
        </blockquote>

        <p><a href="https://github.com/mohitkyadav/pokearc"><img src="http://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge" /></a>
        <a href="http://vuejs.org"><img src="http://forthebadge.com/images/badges/made-with-vue.svg" alt="forthebadge" /></a>
        <a href="https://github.com/mohitkyadav/pokearc"><img src="http://forthebadge.com/images/badges/uses-git.svg" alt="forthebadge" /></a></p>

        <h2>Uses</h2>

        <h3><a href="https://github.com/PokeAPI/pokeapi">PokeAPI</a>, uses the RESTful Pokémon API http://pokeapi.co, and  <a href="https://github.com/vuematerial/vue-material">vue-material</a></h3>

        <h2>Author</h2>

        <p>Mohit Kumar Yadav</p>

        <p>
          <md-button v-on:click="openUrl(twitter)" class="md-icon-button md-primary md-raised">
            <img v-bind:src="twitterSvg" alt="Me">
            <md-tooltip md-direction="left">twitter</md-tooltip>
          </md-button>
          <md-button v-on:click="openUrl(linkedIn)" class="md-icon-button md-primary md-raised">
            <img v-bind:src="linkedInSvg" alt="Me">
            <md-tooltip md-direction="down">LinkedIn</md-tooltip>
          </md-button>
          <md-button v-on:click="openUrl(github)" class="md-icon-button md-primary md-raised">
            <img v-bind:src="githubSvg" alt="Me">
            <md-tooltip md-direction="right">github</md-tooltip>
          </md-button>
        </p>

        <h2 id="contribute">Contribute</h2>

        <h3>Found a bug, please <a href="https://github.com/mohitkyadav/pokearc/issues/new">create an issue</a></h3>

        <h2 id="license">License</h2>

        <p><a href="#"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license" /></a></p>

        <blockquote>
          <p>© Mohit Kumar Yadav</p>
        </blockquote>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      twitter: 'https://twitter.com/mukulkyadav',
      linkedIn: 'https://linkedin.com/in/mohitkyadav',
      github: 'https://github.com/mohitkyadav',
      githubSvg: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      linkedInSvg: 'https://www.shareicon.net/download/2015/11/02/665921_internet.svg',
      twitterSvg: 'https://image.flaticon.com/icons/svg/34/34238.svg'
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

<style scoped lang="css">
.md-content {
  max-width: 100%;
  height: 657px;
  max-height: 657px;
  overflow: auto;
}
</style>
