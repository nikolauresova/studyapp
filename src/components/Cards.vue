<template>
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
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <div class="nav">
      <div class="container">
        <ul class="flex-card-list" v-for="deck in decks" v-bind:key="deck._id">
          <!-- card list -->
          <li class="flex-card-listitem">
            <!-- card list item -->

            <div class="flex-card">
              <div class="group">
                <p class="repeat">Reviews: {{ deck.countReview }}</p>
                <p class="news">New: {{ deck.countNew }}</p>
              </div>

              <!-- card module -->
              <h3 class="flex-card-heading" @dblclick="renameDeck(deck._id)">{{ deck.name }}</h3>

              <div class="btns">
                <button class="flex-card-button" @click="add(deck._id)">Add</button>
                <button class="flex-card-button" @click="study(deck._id)">Study</button>
                <button class="flex-card-button" @click="browser(deck._id)">Browser</button>

                <button
                  class="flex-card-button"
                  onclick="document.getElementById('id01').style.display='block'"
                  @click="openModal(deck._id)"
                >Delete</button>

                <div id="id01" class="modal">
                  <span
                    onclick="document.getElementById('id01').style.display='none'"
                    class="close"
                    title="Close Modal"
                  >×</span>

                  <form class="modal-content" action="/action_page.php">
                    <div class="container1">
                      <p>Are you sure you want to delete your card?</p>

                      <div class="clearfix">
                        <button
                          type="button"
                          onclick="document.getElementById('id01').style.display='none'"
                          class="cancelbtn"
                        >Cancel</button>
                        <button
                          type="button"
                          onclick="document.getElementById('id01').style.display='none'"
                          class="deletebtn"
                          @click="deleteCard(deckToDelete)"
                        >Delete</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li class="flex-card-listitem">
            <!-- card list item -->
            <div class="flex-card">
              <!-- card module -->
              <button class="flex-card-button2" @click="createCard">Create deck</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import router from "../index";

export default {
  name: "Cards",
  data() {
    return {
      decks: [],
      deckToDelete: ""
    };
  },
  methods: {
    add(id) {
      this.$router.push(`/word/${id}`);
    },
    createCard() {
      this.$router.push("/createCard");
    },
    openModal(id) {
      var modal = document.getElementById("id01");
      this.deckToDelete = id;
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },

    deleteCard(id) {
      const token = localStorage.getItem("token");
      axios
        .delete(`https://study-app-api.herokuapp.com/api/v1/decks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => {
          console.log(`Deck with id ${id} was deleted.`);
          this.updateDecks();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    study(id) {
      this.$router.push(`/study/${id}`);
    },
    browser(id) {
      this.$router.push(`/viewer/${id}`);
    },
    renameDeck(id) {
      this.$router.push(`/renameCard/${id}`);
    },
    updateDecks() {
      const token = localStorage.getItem("token");
      axios
        .get("https://study-app-api.herokuapp.com/api/v1/decks/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => {
          this.decks = resp.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.updateDecks();
  }
};
</script>

<style scoped>
.group {
  display: flex;
  justify-content: space-between;
}
.repeat,
.news {
  margin: 0;
  padding: 0;
}
.repeat {
  color: rgb(238, 46, 46);
}
.news {
  color: rgb(8, 146, 8);
}
button {
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn,
.deletebtn {
  float: left;
  width: 50%;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: #f44336;
}

/* Add padding and center-align text to the container */
.container1 {
  padding: 16px;
  text-align: center;
  width: 800px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 830px; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: Lato, sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

a {
  color: #000;
}

/* header */
.nav {
  margin-top: 150px;
}

.header {
  width: 100%;
  z-index: 3;
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
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.flex-card-listitem {
  padding: 18px;
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
  /*nadpis*/
  text-align: center;
  font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.flex-card-button {
  padding: 12px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  color: #fff;
  background: rgb(89, 180, 202);
  padding: 9px;
  text-align: center;
  margin-top: 35px;
  width: 35;
  display: inline-block;
}

.flex-card-button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}
.btns {
  margin: 0 auto;
}

.flex-card-button2 {
  font-size: 16px;
  text-decoration: none;
  border: none;
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
