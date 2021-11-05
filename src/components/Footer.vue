<template>
  <div class="footer-nav">
      <div class="footer-nav__item">
          <homeIcon class="footer-nav__item-home active-nav-footer"/>
      </div>
      <div class="footer-nav__item">
          <userIcon class="footer-nav__item-profile"/>
      </div>
      <div class="footer-nav__item">
          <heartIcon class="footer-nav__item-liked"/>
      </div>
      <div class="footer-nav__item">
          <historyIcon class="footer-nav__item-history"/>
      </div>
  </div>
</template>

<script lang="ts">
import homeIcon from '@/img/icons/home-icon.svg'
import userIcon from '@/img/icons/user-icon.svg'
import heartIcon from '@/img/icons/heart-icon.svg'
import historyIcon from '@/img/icons/history-icon.svg'

export default {
    name: 'Footer',
    components: {
        homeIcon, userIcon, heartIcon, historyIcon
    },
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
        }
        &-liked {
            @include icon-props;
        }
        &-profile{
            @include icon-props;
        }
        &-history{
            @include icon-props;
        }
        .active-nav-footer{
            filter:  drop-shadow(10px 10px 10px  #d7390077)
        }
    }
}
</style>