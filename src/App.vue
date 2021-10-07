<template>
  <router-view/>
</template>

<script>
export default {
  
}
</script>
<style>
*
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
body {
  background: linear-gradient(100deg, #114289fc, #2da7fdbf);
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #c4d7f5fc;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(277deg,
      rgb(35, 138, 245, 94%),
      rgb(15, 59, 126)
    );
}
::-webkit-scrollbar-thumb:hover{
  background: linear-gradient(277deg,
      rgba(1, 87, 179, 0.94),
      rgb(84, 152, 255)
    );
}

</style>