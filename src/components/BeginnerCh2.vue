<template>
    <div>
        <h2>
            Chapter2. Vue Router
        </h2>
        <hr class="my-4">
        프로젝트 생성이 완료되었다면 핵심코어인 Vue Router에 대해 집고 넘어가보자.<br><br>

        <h5>Vue Router 란?</h5>

        웹페이지 간 이동을 위한 라이브러리.<br>
        보통 브라우저에서 웹 페이지를 요청하면 서버에서 응답을 받아 다시 사용자에게 돌려주는 시간동안 화면 상에 깜빡거리는 현상이 나타나는데,<br>
        이런 부분을 Router 라이브러리를 이용해 변경이 필요한 영역만 처리하게 되면 화면 깜빡임 없이 더 빠르게 화면을 조작하여 사용자 경험이 향상된다.<br>
        <br>
        <b-img :src="require('@/assets/img/router1.png')" fluid></b-img><br>
        <br>
        보통 Vue-Cli를 이용해 Router library를 추가하고 프로젝트를 생성하게되면 다음과 같은 프로젝트 구조가 생기며<br>
        router 폴더내 router.ts라는 파일이 생성되어 있는것을 볼 수 있다.<br>
        <br>
        <b-img :src="require('@/assets/img/router2.png')" fluid></b-img><br>
        <br>
        <pre>
            <code>
                import Vue from 'vue'
                import VueRouter, {RouteConfig} from 'vue-router'
                import Beginner from '../views/Beginner.vue'
                import Junior from '../views/Junior.vue'
                import BeginnerCh1 from "@/components/BeginnerCh1.vue";
                import BeginnerCh2 from "@/components/BeginnerCh2.vue";

                Vue.use(VueRouter)

                const routes: Array&lt;RouteConfig&gt; = [
                    {
                        path: '/beginner',
                        component: Beginner,
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
            </code>
        </pre>
        router.ts 파일을 다음과 같이 수정 했는데 Router의 component를 설정하는 방법에는 해당 코드에서 직접 import 함수를 지정해주는 방법과<br>
        스크립트에서 import한 객체를 지정해주는 방법 등 여러가지가 있다.<br>


    </div>
</template>
<style scoped>
    div { padding: 1rem; }
    pre code {
        background-color: #eee;
        border: 1px solid #999;
        display: block;
        padding: 20px;
    }
</style>