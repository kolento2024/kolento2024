import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import Vant from 'vant';
import { Icon } from 'vant';
import 'vant/lib/index.css';


const app = createApp(App)
app.use(Antd);
app.use(Vant);
app.use(Icon);

app.use(createPinia())
app.use(router)

app.mount('#app')
