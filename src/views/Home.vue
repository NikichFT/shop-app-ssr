<template>
  <div class="home">
    <Header/>
    <div class="content">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/> -->
      <div class="title">Delicious <br> food for you</div>
      <InputHome/>
      <ProductsArea/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import InputHome from '@/components/InputHome.vue'
import ProductsArea from '@/components/ProductsArea.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Footer, Header, InputHome, ProductsArea
  },
});
</script>

<style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.products-area{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1 0 auto;
  padding-right: 10%;
  padding-left: 10%;  
}
</style>
