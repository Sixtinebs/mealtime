<template >
    <section>

        <p >{{meals}}</p>
        <h2>{{ selectCategorie }}</h2>

      

    </section>
</template>
<script>
import mealService from "../service/mealService.js";
export default {
    props: {
        selectCategorie: String
    },
    data() {
        return {
           meals: null,
        }
    },
    methods: {
        getOneCategorieMeal(cat) {
            mealService
                .getOneCategorie(cat)
                .then((res) => {
                    console.log(res),
                    this.meals = res.data.meals
                })
                .catch(error => console.log(error))
        }
    },
    created(){
        this.getOneCategorieMeal(this.selectCategorie)
    },
    watch: {
        selectCategorie: function(){
            this.getOneCategorieMeal(this.selectCategorie);
        }
    }


}
</script>
<style></style>