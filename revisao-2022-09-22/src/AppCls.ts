import Vue from "vue";
import Component from "vue-class-component";

import Fleek from './components/Fleek.vue';

@Component({
    components: {
        Fleek
    }
})
export default class App extends Vue {

    public tituloPagina: string = 'Aula de VUE - Revisão - 2022-09-22'

}