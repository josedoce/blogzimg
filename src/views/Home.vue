<template>
  <div class="home">
    <Nav/>
    
    <Content>
      <div v-for="card in cards" :key="card" class="card">
        <img :src="require('../assets/images/photo'+card+'.jpg')"/>
        <h3>Algum titulo {{card}}</h3>
      </div>
    </Content>
  </div>

</template>

<script>
import Nav from '@/components/Nav.vue'
import Content from '@/components/Content.vue'
const faker = require('faker-br');

export default {
  name: 'Home',
  components: {
    Nav,
    Content
  },
  data: function(){
    return {
      cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      
    }
  },
  methods: {
    cpf(){
      return faker.br.cpf()
    }
  },
  computed: {
    
  }
}
</script>
<style scoped>

.card {
  flex: 1 200px;
  background: rgb(20, 85, 207);
  margin: 10px;
}
h3 {
  color: white;
  font-family: sans-serif;
  margin: 4px;
}
img {
  display: block;
  max-width: 100%;
}
</style>