import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import './assets/app.scss'
import router from './router'

window.$ = window.jQuery = jQuery

createApp(App).use(router).mount('#app');
