import Vue from 'vue';
 
import App from './App.vue';
import '@/scss/app.scss';

Vue.config.productionTip = false;

Vue.component('base-button', () => import('@/components/elements/BaseButton'));
Vue.component('base-button-outline', () => import('@/components/elements/BaseButtonOutline'));
Vue.component('base-input', () => import('@/components/elements/BaseInput'));
Vue.component('base-checkbox', () => import('@/components/elements/BaseCheckbox'));

new Vue({
  render: h => h(App),
}).$mount('#app');
