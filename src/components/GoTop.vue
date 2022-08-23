<template>
  <!-- gotop 위로가기 -->
  <button class="gotop"></button>
</template>

<script>
import $ from 'jquery';
import {onMounted} from 'vue';

export default {

  setup() {

    onMounted(() => {
      let go_top = $('.gotop');
      go_top.click(function () {
      $('html').animate({
      scrollTop: 0
      }, 1000);

      });
    });

    return {
    }

  }
}

</script>

<style scoped>
/* gotop 위로가기 */
.gotop {
  position: fixed;
  right: 20px;
  bottom: 50px;
  display: block;
  width: 50px;
  height: 50px;
  background: url('@/assets/images/gotop.png') no-repeat center;
  background-size: cover;
  border: 0;
  cursor: pointer;
  z-index: 999;
}
</style>