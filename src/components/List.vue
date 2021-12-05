<template>
  <div class="meals-list">
    <router-link
      v-for="meal in mealList"
      :key="meal"
      :to="{ name: 'meal', params: { id: meal.idMeal } }"
    >
      <div class="meal-info">
        <p class="title">{{ meal.strMeal }}</p>
        <img :src="meal.strMealThumb" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    mealList: Object,
  },
};
</script>
<style >
.meals-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.meal-info .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0000007d;
  color: white;
  padding: 10px 0;
  width: 100%;
  margin: auto;
  font-weight: bold;
}
.meal-info {
  width: 200px;
  margin-bottom: 30px;
  margin: 15px;
  position: relative;
}
.meal-info img {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}
</style>
