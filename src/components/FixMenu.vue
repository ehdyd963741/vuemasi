<template>
  <!-- 오른쪽 고정 메뉴 -->
  <div class="fix-menu">
    <a href="#"><img :src="require('@/assets/images/fix_caterring.png')" alt="케이터링"></a>
    <a href="#"><img :src="require('@/assets/images/fix_open.png')" alt="창업안내"></a>
    <a href="#"><img :src="require('@/assets/images/fix_call.png')" alt="전화번호"></a>
    <a href="#"><img :src="require('@/assets/images/fix_calling.png')" alt="문의안내"></a>
  </div>
</template>

<script scoped>
export default {
  
}
</script>

<style>
/* 고정메뉴 */
.fix-menu {
  position: fixed;
  right: 10px;
  top: 200px;
  display: block;
  z-index: 99999;
}

.fix-menu a {
  position: relative;
  display: block;
  margin-bottom: 10px;
}

@media all and (max-width:700px) {
  .fix-menu {
    display: none;
  }
}
</style>