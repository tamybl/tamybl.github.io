<template>
  <div id="app">
    <Loader v-if="false" />
    <Header />
    <AboutMe />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";

export default {
  name: "App",
  components: {
    Loader,
    Header,
    AboutMe,
  },
  data() {
    return {
      path: document.location.origin,
    };
  },
  mounted() {},
};
</script>

<style>
@import "./css/style.css";
@import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
