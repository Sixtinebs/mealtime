<template>
<div class="meals-list">
    <router-link
            v-for="meal in mealList"
            :key="meal"
            :to="{ name: 'meal', params: { id: meal.idMeal } }"
        >
            <div class="meal-info">
                <p>{{ meal.strMeal }}</p>
                <img :src="meal.strMealThumb" />
            </div>
        </router-link>
</div>    
</template>
<script>

export default ({
    props: {
        mealList: Object
    }
})
</script>
<style >

.meals-list {
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.meal-info {
    width: 200px;
    margin-bottom: 30px;
    margin: 15px;
}
.meal-info p {
    height: 66px;
    margin: auto;
}
.meal-info img {
    width: 100%;
}
</style>
