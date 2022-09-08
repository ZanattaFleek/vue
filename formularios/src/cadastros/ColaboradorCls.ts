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

    public msgErro = {
        nome: '',
        endereco: ''
    }

    public validarFormulario() {
        if (!this.rsColaborador.nome || this.rsColaborador.nome.length < 10) {
            this.msgErro.nome = 'Campo Nome é Obrigatório e deve ter ao menos 10 caracteres.'
        } else {
            this.msgErro.nome = ''
        }

        if (!this.rsColaborador.endereco || this.rsColaborador.endereco.length < 10) {
            this.msgErro.endereco = 'Campo Endereço é Obrigatório e deve ter ao menos 10 caracteres.'
        } else {
            this.msgErro.endereco = ''
        }
    }



}