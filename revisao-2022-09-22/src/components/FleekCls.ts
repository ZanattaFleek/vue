import Vue from "vue";
import Component from "vue-class-component";

import ClsValidacao from '../utils/ClsValidacao'

@Component
export default class FleekCls extends Vue {

    public rsNomes: Array<string> = ['Fleek', 'Cursos', 'Zanatta', 'Marcelo', 'João', 'Texugo']

    public nome: string = ""
    public dadosValidos: boolean = true

    public cadastrarCliente() {

        this.dadosValidos = true

        let clsValidacao: ClsValidacao = new ClsValidacao()

        if (clsValidacao.eVazio(this.nome)) {
            this.dadosValidos = false
        }

    }

}