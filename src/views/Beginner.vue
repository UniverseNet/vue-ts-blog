<template>
    <div>
        <b-jumbotron>
            <template v-slot:header>Vue.js Beginner</template>
            <template v-slot:lead>
                <br>
                프로젝트 설치, 핵심 라이브러리(Router, Vuex)
                <br>
            </template>
            <hr class="my-4">
            <b-button-group>
                <b-button variant="primary" to="/ch1">Chapter 1</b-button>
                <b-button variant="success" to="/ch2">Chapter 2</b-button>
            </b-button-group>
        </b-jumbotron>
        <router-view/>
    </div>
</template>