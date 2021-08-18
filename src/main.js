import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false;

// the eventBus Vue-instance 
export const eventBus = new Vue();

// Our app's Vue-instance
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
