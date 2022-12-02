<template>
  <div id="app">
    <transition name="fade">
      <Loader v-show="loading" />
    </transition>
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <Clients />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import WOW from "wowjs";
import Loader from "./components/Loader.vue";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Clients from "./components/Clients.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Loader,
    Header,
    AboutMe,
    Skills,
    Projects,
    ContactMe,
    Footer,
    Clients,
  },
  data() {
    return {
      path: document.location.origin,
      loading: true,
    };
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
      //this.wowAnimation();
    }, 1500);
  },
  methods: {
    wowAnimation() {
      new WOW.WOW({
        live: false,
      }).init();
    },
  },
};
</script>

<style>
@import "./css/default.css";
@import "./css/style.css";
@import "./css/slider.css";
@import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
