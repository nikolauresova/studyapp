import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from './components/Login';
import Word from './components/Word';
import Deck from './components/Deck';
import App from './components/App';
import list_decks from './components/list_decks';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/word', component: Word },
    { path: '/deck', component: Deck },
    { path: '/list-decks', component: list_decks },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});