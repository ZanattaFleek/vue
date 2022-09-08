<template>
    <div>
        <div class="formulario">
            <h3>Cadastro de Colaborador</h3>
            <label for="txtNome">Nome:</label>
            <input type="text" id="txtNome" value="" @change="validarFormulario()" v-model="rsColaborador.nome">
            <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

            <label for="txtEndereco">Endereço:</label>
            <input type="text" id="txtEndereco" value="" @change="validarFormulario()" v-model="rsColaborador.endereco">
            <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>

            <input type="button" @click="validarFormulario()" value="Cadastrar" />

            <div class="debug" v-if="exibirDebug">
                {{ rsColaborador }}
            </div>
        </div>

        <div class="tabelaDados">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                </tr>
                <tr>
                    <td>Marcelo</td>
                    <td>Av. 21 de Abril</td>
                    <td>
                        <i @click="excluir()" class="material-icons botaoacao">close</i>
                        <i @click="alterar()" class="material-icons botaoacao">edit</i>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script lang="ts">
import ColaboradorCls from './ColaboradorCls'
export default ColaboradorCls
</script>

<style scoped>
.debug {
    margin-top: 100px;
}

.formulario {
    text-align: left;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
}

.tabelaDados {
    text-align: left;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
}

@media(min-width: 600px) {
    .formulario {
        width: 33%;
        margin-left: 33%;
        margin-top: 100px;
    }

    .tabelaDados {
        width: 60%;
        margin-left: 20%;
        margin-top: 100px;
    }
}

@media(max-width: 600px) {
    .formulario {
        width: 90%;
        margin-left: 5%;
        margin-top: 70px;
    }

    .tabelaDados {
        width: 90%;
        margin-left: 5%;
        margin-top: 70px;
    }
}

input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 10px;
}

input[type=button] {
    border-radius: 10px;
    padding: 10px;
    margin-top: 40px;
    background-color: aquamarine;
}

label {
    margin-top: 18px;
    display: block;
}

.mensagemErro {
    color: red;
    font-size: 10px;
    position: relativa;
    bottom: 8px;
}

.botaoacao {
    background-color: aquamarine;
    border-radius: 10px;
    cursor: default;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
}

table th {
    background-color: blue;
    border-radius: 10px;
    padding: 10px;
    color: white;
}

table td {
    background-color: rgb(240, 240, 204);
    padding: 10px;
    border-radius: 10px;
}
</style>