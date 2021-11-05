<template>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/> 
</template>

<script lang="ts">

export default ({
  name: 'App',
  components: {
    
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
.title{
  font-family: "SF Pro Rounded";
  font-size: 34px;
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
