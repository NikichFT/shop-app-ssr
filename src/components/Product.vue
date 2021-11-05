<template>
  <div class="product">
      <div class="product-icon">
          <img src="../img/image2.png" alt="">
      </div>
      <div class="product-body">
        <div class="product-name">Veggie tomato mix</div>
        <div class="product-price">330р</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Product'
}
</script>

<style lang="scss">
@import '../utils/style-variables.scss';

.product{
    width: 220px;
    height: 321px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    font-family: "SF Pro Rounded";
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