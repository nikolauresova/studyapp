<template>
  <div class="container">
    <header class="header">
      <router-link class="logo" to="/">#studyApp</router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <router-link to="/logout">Logout</router-link>
        </li>
        <li>
          <router-link to="/cards">Decks</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>

      <main>
        <section class="site-title">
          <div class="site-background">
            <img src="/assets/check.png" class="check" width="280px" />

            <h1>Well done, friend!</h1>
            <button class="btn" @click="cards">Back to Cards</button>
          </div>
        </section>
      </main>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    cards() {
      this.$router.push("/cards");
    }
  }
};
</script>

<style lang="css">
/*nav*/
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
  background-image: url("/assets/img1.jpg");
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

h1 {
  font-size: 2.5rem;
  margin: 1rem;
  margin-bottom: 60px;
}
h3 {
  font-size: 1.3rem;
  margin: 1rem;
}

.btn {
  border: none;
  border-radius: 5px;
  padding: 16px 25px;
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
main .site-title .site-background {
  color: #fff;
  padding-top: 120px;
  text-align: center;
  text-shadow: 0 1px 2px hsla(0, 0%, 4%, 0.6);
}

main .site-title .btn {
  margin: 1.8rem;
  background: rgba(9, 185, 255, 0.788);
  text-shadow: 0 1px 2px hsla(0, 0%, 4%, 0.6);
}
</style>
