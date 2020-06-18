<template>
  <div class="container">
    
<nav class="nav">
<div class="nav-menu flex-row">
<div class="nav-brand">
</div>
<div>
  <ul class="nav-items">
<li class="nav-link">
  <router-link to="/login">Login</router-link>
</li>
  </ul>
</div>
</div> 
  
<main>
  <section class="site-title">
    <div class="site-backround">
      <h3>Learning can be fun</h3>
      <h1>Create cards and learn languages all over the world</h1>
      <button class="btn" @click="login">Get started</button>
    </div>
  </section>
</main>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  methods: {
    login () {
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="css">

/*nav*/
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
  background: white;
  transition: height 1s ease-in-out;
  height: 100vh;
  background-image: url('../assets/img1.jpg');
  background-size: cover;
  
}
.nav .nav-menu {
  justify-content: space-between;
}
.nav .nav-items {
  display: flex;
  margin: 20px;
}
.nav .nav-items .nav-link {
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  position: relative;
}

.nav .nav-items .nav-link:hover a {
  color: #fff;
  transition: color 0.3s ease-in-out;
  
}

.nav .nav-brand a {
  font-size: 1.6rem;
  padding: 1rem 0;
  display: block;
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: #3f4954;
}
.text-gray {
  font-size: 3rem !important;
  margin: 20px;
  font-weight: 400;
  font-family: 'Gochi Hand', cursive;
}

.flex-row {
  display: flex;
  flex-direction: row;
}
ul {
  list-style-type: none;
}
h1 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.3rem;
}




.btn {
  border: none;
  border-radius:5px;
  padding: 1rem 3rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
}
main .site-title .btn:hover {
  transition: background-color 0.3s ease-in-out;
  background-color: #09c;
}

/*main section*/

/*site title */
main .site-title .site-backround {
  color: #fff;
  padding-top: 10rem;
  text-align: center;
}
main .site-title h1,
h3 {
  margin: 0.3rem;
}
main .site-title .btn {
  margin: 1.8rem;
  background: rgba(9, 185, 255, 0.788);
}


</style>