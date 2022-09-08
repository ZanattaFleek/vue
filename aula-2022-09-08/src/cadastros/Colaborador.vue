<template>
    <div class="formulario">

        <span class="material-icons">face</span>
        
        <label for="txtNome">Nome:</label>
        <input type="text" id="txtNome" value="" @keypress="checarCaracter" v-model="rsColaborador.nome">
        <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" @keydown.27="limparCampo"  @keydown.13="validarFormulario" v-model="rsColaborador.endereco">
        <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>

        <input type="button" @click="validarFormulario()" value="Cadastrar" />

        <div class="debug">
            {{ rsColaborador }}
        </div>

    </div>
</template>

<script lang="ts">
import ColaboradorCls from './ColaboradorCls'
export default ColaboradorCls
</script>

<style src="./estilos.css">

</style>