<template>
  <div class="about">
    <Nav/>
    <h1>Sobre</h1>
   
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
export default {
  components: {
    Nav
  }
}
</script>
<style scoped>
  h1 {
    color: white;
    font-family: sans-serif;
    margin: 20px;
  }
</style>