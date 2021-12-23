import Vue from 'vue';
import App from './App.vue';

console.log(App);
new Vue({
  // template: '<div>hello</div>',
  render: h => h(App),
  // ...App,
}).$mount('#app');
