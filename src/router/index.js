import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Cal1 from '@/components/Cal/Cal1.0'
import Cal2 from '@/components/Cal/Cal1.1'
import Cal3 from '@/components/Cal/Cal1.2'
import Cal4 from '@/components/Cal/Cal1.3'
import Cal5 from '@/components/Cal/Cal1.4'
import Cal6 from '@/components/Cal/Cal1.5'
import Cal7 from '@/components/Cal/Cal1.6'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'Cal1',
        component: Cal1,
        meta: { title: '房贷计算器' }
    }, {
        path: '/cal2',
        name: 'Cal2',
        component: Cal2,
        meta: { title: '车贷计算器' }
    }, {
        path: '/cal3',
        name: 'Cal3',
        component: Cal3,
        meta: { title: '公积金贷款计算器' }
    }, {
        path: '/cal4',
        name: 'Cal4',
        component: Cal4,
        meta: { title: '五险一金计算器' }
    }, {
        path: '/cal5',
        name: 'Cal5',
        component: Cal5,
        meta: { title: '等额本金还款计算器' }
    }, {
        path: '/cal6',
        name: 'Cal6',
        component: Cal6,
        meta: { title: '等额本息计算器' }
    }, {
        path: '/cal7',
        name: 'Cal7',
        component: Cal7,
        meta: { title: '还款方式比较计算器' }
    }]
})