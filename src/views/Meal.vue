<template>
<section v-if="data" class="meal-recipe">
  <h1>{{data.meal.strMeal}}</h1>
  <div class="meal">
    <img :src="data.meal.strMealThumb"/>
    <div class="meal-ingredients">
      <h2>The ingredients : </h2>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">{{ingredient}}</li>
      </ul>
    </div>
    <div class="meal-instructions">
      <p>{{data.meal.strInstructions}}</p>
    </div>
  </div>
  <div>
    <iframe width="420" height="315" :src="changeUrlYoutube(data.meal.strYoutube)" frameborder="0" allowfullscreen></iframe>
  </div>
  <div>
    <a :hr
    ef="data.meal.strSource" >Blog from this recipe</a>
  </div>
  </section>
</template>

<script>
import mealService from '../service/mealService.js'
export default {
  data() {
    return {
        data: null,
        ingredients: {},
    }
  },
  methods: {
     getMealId(id) {
       mealService
        .getMealId(id)
        .then((response) => {
          console.log(response);
          this.data =  {'meal': response.data.meals[0]};
          this.findAllingredient(response.data.meals[0]);
          //this.changeUrlYoutube(response.data.meals[0].strYoutube);
          //console.log(this.ingredients);
        })
        .catch((error) => {
          console.log(error)
        })
    },
    findAllingredient(datas){
      const strIngredient = "strIngredient";
      for (const [key, value] of Object.entries(datas)) {

        if(key.includes(strIngredient) && value !== "") {
            //console.log(`${key}: ${value}`);
            this.ingredients[`${key}`] = `${value}`;
        }
        //console.log(this.ingredients)
        }

    },
    changeUrlYoutube(url){
      const embed = url.replace('watch?v=','embed/');
      console.log(embed);
      return embed;
    }
  },
  created(){
    console.log(this.$route.params.id);
    this.getMealId(this.$route.params.id);
  }
}


</script>

<style scoped>
.meal-recipe {
  margin: 20px;
}
h1 {
  margin: 20px 20px 50px 20px
}
.meal{ 
display: flex;
}
.meal-ingredients {
  width: 100%;
}
.meal-recipe li {
  list-style: none;
}

</style>