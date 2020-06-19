<template>

  <header class="header">
    <router-link class="logo" to="/">#studyApp</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><router-link to="/Sign">Sign up</router-link></li>
      <li><a href="#about">X</a></li>
      <li><a href="#careers">X</a></li>
      <li><a href="#contact">X</a></li>
    </ul>
  </header>

</template>

<script>
export default {
  name: 'Viewer'
}
</script>
<style scoped>
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
  background-image: url('../assets/img1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: transparent;
}

.header li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.header li a:hover,
.header .menu-btn:hover {
  color: rgb(80, 56, 168);
  /*transition: color 0.3s ease-in-out;*/
}

.header .logo {
  display: block;
  font-family: 'Gochi Hand', cursive !important;
  float: left;
  font-size: 2.9em;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 400;
}
/* menu */

.header .menu {
  clear: both;
  max-height: 0;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 768px) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }

}
</style>