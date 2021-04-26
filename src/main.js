import { createApp } from 'vue'
import App from './App.vue'
//scss 方法二. 透過script匯入
import '@/assets/scss/main.scss';

import router from '@/router/router'
import '@/assets/scss/dropdownMenu.scss';
//createApp(App).mount('#app')
createApp(App).use(router).mount('#app');
