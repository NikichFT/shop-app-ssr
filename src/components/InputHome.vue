<template>
    <div class="input-area--home">
        <input type="text" class="input-home" placeholder="Search"/>
<!--        <input type="submit" class="input-home-button" title="Search"/>-->
    </div>
</template>

<script lang="ts">
export default {
    name: 'InputHome'
}
</script>

<style lang="scss" scoped>
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
    border-radius: 30px 0 0 30px;
    &:focus{
        outline: 0;
        background-color: #FFF;
    }
}
.input-home-button{
    outline: 0;
    background: none;
    background-color: rgba(38, 50, 56, 0.8);
    float: left;
    height: 42px;
    width: 42px;
    text-align: center;
    line-height: 42px;
    border: 0;
    color: #FFF;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 16px;
    text-rendering: auto;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-transition: background-color .4s ease;
    transition: background-color .4s ease;
    -webkit-border-radius: 0 4px 4px 0;
    border-radius: 0 4px 4px 0;
    &:hover{
        background-color: rgba(0, 150, 136, 0.8);
        cursor: pointer;
    }
}
</style>