import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// directives
Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '600px'
    }
    if (binding.arg == 'column') {
      el.style.border = '1px solid #eee'
      el.style.padding = '1vh 1vw'
    }
  }
});

// filters
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase();
});

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...';
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
