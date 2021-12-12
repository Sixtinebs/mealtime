<template>
  <section class="categories-meal-db">
    <label for="categorie-select">Choose your categorie for to night :</label>
    <div class="container-select">
      <select
        v-model="selectCategorie"
        name="categories"
        id="categorie-select"
      >
        <option value="">--Please choose an option--</option>
        <option
          v-for="i in data"
          :key="i"
          :value="i.strCategory"
        >{{i.strCategory}}</option>
      </select>
      <input
        type="button"
        value="OK"
        @click="seeCategoryMeal()"
      >
    </div>
  </section>
  <Categorie
    v-if="clickButton"
    :select-categorie="categorie"
  />
</template>
<script>
import mealService from "../service/mealService.js";
import Categorie from "./Categorie.vue";

export default {
  components: {
    Categorie,
  },
  data() {
    return {
      data: null,
      selectCategorie: null,
      clickButton: false,
      categorie: null,
    };
  },
  methods: {
    getCategoriesMeal() {
      mealService
        .getCategoriesMeal()
        .then((response) => {
          this.data = response.data.meals;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    seeCategoryMeal() {
      this.clickButton = true;
      this.categorie = this.selectCategorie;
      console.log(this.categorie);
    },
  },
  created() {
    this.getCategoriesMeal();
  },
};
</script>
<style>
select {
  height: 40px;
  background-color: black;
  color: white;
  font-weight: 900;
  letter-spacing: 0.5px;
  border-radius: 15px;
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 101% 0;
  background-size: 5px 5px, 5px 5px, 2.95em 3.5em;
  background-repeat: no-repeat;
  background-image: linear-gradient(44deg, transparent 50%, #000000 50%),
    linear-gradient(135deg, black 50%, transparent 50%),
    linear-gradient(to right, white, white);
  border-color: black;
}
select:focus-visible {
  outline: rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.41);
}
input {
  margin-left: 15px;
  height: 40px;
  border-radius: 15px;
  width: 40px;
  background-color: black;
  color: white;
  font-weight: 900;
  border-color: black;
  cursor: pointer;
  border-style: solid;
}
input:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}
.container-select {
  margin-top: 20px;
}
</style>