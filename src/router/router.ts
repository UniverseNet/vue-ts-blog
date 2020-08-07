import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Beginner from '../views/Beginner.vue'
import Junior from '../views/Junior.vue'
import BeginnerCh1 from "@/components/BeginnerCh1.vue";
import BeginnerCh2 from "@/components/BeginnerCh2.vue";
import Header from "@/components/Header.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/beginner',
        components: {default : Beginner, header: Header},
        // component: () => import(/* webpackChunkName: "about" */ '../views/Beginner.vue'),
        children:[
            {
                path: '/ch1',
                component: BeginnerCh1,
            },
            {
                path: '/ch2',
                component: BeginnerCh2,
            },
        ]
    },
    {
        path: '/junior',
        component: Junior,
    },
    {
        path: '/about',
        component: () => import('../views/About.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
