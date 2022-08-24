<template>
      <!-- beverage -->
    <section class="beverage">
      <div class="inner">
        <div class="beverage-top">
          <h2>MASIGARY <b>MENU</b></h2>
          <span>마시그래이의 다양한 메뉴를 맛보세요</span>
        </div>
        <!-- beverage 슬라이드 -->
        <div class="swiper-container sw-beverage">
          <!-- 슬라이드내용 -->
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#"><img :src="require('@/assets/images/menu_slide01.png')" alt=""></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="require('@/assets/images/menu_slide02.png')" alt=""></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="require('@/assets/images/menu_slide03.png')" alt=""></a>
            </div>
          </div>
          <!-- 좌우버튼 -->
          <div class="sw-beverage-prev"></div>
          <div class="sw-beverage-next"></div>
          <!-- 컨트롤 -->
          <div class="sw-beverage-control">
            <div class="sw-beverage-pg"></div>
          </div>
        </div>

      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* beverage */
.beverage {
  position: relative;
  display: block;
  background: url('@/assets/images/main-menu-cover.jpg') no-repeat center;
  background-size: cover;
  padding: 100px 0;
}

.beverage-top {
  position: relative;
  display: block;
}

.beverage-top h2 {
  font-size: 40px;
  color: #000;
  text-align: center;
  font-weight: 400;
}

.beverage-top h2 b {
  font-weight: 600;
}

.beverage-top span {
  position: relative;
  display: block;
  text-align: center;
  font-size: 20px;
  color: #666;
  margin-top: 10px;
}

/* veberage 슬라이드 */
.sw-beverage {
  width: 100%;
  height: 560px;
}

.sw-beverage a {
  position: relative;
  display: block;
}

.sw-beverage a img {
  width: 100%;
  height: auto;
}

.sw-beverage-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: block;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow3.png') no-repeat left center;
  background-size: cover;
  z-index: 9;
  cursor: pointer;
}

.sw-beverage-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: block;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow3.png') no-repeat right center;
  background-size: cover;
  cursor: pointer;
  z-index: 9;
}

.sw-beverage-control {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  z-index: 9;
}

.sw-beverage-pg {
  font-size: 18px;
  color: #000;
}

.swiper-pagination-current {
  font-weight: 600;
}

@media all and (max-width:1000px) {
  .beverage {
    padding: 10vw 0;
  }

  .beverage-top h2 {
    font-size: 30px;
  }

  .beverage-top span {
    font-size: 15px;
  }

  .sw-beverage {
    height: 56vw;
  }

  .sw-beverage-prev,
  .sw-beverage-next {
    width: 5.5vw;
    height: 9.8vw;
  }
}

</style>