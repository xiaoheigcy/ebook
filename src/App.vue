<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <intro></intro>
  </div>
</template>

<script>
import Intro from './components/Intro'
export default {
  name: 'app',
  components: {
    Intro
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
</style>
