<template>
  <div id="app">
    <HelloWorld/>
    <map-state-vue/>
    <Commit/>
    <Actions/>
    <ModuleA/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MapStateVue from './components/MapState.vue'
import Commit from './components/Commit.vue'
import Actions from './components/Actions.vue'
import ModuleA from './components/ModuleA.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MapStateVue,
    Commit,
    Actions,
    ModuleA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
