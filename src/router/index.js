import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

const Login = () => import('../pages/Login/Login.vue')
const routes = [
    {
        path: '/msite',
        component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
        meta: {
            showFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter: true
        }

    },
    {
        path: '/',
        redirect: '/msite'
    },
    {
        path: '/login',
        component: Login,
    },
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})