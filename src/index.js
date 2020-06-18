import Vue from 'vue';
import VueRouter from 'vue-router'
import Homepage from './components/Homepage';
import Login from './components/Login';
import App from './components/App';
import Word from './components/Word';
import Cards from './components/Cards';
import createCard from './components/createCard'
import Sign from './components/Sign'
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/word', component: Word },
    { path: '/cards', component: Cards },
    { path: '/createCard', component: createCard },
    { path: '/sign', component: Sign },
    { path: '', component: Homepage },

  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});