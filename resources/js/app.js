require('./bootstrap');
import Vue from 'vue';
import App from '@components/App'

// plugins
import registerPlugins from '@plugins'
registerPlugins(Vue)


const app = new Vue({
    el: '#app',
    render: h => h(App),
});
