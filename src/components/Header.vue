<template>
<header >
  <router-link to="/" class="logo">Meal time</router-link>
  <div class="links-menu">
      <router-link to="/">Home</router-link>|
  <router-link to="/international-cuisine">international cuisine</router-link>
  </div>

</header>

</template>
<script>
</script>
<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  height: 100px;
  margin: -8px -8px 0 -8px;
  position: relative;
  z-index: 2;
  background-color: #000;
  padding: 0 30px;

      font-family: NothingYouCouldDo,Helvetica, Arial, sans-serif;
    font-size: 20px;

    text-transform: uppercase;
    font-weight: bold;
}
.logo {
  margin: auto;
  margin-left: 0;
   font-family: NothingYouCouldDo,Helvetica, Arial, sans-serif;
   color: #fff;
   text-decoration: none;
}
.links-menu {
    display: flex;
    align-items: center;

}
.links-menu a {
  padding: 0 20px;
  text-decoration: none;
  color: white;
  font-family: NothingYouCouldDo,Helvetica, Arial, sans-serif;
}
</style>

