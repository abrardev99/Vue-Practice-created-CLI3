import Vue from 'vue'
import App from './App.vue'
import AppRoute from 'vue-router';
// import the routes that we created
import { routes } from './routes.js'

Vue.use(AppRoute);
// here binding our routes with vue-route lib
const router = new AppRoute({
  // es6
  routes,
  mode: 'history'
  // before es6
  // routes: routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // then passs that created router to vue instance
  router,
  // or router: router
}).$mount('#app')
