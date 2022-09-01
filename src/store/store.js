import {createStore} from 'vuex'
// 모든 Vue 화면에서 공유되어질 state(dater) 관리 목적
export default createStore({
  //state: 데이터를 모아서 관리하는 객체
  state: {},
  // actions: 서버및 파일 연동 , 성공, 실패, 체크후에 mutation 실행
  actions: {},
  // mutations: state(데이터) 업데이트 자리
  mutations: {},
  // getters: state를 컴퍼넌트에 전달, 컴포넌트의 computed 처리
  getters: {},
  
});