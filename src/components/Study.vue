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
        <router-link to="/cards">Cards</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <div class="nav">
      <div class="container">
        <div class="tab">
          <br />
          <table>
            <div class="word1">
              {{ front }}
              <hr />
            </div>

            <div class="word1" v-show="word2">{{ back }}</div>

            <button class="flex-card-button" @click="word2 = !word2" v-show="!word2">Show answer</button>

            <div class="imgs" v-show="word2">
              <img
                class="img_sad"
                src="/assets/sad.png"
                alt="no"
                width="50px"
                @click="incorrectReply"
              />
              <img
                class="img_smile"
                src="/assets/smile.png"
                alt="ok"
                width="50px"
                @click="correctReply"
              />
            </div>
          </table>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import router from "../index";
export default {
  name: "Sign",
  data() {
    return {
      word2: false,
      deckId: this.$route.params.id,
      front: "",
      back: "",
      status: "",
      vocabularyId: "",
      data: {
        status: 1,
        new: false
      }
    };
  },
  methods: {
    getReviews() {
      this.word2 = false;
      const token = localStorage.getItem("token");

      return axios
        .get(
          `https://study-app-api.herokuapp.com/api/v1/decks/${this.deckId}/vocabulary/review`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(resp => {
          console.log(resp.data.data);
          console.log("Test");
          if (resp.data.count === 0) {
            router.push(`/results`);
          } else {
            this.front = resp.data.data.front;
            this.back = resp.data.data.back;
            this.status = resp.data.data.status;
            this.vocabularyId = resp.data.data._id;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    async correctReply() {
      this.status++;
      console.log(this.status);
      console.log(this.data);

      this.data.status = this.status;
      await this.sendReply(this.data);
      this.getReviews();
    },
    async incorrectReply() {
      console.log(this.status);
      console.log(this.data);
      await this.sendReply(this.data);
      this.getReviews();
    },
    sendReply(data) {
      const token = localStorage.getItem("token");
      return axios
        .put(
          `https://study-app-api.herokuapp.com/api/v1/vocabulary/${this.vocabularyId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(resp => {
          console.log(`Vocabulary with ${this.vocabularyId} was updated`);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.getReviews();
  }
};
</script>

<style scoped>
.tab {
  background: #f3eeee7e;
  padding: 25px;
  margin: 50px 0;
}

table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

.imgs {
  display: flex;
  justify-content: space-around;
}
.word1 {
  text-align: center;
  font-size: 35px;
}
.word2 {
  text-align: center;
  font-size: 35px;
}
body {
  margin: 0;
  font-family: Lato, sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  line-height: 1.25;
}

a {
  color: #000;
}
.flex-card-button {
  font-size: 16px;
  text-decoration: none;
  border: none;
  color: #fff;
  background: rgb(89, 180, 202);
  padding: 9px;
  text-align: center;
  margin-top: 35px;
  width: 100%;
  display: inline-block;
}
.flex-card-button:hover {
  background: #09c;
  transition: background-color 0.3s ease-in-out;
}

/* header */
.nav {
  margin-top: 100px;
}
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
/*form*/

.container {
  max-width: 550px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.45);
}
</style>
