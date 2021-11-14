<template>
<header >
  <img alt="Vue logo" src="../assets/logo.png" />
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
  max-height: 100px;
  margin: -8px -8px 0 -8px;
  position: relative;
    z-index: 2;
    background-color: #ffffff80;
}
img {
  margin-right: auto;
  object-fit: cover;

}
.links-menu {
    display: flex;
    align-items: center;
}
.links-menu a {
  padding: 0 20px;
  text-decoration: none;
}
</style>

