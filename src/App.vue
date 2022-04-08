<template>
  <div id="app">
    <Loader />
    <nav-bar></nav-bar>
    <Header />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Loader,
    NavBar,
    Header,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
@import "./css/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
