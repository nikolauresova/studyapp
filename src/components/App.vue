<template>
  <div class="container">

<nav class="nav">
<div class="nav-menu flex-row">
<div class="nav-brand">
  <a href="#" class="text-gray">#studyApp</a>

</div>
</div> 

</nav>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css">
html,
body {
  margin: 0%;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  text-rendering: optimizeLegibility;
}

body {
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  color: #777;
}

/*nav*/
.nav {
  height: 100vh;
  background-image: url('../assets/img1.jpg');
  background-size: cover;
  
}
.nav .nav-menu {
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #3f4954;
}
.text-gray {/*logo*/
  font-size: 3rem !important;
  margin: 20px;
  font-weight: 400;
  font-family: 'Gochi Hand', cursive !important;
}

</style>