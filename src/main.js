// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'
import 'common/stylus/index.styl'
import 'babel-polyfill'
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if ((to.meta.requiresAuth || to.path.indexOf("/user") > -1)) {
        //未登录不可访问
        router.push({ name: 'login', query: { back: to.fullPath } });
    } else if (to.meta.noLogin) {
        //登录不可访问
        router.push('/');
    } else {
        next();
    }
})

router.afterEach((to, from) => {
        document.title = to.meta.title;
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})