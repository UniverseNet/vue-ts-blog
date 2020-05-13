<template>
    <div>
        <div>
            <ul>
                <li>
                    <router-link to="/ch1">Chapter1</router-link>
                </li>
                <li>
                    <router-link to="/ch2">Chapter2</router-link>
                </li>
            </ul>
        </div>
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
