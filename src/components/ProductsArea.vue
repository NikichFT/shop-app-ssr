<template>
    <div class="products-area">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
</template>

<script lang='ts'>
import Product from '@/components/Product.vue'

export default {
    name: 'ProductsArea',
    components: {
        Product
    }
}
</script>

<style lang="scss" scoped>

</style>