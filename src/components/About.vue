<template>
  <div class="container">
    <header class="header">
      <router-link class="logo" to="/">#studyApp</router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li><router-link to="/Sign">Sign up</router-link></li>
      </ul>

      <main>
        <section class="site-title">
          <div class="site-background">
            <h2>This is an application to help you learn languages all over the world.</h2>
            <h2> First step is Login, in second step create card and in the new card add word. In the tab Cards can add word, study and browser words. When you can delete cards or words. </h2><br>


<div class="text">
          <h3>clarification study mode:</h3>
In List words have table with 'status'. Status is level learning.<br>

<p>status 1 is  Newbie - learn words today,</p>
<p>status 2 is Apprentice - learn words tomorrow,</p>
<p>status 3 is intermediate - learn words in 4 days,</p>
<p>status 4 is Master - learn words id 7 days,</p>
<p>status 5 is Genius - learn words in 30 days,</p>
<p>status 6 is Guru - words know</p>

</div>
           

            
            <button class="btn" @click="login">Get started</button>
          </div>
          
        </section>
        
      </main>
      
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="css">
.contact {
  text-align: center;
}
.text {
  font-size: 20px;
  color: #7E7E7E;
  text-align:center;
  
}


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

h1 {
  font-size: 2.5rem;
  margin: 1rem;
}
h3 {
  font-size: 1.3rem;
  margin: 1rem;
}

.btn {
  border: none;
  border-radius: 5px;
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
main .site-title .site-background {
  color: #fff;
  padding-top: 200px;
  padding: 30px;
  text-align: center
}

main .site-title .btn {
  margin: 1.8rem;
  background: rgba(9, 185, 255, 0.788);
}
</style>
