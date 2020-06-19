<template>
  <div class="container">

<header class="header">
  <router-link class="logo" to="/">#studyApp</router-link>
</header>
<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css">
body {
  margin: 0;
  font-family: Lato, sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

a {
  color: #000;
}

/* header */

.header {
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  background-image: url('../assets/img1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.header .logo {
  display: block;
  z-index: 100;
  font-family: 'Gochi Hand', cursive !important;
  float: left;
  font-size: 3.3em;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 400;
}



</style>