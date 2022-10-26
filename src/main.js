import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Custom Styles */
import './assets/css/styles.css';

/* Bootstrap Integration */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
