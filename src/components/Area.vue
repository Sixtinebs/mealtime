<template>
<div class="areas">
    <div class="area" v-for="area in areas"  :key="area">
    <p @click="seeAreaMeal(area.strArea)">{{area.strArea}}</p>
</div>
<router-link
            v-for="meal in areaSelect"
            :key="meal"
            :to="{ name: 'meal', params: { id: meal.idMeal } }"
        >
            <div class="mealArea">
                <p>{{ meal.strMeal }}</p>
                <img :src="meal.strMealThumb" />
            </div>
        </router-link>
</div>
</template>
<script>
 import mealService from "../service/mealService";
 export default {
     data(){
         return {
             areas: null,
             areaSelect: null
         }
     },
     methods: {
         getAllArea(){
             mealService
             .getAllArea()
             .then(res => {
                 this.areas = res.data.meals;
             }).catch(erro => console.log(erro))  
         },
         getOneArea(area){
             mealService
             .getOneArea(area)
             .then(res => {
                 console.log(res),
                 this.areaSelect = res.data.meals;
                 console.log(this.areaSelect)
             })

         },
         seeAreaMeal(area){
             this.getOneArea(area);
         }
     },
     mounted(){
         this.getAllArea()
     }
 }


</script>
<style scoped>
.areas {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.areas .area p {
    margin: 5px 10px;
    cursor: pointer;
}
</style>