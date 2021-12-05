<template>
<section v-if="data" class="container">
<div class="sum">
    <h1>{{data.meal.strMeal}}</h1>
  <p>{{data.meal.strArea}} - {{data.meal.strCategory}} - {{data.meal.strTags}}</p>
</div>
<div class="line"></div>
  <div class="meal">
    <img :src="data.meal.strMealThumb"/>
    <div class="meal-ingredients">
      <h2>The ingredients : </h2>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">{{ingredient}}</li>
      </ul>

    </div>
    <div class="meal-instructions">
      <h2>They instructions : </h2>
      <p>{{data.meal.strInstructions}}</p>
    </div>
  </div>
  <div class="line"></div>
  <div>
          <h2>Watch your recipe on video</h2>
    <iframe width="420" height="315" :src="changeUrlYoutube(data.meal.strYoutube)" frameborder="0" allowfullscreen></iframe>
  </div>
  <div>
    <a :href="data.meal.strSource" >Blog from this recipe</a>
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
.sum p {
  margin: 0;
}
.line {
  margin: 50px auto;
  border: 1px solid black;
  width: 50%;
}
h1 {
  margin: 20px;
}
.meal{ 
display: flex;
flex-wrap: wrap;
justify-content: center;
}
.meal-ingredients {
  flex: 0 50%;
  max-width: 100%;
}
@media screen and (max-width: 1039px){
  .meal-ingredients{
    flex: 0 100%;
  }
}
.meal-recipe ul {
  display: flex;
  flex-wrap: wrap;
}
.meal-recipe li {
  list-style: none;
  padding: 10px;
}
.meal-recipe img {
  max-height: 500px;
  flex: 0 50%;
  max-width: 100%;
  object-fit: cover;
}

</style>