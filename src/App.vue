<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>
<script>

import Header from './components/Header';
export default {
  components: {
    Header,
  }
}
</script>

<style>
@font-face {
  font-family: "Mukta";
  src: local("Mukta"),
   url(../src/assets/fonts/Mukta/Mukta-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "NothingYouCouldDo";
  src: local("NothingYouCouldDor"),
   url(../src/assets/fonts/Nothing_You_Could_Do/NothingYouCouldDo-Regular.ttf) format("truetype");
}

body {
  margin: initial;
  background-color: black;
}
.container {
  padding: 20px;
  margin: 0 100px;
  background-color: white;
    border-radius: 15px;
     margin-bottom: 20px; 
}

#app {
  font-family: Mukta, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
