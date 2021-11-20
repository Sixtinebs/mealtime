<template >
<section >
    <p>coucou</p>
    <h2>{{selectCategorie}}</h2>
    <!-- <div>{{ getOneCategorieMeal()}}</div> -->
</section>
</template>
<script>
import mealService from "../service/mealService.js";
export default {
    props: {
        selectCategorie: String
    },
    Data(){

    },
    methods: {
        getOneCategorieMeal(){
            mealService
                .getOneCategorie(this.selectCategorie)
                .then((res) => console.log(res))
        }
    },
    created() {
        this.getOneCategorieMeal()
    },
    unmounted() {
        this.getOneCategorieMeal()
    }
}
</script>
<style></style>