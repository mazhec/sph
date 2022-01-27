<template>
  <div>
    <!-- <h1 v-upper="msg"></h1> -->
    <Header/>
    <router-view/>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
// 引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      msg: 'abc'
    }
  },
  mounted() {
    this.$store.dispatch('categoryList')
    this.$store.dispatch('getBannerList')
  }
}
</script>

<style scoped>

</style>