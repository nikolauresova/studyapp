<template>
  <header class="header">
    <router-link class="logo" to="/">#studyApp</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li v-if="!hasToken">
        <router-link to="/sign">Sign up</router-link>
      </li>
      <li v-if="!hasToken">
        <router-link to="/login">Log in</router-link>
      </li>
      <li v-if="hasToken">
        <router-link to="/cards">Cards</router-link>
      </li>
    </ul>
    <div class="nav">
      <div class="container">
        <div id="log">
          <h3>About</h3>
          <p>This application will help you learn not only languages.</p>
          <p>Create your own deck of cards to help you study.</p>
          <br />
          <h4>Study mode clarification:</h4>
          <p>- status level is the level of learning</p>
          <p>- status 1 is Newbie - the word will repeat today</p>
          <p>- status 2 is Apprentice - the word will repeat tomorrow</p>
          <p>- status 3 is intermediate - the word will repeat in 4 days</p>
          <p>- status 4 is Master - the word will repeat in 7 days</p>
          <p>- status 5 is Genius - the word will repeat in 30 days</p>
          <p>- status 6 is Guru - the word will no longer repeat</p>
          <br />
          <h4>About authors:</h4>
          <p>To see more of our projects, follow us on github:</p>
          <p>
            <a href="https://github.com/nikolauresova" target="_blank">Nikol (frontend)</a>,
            <a href="https://github.com/eien11" target="_blank">Adela (backend)</a>
          </p>
          <p>You can also visit our linkedin profiles:</p>
          <a href="https://www.linkedin.com/in/nikolauresova/" target="_blank">Nikol (frontend)</a>,
          <a href="https://www.linkedin.com/in/adela-matouskova/" target="_blank">Adela (backend)</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import router from "../index";
export default {
  name: "Logout",
  data() {
    return {
      hasToken: false
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.hasToken = true;
    }
  }
};
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
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  background-image: url("../assets/img1.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: auto;
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
  font-family: "Gochi Hand", cursive !important;
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
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
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
  max-width: 500px;
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
  overflow: auto;
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
