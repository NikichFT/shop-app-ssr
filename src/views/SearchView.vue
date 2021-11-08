<template>
    <div class="search-view">
        <InputHome/>
        <div class="search-results">
            <div class="title">Found 6 results</div> 
            <ProductsArea/>
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputHome from '@/components/InputHome.vue'
import ProductsArea from '@/components/ProductsArea.vue'

export default defineComponent({
    name: 'SearchHome',
    components: {
        InputHome, ProductsArea
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