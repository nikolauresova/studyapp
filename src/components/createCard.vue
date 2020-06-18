<template>
 <nav class="nav">
    <div class="nav-menu flex-row">
    <div class="nav-brand">
      <router-link class="text-gray" to="/">#studyApp</router-link>
    </div>
    <div>
      <ul class="nav-items">
    <li class="nav-link">
      <a href="#">Login</a>
    </li>
      </ul>
    </div>
    </div> 

   <div class="container">
    <form id="createCard" action="" method="post">
      <h3>Create card</h3>
      
      <fieldset>
        <input  type="text" placeholder="Name your card" id="card_input" required autofocus>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="card-submit" data-submit="Sending">Submit</button>
      </fieldset>
    </form>
  </div>
 </nav>

</template>

<script>
export default {
  name: "createCard"
}
</script>

<style scoped>

html,
body {
  margin: 0%;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Lato", sans-serif;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Lato", sans-serif;
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

.container {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
}

#createCard input {
   font: 400 12px/16px "Lato", sans-serif;
  max-width: 329px;
}

#createCard {
  background: #f3eeee7e;
  padding: 25px;
  margin: 50px 0;
}

#createCard h3 {
  color: #3f4954;
  text-align: center;
  display: block;
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

#createCard input {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#dcreateCard input:hover {
  border: 1px solid #aaa;
}

#createCard button {
  cursor: pointer;
  border: none;
  background: rgb(75, 182, 209);
  color: #fff;
  margin-top: 20px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
}

#createCard button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}
</style>