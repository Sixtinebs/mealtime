<template>
<section>
    <h1>{{title}}</h1>
    <img>
</section>

</template>
<script>
import mealService from "../service/mealService.js";

export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    getRandomMeal() {
      console.log(1);
      mealService
        .getRandomMeal()
        .then((response) => {
          this.title = response.data.meals[0].strMeal;
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

</style>