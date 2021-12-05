<template>
  <div class="about">
    <div class="welcome">
      <img class="img-home" src="../assets/images/img-home.jpg" />
      <h1>What meal for tonight ?</h1>
    </div>
    </div>
     <section class="container"> 
    <section class="randoms-meals">
       <h2>Let randomly choose for you tonight</h2>
      <Random id="big-random" />
      <Random id="litle-random" />
      <Random id="litle-random-2" />
    </section>
    <section class="cat-meals">
       <h2>You not happy ?</h2>
      <Categories />
    </section>
  </section>
</template>

<script>
import Random from '../components/Random.vue';
import Categories from '../components/Categories.vue';

export default {
  components: {
    Random,
    Categories
  }
}

</script>

<style>
.welcome h1 {
  position: relative;
  font-family: NothingYouCouldDo,Helvetica, Arial, sans-serif;
  margin: initial;
  color: white;
  background-color: #0000007d;
  padding: 65px 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    #000,
    #000,
    #00000063,
    #b9b9b900,
    #fff0
  );
  
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: black;
  padding: 65px 0;
}
.randoms-meals {
  display: grid;
  grid-template-rows: 50px 250px 250px;;
  grid-template-columns: 40% 60%;
  overflow: hidden;
  grid-gap: 40px;
  grid-template-areas:
    "title title"
    "big litle-1"
    "big litle-2";
  border-radius: 15px 15px 0 0;
}
.randoms-meals h2 {
  grid-area: title;
}
.cat-meals {
  border-radius: 0 0 15px 15px;
  margin-bottom: 30px;
}
#big-random {
  grid-area: big;
  width: 400px;
}
#litle-random {
  grid-area: litle-1;
}
#litle-random-2 {
  grid-area: litle-2;
}
</style>
