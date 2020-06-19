<template>
 <header class="header">
    <router-link class="logo" to="/">#studyApp</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><router-link to="/login">Login</router-link></li>
      <li><a href="#about">X</a></li>
      <li><a href="#careers">X</a></li>
      <li><a href="#contact">X</a></li>
    </ul>
<div class="nav">
  <div class="container">
    <form id="log" action="" method="post">
      <h3>Login</h3>
      
      <fieldset>
        <input  type="text" id="name" placeholder="Your name" required autofocus>
      </fieldset>
      <fieldset>
        <input type="password" id="password" placeholder="Your password" required>
      </fieldset>
      
      <fieldset>
        <button name="submit" type="submit" id="log-submit" data-submit="Sending">Submit</button>
        
      </fieldset>
    </form>
  </div>
  </div>
 </header>



</template>

<script>
export default {
  name: 'Login'
  
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
  z-index: 3;
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
/*form*/
.nav {
  margin-top: 150px;
}
.container {
  max-width: 350px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
}

#log input {
  font: 400 12px/16px "Lato", sans-serif;
  width: 279px;
}

#log {
  background: #f3eeee7e;
  padding: 25px;
  margin: 50px 0;
}

#log h3 {
  color: #3f4954;
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 25px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#log input {
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#log input:hover {
  border: 1px solid #aaa;
}

#log button {
  cursor: pointer;
  border: none;
  background: rgb(75, 182, 209);
  color: #fff;
  padding: 10px;
  font-size: 14px;
  width: 100%;
}

#log button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}

</style>

