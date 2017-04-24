<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
</style>

<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <intro></intro> -->
    <!-- <contentnew></contentnew> -->
    <!-- <sidebar></sidebar> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from './components/Intro'
import Sidebar from './components/Sidebar'
import Contentnew from './components/Contentnew'
export default {
  name: 'app',
  components: {
    Intro,
    Sidebar,
    Contentnew
  }
}
</script>
