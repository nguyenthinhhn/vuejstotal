import Vue from 'vue'
import Contact from './Contact.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'
import App from './App.vue'
export const eventBus = new Vue();
Vue.component('contact-component', Contact)
Vue.component('header-component', Header)
Vue.component('footer-component', Footer)
new Vue({
  el: '#app',
  render: h => h(App)
})
