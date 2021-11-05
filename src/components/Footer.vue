<template>
  <div class="footer-nav">
      <div class="footer-nav__item">
          <img class="footer-nav__item-home-active" src="../img/icons/home-icon.svg"/>
      </div>
      <div class="footer-nav__item">
          <img class="footer-nav__item-liked" src="../img/icons/heart-icon.svg"/>
      </div>
      <div class="footer-nav__item">
          <img class="footer-nav__item-profile" src="../img/icons/user-icon.svg"/>
      </div>
      <div class="footer-nav__item">
          <img class="footer-nav__item-history" src="../img/icons/history-icon.svg"/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../utils/style-variables.scss';

.footer-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 0 0 auto;
    z-index: 999;
    height: 100px;
    @include padding-page;

    &__item{
        @include nav-item-style;
        &-home{
            @include icon-props;
            &-active{
                box-shadow:  10px 5px 15px  #d7390077
            }
            &:hover{
                fill: black;
            }
        }
        &-liked{
            @include icon-props;
        }
        &-profile{
            @include icon-props;
        }
        &-history{
            @include icon-props;
        }
    }
}
</style>