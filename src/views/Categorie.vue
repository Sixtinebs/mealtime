<template >
    <section>

        <h2>{{ selectCategorie }}</h2>
        <div class=mealsCat>
        <router-link
            v-for="meal in meals"
            :key="meal"
            :to="{ name: 'meal', params: { id: meal.idMeal } }"
        >
            <div class="mealCat">
                <p>{{ meal.strMeal }}</p>
                <img :src="meal.strMealThumb" />
            </div>
        </router-link>
        </div>

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
    created() {
        this.getOneCategorieMeal(this.selectCategorie)
    },
    watch: {
        selectCategorie: function () {
            this.getOneCategorieMeal(this.selectCategorie);
        }
    }


}
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