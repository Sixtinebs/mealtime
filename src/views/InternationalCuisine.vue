<template>
  <section class="container">
    <h1>International Cooking !</h1>
    <Area />
  </section>
</template>

<script>
import Area from "../components/Area.vue";
export default {
  components: {
    Area,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>