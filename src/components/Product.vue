<template>
  <div class="product">
      <div class="product-icon">
          <img :src="image" :alt="name">
      </div>
      <div class="product-body">
        <div class="product-name">{{name.split(',')[0]}}</div>
        <div class="product-price">{{price}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        name: String,
        price: Number,
        image: String
    }
}
</script>

<style lang="scss">
@import '../utils/style-variables.scss';

.product{
    width: 301px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    font-family: "SF Pro Rounded";
    cursor: pointer;
    transition: all ease .4s;
    align-self: center;
    justify-self: center;
    &:hover{
        transform: scale(1.2);
        z-index: 999;
    }
    &-icon{
        img{
            width: 164px;
            height: 164px;
            border-radius: 50%;
        }
        position: absolute;
        padding-bottom: 150px;
        z-index: 9;
    }
    &-body{
        width: 220px;
        height: 270px;
        background: #FFFFFF;
        box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    &-name{
        font-size: 22px;
        margin-top: 70%;
    }
    &-price{
        font-size: 17px;
        color: $active-color;
    }
}
</style>
