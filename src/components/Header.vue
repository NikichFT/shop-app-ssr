<template>
  <div class="header-nav">
      <div class="header-nav__item">
          <menuIcon class="menu"/>
      </div>
      <div class="header-nav__item">
          <shoppingCart class="shopping-cart"/>
      </div>
  </div>
</template>

<script lang="ts">
import menuIcon from '@/img/icons/menu-icon.svg';
import shoppingCart from '@/img/icons/shopping-cart.svg'

export default {
    name: 'Header',
    components: {
        menuIcon, shoppingCart
    }
}
</script>

<style lang="scss" scoped>
@import '../utils/style-variables.scss';

.header-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    align-items: flex-end;
    @include padding-page;
    &__item{
        @include nav-item-style;
    }
    .menu{
        @include icon-props;
    }
    .shopping-cart{
        @include icon-props;
    }
}
</style>