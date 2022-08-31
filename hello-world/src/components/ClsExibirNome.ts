import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ClsExibirNome extends Vue {

    @Prop({
        default: 'Nome Padrão....'
    })
    public nome: string | undefined

    public exibirNome() {
        alert(this.nome)
    }

}