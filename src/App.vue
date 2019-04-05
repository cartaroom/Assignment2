<template>
<div id="app">
<img alt="CartaRoom logo" href="#/" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/host-list">Host</router-link> |
      <router-link to="/patron-list">Patron</router-link> |
      <router-link to="/room-list">Room</router-link>
    </div>
<router-view></router-view>
</div>
</template>

<script>
export default {
name: 'app',
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
