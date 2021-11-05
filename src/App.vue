<template>
  <Header/>
  <div class="content">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="title-home">Delicious <br> food for you</div>
    <InputHome/>
    <div class="product-area--home">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  </div>
  <Footer/>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import InputHome from '@/components/InputHome.vue'
import Product from '@/components/Product.vue'

export default ({
  name: 'App',
  components: {
    Footer, Header, InputHome, Product
  }
})
</script>

<style lang="scss">
@import './utils/style-variables.scss';
@font-face {font-family: "SF Pro Rounded"; src: url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.eot"); src: url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.woff") format("woff"), url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/511031ed9122c8ea1450b18b876221fe.svg#SF Pro Rounded") format("svg"); }
@font-face {
    font-family: "SF Pro Text"; /* Имя шрифта */
    src: url(./fonts/SF-UI-Text-Light.ttf); /* Путь к файлу со шрифтом */
   }

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
body::-webkit-scrollbar {
  display: none;
}
.content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  @include padding-page;
}
.title-home{
  font-family: "SF Pro Rounded";
  font-size: 34px;
}
.product-area--home{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  overflow-x: hidden;
  background-color: #F2F2F2;
  list-style: none;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
