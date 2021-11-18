<template>
<section class="categories-meal-db" >
    <h1>Choose your categorie for to night : </h1>
    <label for="categorie-select">Choose a categorie:</label>

<select name="categories" id="categorie-select">
    <option value="">--Please choose an option--</option>
    <option v-for="i in data" :key="i" :value="i.strCategory">{{i.strCategory}}</option>
</select>
<input type="button" value="OK" />
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
    getCategoriesMeal() {
      mealService
        .getCategoriesMeal()
        .then((response) => {
          this.data = response.data.meals,
          console.log(this.data)
        }).catch( (error) => {
          console.error(error);
        });
    },
    //Function go page liste meal categorie
  },
  created() {
    this.getCategoriesMeal();
  }
}

</script>
<style>

</style>