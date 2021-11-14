<template>
  <section class="about">
    <div class="welcome">
      <img class="img-home" src="../assets/images/img-home.jpg" />
      <h1>What meal for tonight ?</h1>
    </div>
    <div class="randoms-meals">
        <Random id="big-random"/>
        <Random id="litle-random"/>
        <Random id="litle-random-2"/>
    </div>
    </section>
</template>

<script>
import Random from '../components/Random.vue';
export default {
  components: {
    Random,
  }
}

</script>

<style>
.welcome h1 {
  position: relative;
  margin: initial;
  color: white;
}
.img-home {
  position: absolute;
  display: block;
  width: 100%;
  top: -150px;
  z-index: 0;
  height: 750px;
  object-fit: cover;
}
.welcome {
  position: relative;
  height: 600px;
}
.randoms-meals {
  margin: 30px;
  display: grid;
      grid-template-rows: repeat(2, 250px);
    grid-template-columns: 40% 60%;
        overflow: hidden;
grid-gap: 40px;
  grid-template-areas: 
    "big litle-1"
    "big litle-2"
}
#big-random {
  grid-area: big;
}
#litle-random{
  grid-area: litle-1;
}
#litle-random-2 {
  grid-area: litle-2;
}
</style>
