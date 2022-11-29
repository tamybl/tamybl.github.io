import Vue from "vue";
import App from "./App.vue";
import Devicon from "devicon";

Vue.use(Devicon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
