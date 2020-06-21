import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from './components/Homepage.vue';
import Login from './components/Login';
import Logout from './components/Logout';
import App from './components/App';
import Word from './components/Word';
import Cards from './components/Cards';
import createCard from './components/createCard';
import renameCard from './components/renameCard';
import editWord from './components/editWord';
import Sign from './components/Sign';
import Study from './components/Study';
import Viewer from './components/Viewer';
import Results from './components/Results';
import About from './components/About';
import './index.html';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/word/:id', component: Word },
    { path: '/cards', component: Cards },
    { path: '/createCard', component: createCard },
    { path: '/renameCard/:id', component: renameCard },
    { path: '/editWord/:id', component: editWord },
    { path: '/sign', component: Sign },
    { path: '/study/:id', component: Study },
    { path: '/viewer/:id', component: Viewer },
    { path: '', component: Homepage },
    { path: '/results', component: Results },
    { path: '/about', component: About },
  ],
});
export default router;

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
