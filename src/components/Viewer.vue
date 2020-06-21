<template>
  <header class="header">
    <router-link class="logo" to="/">#studyApp</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li><router-link to="/login">Login</router-link></li>
      <li><a href="#about">X</a></li>
      <li><a href="#careers">X</a></li>
      <li><a href="#contact">X</a></li>
    </ul>
    <div class="nav">
      <div class="container">
        <div class="tab">
          <table>
            <caption>
              List of items
            </caption>
            <thead>
              <tr>
                <th scope="col">Front</th>
                <th scope="col">Back</th>
                <th scope="col">Status</th>
                <th colspan="2" scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in vocabulary" v-bind:key="item._id">
                <td data-label="Front">{{ item.front }}</td>
                <td data-label="Back">{{ item.back }}</td>
                <td data-label="Amount">{{ item.status }}</td>
                <td @click="removeVocabulary(item._id)">X</td>
                <td @click="editVocabulary(item._id)">I</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Sign",
  data() {
    return {
      deckId: "5eecc71eb6c0b61498147b89",
      vocabulary: [],
    };
  },
  methods: {
    getVocabulary() {
      const token = localStorage.getItem("token");

      axios
        .get(
          `https://study-app-api.herokuapp.com/api/v1/decks/${this.deckId}/vocabulary`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((resp) => {
          this.vocabulary = resp.data.data;
          console.log(this.vocabulary);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    removeVocabulary(id) {
      const token = localStorage.getItem("token");

      axios
        .delete(`https://study-app-api.herokuapp.com/api/v1/vocabulary/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          console.log(`Vocabulary with id ${id} was deleted.`);
          this.getVocabulary();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    editVocabulary(id) {
      this.$router.push(`/editWord/${id}`);
    },
  },
  created() {
    this.getVocabulary();
  },
};
</script>

<style scoped>
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

/* header */
.nav {
  margin-top: 150px;
}
.header {
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  background-image: url("../assets/img1.jpg");
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

.tab {
  background: #f3eeee7e;
  padding: 25px;
  margin: 50px 0;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table tr:hover {
  background-color: rgb(175, 233, 233);
  transition: background-color 0.3s;
}
table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/*@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}*/
</style>