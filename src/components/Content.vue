<template>
  <article>
   <slot class="c"/>
  </article>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
  article {
    display: flex;
    max-width: 1000px;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  
</style>