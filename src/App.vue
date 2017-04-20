<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <intro></intro>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: {
    Intro,
    Sidebar
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
