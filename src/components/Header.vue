<template>
  <div class="header-nav">
      <div class="header-nav__item">
          <img class="menu" src="../img/icons/menu-icon.svg"/>
      </div>
      <div class="header-nav__item">
          <img class="shopping-cart" src="../img/icons/shopping-cart.svg"/>
      </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Header'
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