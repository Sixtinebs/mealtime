<template>
  <div class="about">
    <h1>What meal for tonight ?</h1>
    <Random />
    <Random />
    <Random />
  </div>
</template>

<script>
import Random from '../components/Random.vue';
export default {
  components: {
    Random,
  }
} 

</script>
