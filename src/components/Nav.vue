<template>
  <nav id="nav">
    <router-link class="logo" to="/">
      <h2>
        Blogzimg
      </h2>
    </router-link>
    <ul>
      <li>
        <router-link class="link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="link" to="/pages">Categorias</router-link>
      </li>
      <li>
        <router-link class="link" to="/about">Sobre</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Nav',
  components: {
    
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  nav
  {
    display: flex;
    font-family: 'Poppins', sans-serif;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(277deg,
      rgb(35 138 245 / 94%),
      rgb(15 59 126)
    );
    padding: 17.5px 20px;
    height: auto;
  }
  nav h2 {
    font-weight: 900;
    text-transform: uppercase;
    
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: inline;
    margin: 0 10px;
  }
  .link {
    color: rgb(224, 214, 214);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  .link:hover{ 
    color: rgb(6 37 84);
  }
  .logo {
    color: rgb(35 138 245);
  }
  .logo::first-letter{
    color: rgb(190, 184, 184);
  }
  
  .logo:hover{
    color: rgb(224, 214, 214);
  }
</style>
