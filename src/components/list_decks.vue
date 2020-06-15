<template>
  <div class="container">
    <ul class="flex-card-list">
      <!-- card list -->
      <li class="flex-card-listitem">
        <!-- card list item -->
        <div class="flex-card">
          <!-- card module -->
          <h3 class="flex-card-heading">English</h3>
          <div class="bt">
            <div class="btns">
              <a href="#" class="flex-card-button">Add</a>
              <a href="#" class="flex-card-button">Study</a>
              <a href="#" class="flex-card-button">Browser</a>
              <a href="#" class="flex-card-button">Delete</a>
            </div>
          </div>
        </div>
      </li>
      <li class="flex-card-listitem">
        <!-- card list item -->
        <div class="flex-card">
          <!-- card module -->
          <a href="#" class="flex-card-button2">Create deck</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
}

body {
  background-image: url('../assets/img1.jpg');
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: #3f4954;
}

.flex-card-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 50px;
}

.flex-card-listitem {
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  min-width: 20rem;
}

.flex-card {
  padding: 10px;
  width: 280px;
  height: 200px;
  background: #f3eeee7e;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
}
.flex-card-heading {
  text-align: center;
  font-size: 2rem;
}
.flex-card-button {
  font-size: 15px;
  text-decoration: none;
  color: #fff;
  background: rgb(89, 180, 202);
  padding: 10px;
  text-align: center;
  margin-top: 35px;
  width: 35;
  display: inline-block;
}

.flex-card-button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}
.bt {
  display: flex;
  justify-content: center;
}
.btns {
  margin-top: 20px;
}

.flex-card-button2 {
  font-size: 15px;
  text-decoration: none;
  color: #fff;
  background: rgb(89, 180, 202);
  padding: 10px;
  text-align: center;
  display: block;
  margin-top: 20px;
  width: 30%;
  align-self: center;
}

.flex-card-button2:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}
</style>