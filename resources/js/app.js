require('./bootstrap');
import Vue from 'vue';
import vuetify from './plugins/vuetify';
window.Vue = Vue;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import App from './App.vue';
import Login from './views/Login.vue';

const app = new Vue({
    vuetify,
    components:{
        App, Login
    },
    // render: h => h(App),
    el: '#app',
});
