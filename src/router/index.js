import Vue from 'vue';
import Router from 'vue-router';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';
import MarbleContainer from '../components/marble-container/MarbleContainer';

Vue.use(Router, Rx, VueRx);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/merge',
    },
    {
      path: '/merge',
      component: MarbleContainer,
    },
  ],
});
