<template>

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
</template>

<script lang="ts">
import ColaboradorCls from './ColaboradorCls'
export default ColaboradorCls
</script>

<style>
.debug {
    margin-top: 100px;
}

.formulario {
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
}

@media(max-width: 600px) {
    .formulario {
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
    font-size: 14px;
    position: relativa;
    bottom: 8px;
}
</style>