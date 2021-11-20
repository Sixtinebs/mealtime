<template>
<section class="categories-meal-db" >
    <label for="categorie-select">Choose your categorie for to night :</label>

<select v-model="selectCategorie" name="categories" id="categorie-select">
    <option value="">--Please choose an option--</option>
    <option v-for="i in data" :key="i" :value="i.strCategory">{{i.strCategory}}</option>
</select>
</section>
<input type="button" value="OK" @click="seeCategoryMeal()">
<Categorie v-if="clickButton"  :select-categorie="categorie"/>
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
      clickButton: false,
      categorie: null
    }
  },
  methods: {
    getCategoriesMeal() {
      mealService
        .getCategoriesMeal()
        .then((response) => {
          this.data = response.data.meals
        }).catch( (error) => {
          console.error(error);
        });
    },
    seeCategoryMeal(){
      this.clickButton = true;
      this.categorie = this.selectCategorie;
      console.log(this.categorie)
    }
  },
  created() {
    this.getCategoriesMeal();
  }
}

</script>
<style>

</style>