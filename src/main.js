Vue.config.productionTip = false;

import Vue from 'vue';

import "@/styles/app.scss";

import store from './vuex/store';

import router from './router/';

import 'mint-ui/lib/style.css';


new Vue({
  el: '#app',
  router,
  store
})

