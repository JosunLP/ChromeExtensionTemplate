import '../../Content/sass/style.scss';
import 'popper.js';
import 'jquery';
import 'jquery-validation';
import 'bootstrap';
import Vue from 'vue';
import App from "./App.vue"

let v = new Vue({
    el: "#app",
    template: `<App/>`,
    components: {
        App
    }
});