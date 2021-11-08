<template>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="fade">
    <router-view/> 
    </transition>
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
@font-face {font-family: "SF Pro Rounded"; src: url(./fonts/SF-Pro-Rounded-Bold.ttf)}
@font-face {
    font-family: "SF Pro Text"; /* Имя шрифта */
    src: url(./fonts/SF-UI-Text-Light.ttf); /* Путь к файлу со шрифтом */
   }
   
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease-in;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
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
