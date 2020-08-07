<template>
  <div>
    <b-navbar variant="light">
      <b-navbar-nav>
        <b-nav-item @click="setRootData('')" to="/">
          Home
        </b-nav-item>
        <b-nav-item-dropdown text="Vue" right>
          <b-dropdown-item to="/beginner/ch1">Chapter1</b-dropdown-item>
          <b-dropdown-item to="/beginner/ch2">Chapter2</b-dropdown-item>
          <b-dropdown-item href="#">Chapter3</b-dropdown-item>
          <b-dropdown-item href="#">Chapter4</b-dropdown-item>
        </b-nav-item-dropdown>
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
    <div class="container">
      <router-view name="header" />
      <router-view/>
    </div>

  </div>

</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Action, Mutation} from "vuex-class";

@Component
export default class App extends Vue {
  @Action
  readonly setRootData: undefined;
  @Mutation
  readonly setCategory: undefined;
}
</script>