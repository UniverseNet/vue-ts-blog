import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import DevVue from '../views/DevVue.vue'
import Ch1 from "@/components/Ch1.vue";
import Ch2 from "@/components/Ch2.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/vue',
        component: DevVue,
        // component: () => import(/* webpackChunkName: "about" */ '../views/DevVue.vue'),
        children:[
            {
                path: '/ch1',
                component: Ch1,
            },
            {
                path: '/ch2',
                component: Ch2,
            },
        ]
    },
    {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
