import Vue from "vue";
import App from "./App.vue";
import Devicon from "devicon";
import "animate.css";

Vue.use(Devicon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
