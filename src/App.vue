<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item @click="setRootData('beginner')" to="/beginner">
                    Vue Beginner
                </b-nav-item>
                <b-nav-item @click="setRootData('Junior')" to="/junior">
                    Vue Junior
                </b-nav-item>
                <b-nav-item @click="setRootData('Senior')" to="/about">
                    Vue Senior
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <router-view/>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Action, Mutation} from "vuex-class";

    @Component
    export default class App extends Vue {
        @Action readonly setRootData: undefined;
        @Mutation readonly setCategory: undefined;
    }
</script>