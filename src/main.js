import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import ClickOutside from './directives/clickOutside.js';

const app = createApp(App);

app.directive('click-outside', ClickOutside);

app.mount('#app');
