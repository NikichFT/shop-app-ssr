<template>
    <div class="input-area--home">
        <input type="text" ref="input" class="input-home" :class="{'active-search': route.name === 'SearchView'}" :style="{ borderRadius: route.name === 'SearchView' ? 0 : '5vh', height: route.name === 'SearchView' ? '100px' : '' }" @focus="searchActive = true" @focusout="searchActive = false" placeholder="Search" @click="this.$router.push({ path: 'search' })"/>
        <button class="input-home-button" :style="{ marginLeft: route.name === 'SearchView' ? '95%' : '' }" title="Search"><i class="fa fa-search"></i></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'InputHome',
    props: {
    },
    setup(){
        const input = ref()
        const route = useRoute()

        onMounted(()=>{
            if (route.name === 'SearchView') {
                input.value.focus()
            }
        })

        return{
            input, route
        }
    },
    data(){
        return{
            searchActive: false
        }
    },
})
</script>

<style lang="scss" scoped>
.input-area--home{
    display: flex;
    justify-content: center;
    align-items: center;
}
.input-home{
    outline: 0;
    height: 5vh;
    width: 50%;
    padding: 0 16px;
    background-color: #EFEEEE;
    color: #212121;
    border: 0;
    float: left;
    transition: all ease .4s;
    &:focus{
        outline: 0;
        background-color: #FFF;
    }
}
.active-search{
    width: 100%;
}
.fa-search{
    color: #464646;
}
.input-home-button{
    outline: 0;
    background: none;
    position: absolute;
    margin-left: 40%;
    height: 42px;
    width: 42px;
    text-align: center;
    line-height: 42px;
    border: 0;
    color: transparent;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 18px;
    text-rendering: auto;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transition: background-color .4s ease;
    border-radius: 0 30px 30px 0;
    transition: all ease .4s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
}
</style>