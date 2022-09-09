import { Component, Vue } from 'vue-property-decorator';

interface CadastroColaboradorInterface {
    nome: string
    endereco: string
}

enum StatusFormEnum {
    INCLUINDO = 1,
    ALTERANDO = 2
}

@Component
export default class ColaboradorCls extends Vue {

    public statusForm: StatusFormEnum = StatusFormEnum.INCLUINDO

    private indiceRegistroAtual: number = 0

    public get StatusFormEnum(): typeof StatusFormEnum {
        return StatusFormEnum
    }

    public exibirDebug: boolean = false

    public rsColaboradores: Array<CadastroColaboradorInterface> = []

    public rsColaborador: CadastroColaboradorInterface = {
        nome: '',
        endereco: ''
    }

    public msgErro = {
        nome: '',
        endereco: ''
    }

    public confirmarDados() {

        let dadosValidos: boolean = true

        if (!this.rsColaborador.nome || this.rsColaborador.nome.length < 10) {
            this.msgErro.nome = 'Campo Nome é Obrigatório e deve ter ao menos 10 caracteres.'
            dadosValidos = false
        } else {
            this.msgErro.nome = ''
        }

        if (!this.rsColaborador.endereco || this.rsColaborador.endereco.length < 10) {
            this.msgErro.endereco = 'Campo Endereço é Obrigatório e deve ter ao menos 10 caracteres.'
            dadosValidos = false
        } else {
            this.msgErro.endereco = ''
        }

        if (dadosValidos) {

            if (this.statusForm == StatusFormEnum.INCLUINDO) {

                this.rsColaboradores.push({ ...this.rsColaborador })
                this.limparEFocar()

            } else {

                this.rsColaboradores[this.indiceRegistroAtual] = { ...this.rsColaborador }
                this.limparEFocar()
                this.statusForm = StatusFormEnum.INCLUINDO

            }

        }
    }

    private limparEFocar() {
        this.rsColaborador = {
            nome: '',
            endereco: ''
        }

            ; (<HTMLElement>this.$refs.txtNome).focus()
    }

    public excluir(indice: number) {
        this.rsColaboradores.splice(indice, 1)
    }

    private alterar(indice: number) {
        this.rsColaborador = { ...this.rsColaboradores[indice] }
        this.statusForm = StatusFormEnum.ALTERANDO
        this.indiceRegistroAtual = indice
    }



}