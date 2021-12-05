<template>
<section class="random-meal-db" v-if=data >
  <router-link :to="{ name: 'meal', params: { id: data.meal.idMeal }}">
      <div class="random-meal">
    <p>{{data.meal.strMeal}}</p>
    <img :src="data.meal.strMealThumb" />
  </div>
  </router-link>

</section>

</template>
<script>
import mealService from "../service/mealService.js";

export default {
  data() {
    return {
      data: null,
      
    }
  },
  methods: {
    getRandomMeal() {
      mealService
        .getRandomMeal()
        .then((response) => {
          this.data = {'meal':response.data.meals[0]}
        }).catch( (error) => {
          console.error(error);
        });
    }
  },
  created() {
    this.getRandomMeal();
  }
}

</script>
<style>
section.random-meal-db, 
.random-meal-db .random-meal,
.random-meal-db .random-meal img{
  height :100%;
} 
.random-meal {
  position: relative;

}
.random-meal p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
      background-color: #0000007d;
    color: white;
    padding: 10px 0;
    width: 100%
}
section.random-meal-db, p {
  margin: inherit;

}
.random-meal-db .random-meal img{
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
}


</style>