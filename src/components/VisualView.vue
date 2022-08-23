<template>
  <!-- visual -->
    <section class="visual">
      <div class="swiper-container sw-visual">
        <!-- 슬라이드 내용 -->
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#" class="sw-visual-1"></a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="sw-visual-2"></a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="sw-visual-3"></a>
          </div>
          <div class="swiper-slide">
            <a href="#" class="sw-visual-4"></a>
          </div>
        </div>
        <!-- 슬라이드 좌우버튼 -->
        <button class="sw-visual-prev"></button>
        <button class="sw-visual-next"></button>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* visual */
.visual {
  position: relative;
  display: block;
  height: 700px;
}

.sw-visual {
  width: 100%;
  height: 100%;
}

.sw-visual a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.sw-visual-1 {
  background: url('@/assets/images/main_visual01.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-2 {
  background: url('@/assets/images/main_visual02.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-3 {
  background: url('@/assets/images/main_visual03.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-4 {
  background: url('@/assets/images/main_visual04.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-prev {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);

  display: block;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow.png') no-repeat;
  /* background-position: 0 0; */
  background-size: cover;

  z-index: 9;
  border: 0;
  cursor: pointer;
}

.sw-visual-next {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);

  display: block;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow.png') no-repeat right top;
  /* background-position: -55px 0; */
  background-size: cover;

  z-index: 9;
  border: 0;
  cursor: pointer;
}

.sw-visual-pg {
  z-index: 9;
}

/* visual PC 버전 */
/* visual 반응형 버전 */
@media all and (max-width:1000px) {
  .visual {
    height: 70vw;
  }

  .sw-visual-next {
    width: 5.5vw;
    height: 9.8vw;
    /* background-position: -5.5vw 0; */
  }

  .sw-visual-prev {
    width: 5.5vw;
    height: 9.8vw;
  }
}

</style>