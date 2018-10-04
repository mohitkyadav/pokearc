<template lang="html">
  <div id="Settings">
    <md-content class="md-scrollbar">
      <h1>Settings</h1>
      <md-switch v-model="localSettings.showShiny">Show Shiny</md-switch>
      <br>
      <md-switch v-model="localSettings.useLightTheme">Light theme</md-switch>
      <md-button class="md-dense md-raised md-primary" v-on:click='save()'>Save settings</md-button>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: ['settings'],
  data () {
    return {
      localSettings: {}
    }
  },
  created () {
    this.localSettings = Object.assign({}, this.settings)
  },
  methods: {
    save: function (url) {
      this.$emit('updateSettings', this.localSettings)
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
