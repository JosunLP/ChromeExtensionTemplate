<template>
    <div>
        <div class="greeting">Hey {{name}}{{exclamationMarkString}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    @Prop({ default: "Johannes der Erste" }) name!: string;
    @Prop({ default: 5 }) initialEnthusiasm!: number;
    enthusiasm = this.initialEnthusiasm;

    constructor() {
        super();
    }

    // methods
    increment() {
        this.enthusiasm++;
    }

    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    //computed
    get exclamationMarkString(): string {
        return Array(this.enthusiasm + 1).join("!");
    }
}
</script>

<style lang="scss">
.greeting {
    font-size: 20px;
}
</style>