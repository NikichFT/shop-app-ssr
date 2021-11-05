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
    },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>

</style>