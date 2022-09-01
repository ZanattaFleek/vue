import { Component, Vue } from 'vue-property-decorator';

interface CadastroColaboradorInterface {
    nome: string
    endereco: string
}

@Component
export default class ColaboradorCls extends Vue {

    public rsColaborador: CadastroColaboradorInterface = {
        nome: '',
        endereco: ''
    }



}