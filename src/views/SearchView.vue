<template>
    <div class="search-view">
        <InputHome/>
        <div class="search-results">
            <div class="title">Found 6 results</div> 
            <div class="products-area">
                <Product v-for="product in PRODUCTS" :key="product.id" :name="product.name" :image="product.image" :price="product.id"/>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputHome from '@/components/InputHome.vue'
import Product from '@/components/Product.vue'

export default defineComponent({
    name: 'SearchHome',
    components: {
        InputHome, Product
    }
})
</script>

<style lang="scss" scoped>
.search-results{
    border-radius: 5% 5% 0 0;
    background-color: #cbcbce;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.products-area{
    display: grid;
    grid-template-columns: 400px 400px;
}
</style>