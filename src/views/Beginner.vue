<template>
<!--    <div>-->
<!--        <b-list-group>-->
<!--            <b-list-group-item to="/ch1">Chapter1</b-list-group-item>-->
<!--            <b-list-group-item to="/ch2">Chapter2</b-list-group-item>-->
<!--        </b-list-group>-->
<!--        <router-view />-->
<!--        <b-dropdown id="dropdown-1" text="Vue Beginner">-->
<!--            <b-dropdown-item>Chapter1</b-dropdown-item>-->
<!--            <b-dropdown-divider></b-dropdown-divider>-->
<!--            <b-dropdown-item>Chapter2</b-dropdown-item>-->
<!--        </b-dropdown>-->
<!--    </div>-->
    <div>
        <b-jumbotron>
            <template v-slot:header>Vue Beginner</template>
            <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
            </template>
            <hr class="my-4">
            <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
            </p>
            <b-button-group>
                <b-button variant="primary" to="/ch1">Chapter 1</b-button>
                <b-button variant="success" to="/ch2">Chapter 2</b-button>
            </b-button-group>
        </b-jumbotron>
        <router-view />
    </div>
</template>

<!--<script>-->
<!--    // @ is an alias to /src-->
<!--    import Ch1 from '@/components/BeginnerCh1.vue'-->
<!--    import Ch2 from '@/components/BeginnerCh2.vue'-->

<!--    export default {-->
<!--        name: 'DevVue',-->
<!--        components: {}-->
<!--    }-->
<!--</script>-->
