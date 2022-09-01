<template>
  <div class="wrap">
    <GoTop />
    <MobileMenu :menudata="menuData"/>
    <FixMenu />
    <HeaderView :menudata="menuData"/>
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

import {ref} from 'vue';

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
    // 메뉴 데이터
    const menuData = ref([]);
    // ref로 생성했다면, value로 접근한다.
    menuData.value = [
      {
        mainstr: '마시그래이',
        mainlink: '#',
        sub:[
          {substr:'회사소개', sublink: '#'},
          {substr:'연혁', sublink: '#'},
          {substr:'CEO인사말', sublink: '#'},
          {substr:'BI / 비전', sublink: '#'},
          {substr:'오시는길', sublink: '#'}
        ]
      },
      {
        mainstr: '메뉴',
        mainlink: '#',
        sub:[
          {substr:'신메뉴', sublink: '#'},
          {substr:'커피', sublink: '#'},
          {substr:'음료', sublink: '#'},
          {substr:'디저트', sublink: '#'},
          {substr:'MD상품', sublink: '#'}
        ]
      },
      {
        mainstr: '프랜차이즈',
        mainlink: '#',
        sub:[
          {substr:'가맹안내', sublink: '#'},
          {substr:'가맹절차', sublink: '#'},
          {substr:'매장인테리어', sublink: '#'},
          {substr:'커피 아카데미', sublink: '#'},
          {substr:'가맹상담신청', sublink: '#'}
        ]
      },
      {
        mainstr: '매장안내',
        mainlink: '#',
        sub:[
          {substr:'매장안내', sublink: '#'}
        ]
      },
      {
        mainstr: '공지사항',
        mainlink: '#',
        sub:[
          {substr:'공지사항', sublink: '#'},
          {substr:'이벤트', sublink: '#'}
        ]
      },
      {
        mainstr: '고객의소리',
        mainlink: '#',
        sub:[
          {substr:'FAQ', sublink: '#'},
          {substr:'Q&amp;A', sublink: '#'},
          {substr:'케이터링', sublink: '#'}
        ]
      }
    ];
    
    return {
      menuData
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