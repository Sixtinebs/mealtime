<template >
  <section>
    <h2>{{ selectCategorie }}</h2>
    <List :meal-list="meals" />
  </section>
</template>
<script>
import mealService from "../service/mealService.js";
import List from "../components/List.vue";
export default {
  props: {
    selectCategorie: String,
  },
  components: {
    List,
  },
  data() {
    return {
      meals: null,
    };
  },
  methods: {
    getOneCategorieMeal(cat) {
      mealService
        .getOneCategorie(cat)
        .then((res) => {
          console.log(res), (this.meals = res.data.meals);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getOneCategorieMeal(this.selectCategorie);
  },
  watch: {
    selectCategorie: function () {
      this.getOneCategorieMeal(this.selectCategorie);
    },
  },
};
</script>
<style scoped>
.mealsCat {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.mealCat {
  width: 200px;
  margin-bottom: 30px;
}
.mealCat p {
  height: 66px;
  margin: auto;
}
.mealCat img {
  width: 100%;
}
</style>