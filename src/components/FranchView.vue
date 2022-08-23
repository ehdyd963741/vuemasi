<template>
  <!-- franchiser -->
    <section class="franchiser">
      <div class="inner">
        <div class="franchiser-top">
          <h2>MASIGRAY <b>Franchiser</b></h2>
          <span>마시그래이 신규 매장</span>
        </div>
        <ul class="franchiser-list clearfix">
          <li id="store-1">
            <a href="#">
              <img :src="require('@/assets/images/shop4.jpg')" alt="">
              <span>합천점</span>
            </a>
          </li>
          <li id="store-2">
            <a href="#">
              <img :src="require('@/assets/images/shop3.jpg')" alt="">
              <span>신천점</span>
            </a>
          </li>
          <li id="store-3">
            <a href="#"><img :src="require('@/assets/images/shop2.jpg')" alt="">
              <span>복현푸르지오점</span>
            </a>
          </li>
          <li id="store-4">
            <a href="#">
              <img :src="require('@/assets/images/shop1.jpg')" alt="">
              <span>대곡역점</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* franchiser */
.franchiser {
  position: relative;
  display: block;
  background: url('@/assets/images/main-store-bg.png') no-repeat center;
  background-size: cover;
  /*<---컨태인과 커버의 차이는 컨태인은 다보여라 라는 의미가 있음*/
  padding: 100px 0;
}

.franchiser .inner {}

.franchiser-top {
  position: relative;
  display: block;
}

.franchiser h2 {
  position: relative;
  display: block;
  font-size: 40px;
  color: #69ccd0;
  font-weight: 300;
  text-align: center;
}

.franchiser h2 b {
  font-weight: 500;
}

/*<--b태그는 옆으로 가야하는 글자라 포지션 디스플레이 블락 안줌*/
.franchiser span {
  position: relative;
  display: block;
  font-size: 20px;
  color: #666;
  text-align: center;
}

.franchiser-list {
  position: relative;
  display: block;
  margin-top: 40px;
}

.franchiser-list li {
  position: relative;
  display: block;
  float: left;
  /*<----플롯레프트시 꼭 clearfix해주어라*/
  width: 22%;
  /*이미지가 1000px일떄 위드는 22퍼센트를 먹어야한다*/
  margin-right: 4%;
  /*<-----그림 사이사이 마진값*/
}

.franchiser-list li:last-child {
  margin-right: 0;
  /*<--이거 그림이 딱 2.2%센트로 맞추면 남기때문에 0을 주고 4퍼센트를 준다*/
}

.franchiser-list li a {
  position: relative;
  display: block;
  text-align: center;
}

.franchiser-list li a img {
  /*<--이미지는 인라인 속성 이기에 text-align: center를 준다*/
  width: auto;
  height: 324px;
}

.franchiser-list li a span {
  position: relative;
  display: block;
  margin-top: 20px;
  color: #fff;
}

/* 프렌차이즈 반응형 영역 */
@media all and (max-width:1000px) {
  .franchiser {
    padding: 10vw 0;
  }

  .franchiser-top h2 {
    font-size: 30px;
  }

  .franchiser-top span {
    font-size: 15px;
  }

  .franchiser-list {
    margin-top: 4vw;
  }

  .franchiser-list li a img {
    height: 32.4vw;
  }

  .franchiser-list li a span {
    font-size: 15px;
    white-space: nowrap;
    margin-top: 2vw;
  }
}
</style>