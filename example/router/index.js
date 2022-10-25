import Vue from 'vue'
import VueRouter from 'vue-router'
import routeDoc from './route.doc'

Vue.use(VueRouter)

let route = [
    {
        path: '/',
        redirect:'/component',
        hidden:true,
    },
    {
        path: '/component',
        name: 'component',
        redirect:'/component/button',
        component: ()=> import('@/pages/component'),
        children:routeDoc,
        mate:{
            name:'组件'
        }
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../docs/button.md'),
        hidden:true,
    },
    {
        path: '/tests',
        name: 'tests',
        component: () => import('../components/test.vue'),
        hidden:true,
    },
    {
        path: '/*',
        name: '404',
        component: ()=> import('../pages/notFound'),
        hidden:true,
    }
]

const router = new VueRouter({
    routes:route
})

export default router