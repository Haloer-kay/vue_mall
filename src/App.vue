<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  //由于app.vue只执行一次，可以避免因切换路由而再次发送路由
  mounted() {
    this.$store.dispatch("categoryList");
  },
  beforeDestroy(){
    this.$bus.$off("clearKey")
  }

}
</script>

<style>

</style>
