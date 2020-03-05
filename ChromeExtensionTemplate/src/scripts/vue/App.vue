<template>
    <div>
        <HomeComponent :initialEnthusiasm="initialEnthusiasm"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HomeComponent from './components/home/Home.vue';

@Component({
  components: { HomeComponent }
})
export default class App extends Vue {
  initialEnthusiasm: number = 90;
  constructor() {
    super();
  }
}
</script>

<style lang="scss">
</style>