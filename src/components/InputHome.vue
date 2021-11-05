<template>
    <div class="input-area--home">
        <input type="text" class="input-home" @focus="searchActive = true" @focusout="searchActive = false" :class="{'active-search': searchActive}" placeholder="Search"/>
        <button class="input-home-button" title="Search"><i class="fa fa-search"></i></button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InputHome',
    data(){
        return{
            searchActive: false
        }
    }
}
</script>

<style lang="scss" scoped>
.input-area--home{
    display: flex;
    justify-content: center;
}
.input-home{
    outline: 0;
    height: 42px;
    width: 244px;
    line-height: 42px;
    padding: 0 16px;
    background-color: #EFEEEE;
    color: #212121;
    border: 0;
    float: left;
    border-radius: 30px;
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
    color: #000;
}
.input-home-button{
    outline: 0;
    background: none;
    position: absolute;
    margin-left: 200px;
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