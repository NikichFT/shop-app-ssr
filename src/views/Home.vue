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
      <div class="products-area">
        <Product v-for="product in PRODUCTS" :key="product.id" :name="product.name" :image="product.image" :price="product.id"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import InputHome from '@/components/InputHome.vue'
import Product from '@/components/Product.vue'
import { mapActions, mapGetters} from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    Footer, Header, InputHome, Product
  },
  data(){
    return{
      products: []
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {  
    ...mapActions(['GET_PRODUCTS'])
  },
  mounted(){
    this.GET_PRODUCTS({ url: 'search' , query: 'pizza' })
  }
});
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.products-area{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  flex-wrap: wrap;
  margin-top: 5%;
  padding-bottom: 200px;
  z-index: 0;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1 0 auto;
  padding-right: 10%;
  padding-left: 10%;  
}
.input-area--home{
  margin-top: 5%;
    position: sticky;
    top: 100px;
    z-index: 99999;
}
</style>
