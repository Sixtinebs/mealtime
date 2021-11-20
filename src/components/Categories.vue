<template>
<section class="categories-meal-db" >
    <h1>Choose your categorie for to night : </h1>
    <label for="categorie-select">Choose a categorie:</label>

<select v-model="selectCategorie" name="categories" id="categorie-select">
    <option value="">--Please choose an option--</option>
    <option v-for="i in data" :key="i" :value="i.strCategory">{{i.strCategory}}</option>
</select>
</section>
<Categorie v-if="selectCategorie"  :select-categorie="selectCategorie"/>
</template>
<script>
import mealService from "../service/mealService.js";
import Categorie from '../views/Categorie.vue';

export default {
  components: {
    Categorie
  },
  data() {
    return {
      data: null,
      selectCategorie: null,
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
    }
  },
  created() {
    this.getCategoriesMeal();
  }
}

</script>
<style>

</style>