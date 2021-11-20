<template>
<section class="random-meal-db" v-if=data >
  <router-link :to="{ name: 'meal', params: { id: data.meal.idMeal }}">
      <div class="random-meal">
    <h1>{{data.meal.strMeal}}</h1>
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
.section.random-meal-db, h1 {
  margin: initial;
}
.random-meal-db .random-meal img{
    width: 100%;
    object-fit: cover;
}


</style>