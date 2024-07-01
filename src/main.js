import { createApp } from 'vue';
import App from './App.vue';

import baiduMap from 'vue3-baidu-map-gl';

import './style.css';

const app = createApp(App);

app.use(baiduMap, {
  ak: '40rN64E5W1CA7HiAYXSrxWFF2MHNa5eg',
});

app.mount('#app');
