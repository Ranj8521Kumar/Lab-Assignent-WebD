<template>
  <div id="app">
    <StopwatchTimer />
  </div>
</template>

<script>
import StopwatchTimer from './components/StopwatchTimer.vue';

export default {
  name: 'App',
  components: {
    StopwatchTimer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
