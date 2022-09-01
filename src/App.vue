<template>
  <div class="wrap">
    <GoTop />
    <MobileMenu />
    <FixMenu />
    <HeaderView/>
    <VisualView />
    <ItemsView />
    <BevarageView />
    <FranchView />
    <SnsView />
    <FooterView />
  </div>
</template>

<script>

import GoTop from '@/components/GoTop.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import FixMenu from '@/components/FixMenu.vue'
import HeaderView from '@/components/HeaderView.vue'
import VisualView from '@/components/VisualView.vue'
import ItemsView from '@/components/ItemsView.vue'
import BevarageView from '@/components/BevarageView.vue'
import FranchView from '@/components/FranchView.vue'
import SnsView from '@/components/SnsView.vue'
import FooterView from '@/components/FooterView.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    GoTop,
    MobileMenu,
    FixMenu,
    HeaderView,
    VisualView,
    ItemsView,
    BevarageView,
    FranchView,
    SnsView,
    FooterView
  },
  setup() {
    // 외부에 있는 메뉴데이터 menu.json 파일을 불러온다.
    axios.get('/data/menu.json')
    .then(response => {
      console.log(response.data);
    })
    .catch(err => console.log(err));
    return {
    }
  }
}
</script>

<style>
@charset 'utf-8';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: top;
  border: 0;
}

html {
  font-size: 16px;
  overflow-x: hidden;

}


body {
  font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #888;
  overflow-x: hidden;
}

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* float를 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}
/* layout */
.wrap {
  position: relative;
  display: block;
}
</style>