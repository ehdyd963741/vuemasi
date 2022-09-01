import { createApp } from 'vue'
import App from './App.vue'
// .js생략가능
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')

// vue 프로그램이 실행되면 최초 Entry Point 가 된다.