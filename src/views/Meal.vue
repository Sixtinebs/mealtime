<template>
  <h1>Meal</h1>
</template>

<script>
import mealService from '../service/mealService.js'
export default {
  data() {
    return {

    }
  },
  methods: {
    getMealId(id) {
      mealService
        .getMealId(id)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created(){
  //  const route = useRoute();
  //  console.log(route);
    console.log(this.$route.params.id);
    this.getMealId(this.$route.params.id);
  }
}


</script>

<style>
</style>