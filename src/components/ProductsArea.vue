<template>
    <div class="products-area">
        <Product v-for="product in products" :key="product.id" :name="product.name" :image="product.image" :price="product.id"/>
    </div>
</template>

<script lang='ts'>
import Product from '@/components/Product.vue'

export default {
    name: 'ProductsArea',
    components: {
        Product
    },
    props:{
        products: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
</style>