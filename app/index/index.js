/**
 * Created by Administrator on 17/5/6.
 */
import Vue from 'vue'
import Favlist from './components/Favlist';
import VueRouter from 'vue-router';
import App from './components/App';
import link from "./components/link"
import flex from './components/flex';
import centerAlign from './components/centerAlign';
import subRouter from './components/router'
Vue.use(VueRouter);
const routes = [
    {'path':'/',redirect:'/load'},
    {'path':'/index',component:App,children:subRouter.router},
    {'path':'/load',component:App,children:subRouter.router}
];

const router = new VueRouter({
    routes:routes
});

new Vue({
    router:router,
    render:m => m(link)
}).$mount('#test');
