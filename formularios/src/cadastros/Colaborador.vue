<template>
    <div>
        <label for="txtNome">Nome:</label>
        <input type="text" id="txtNome" value="" v-model="rsColaborador.nome">

        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco">

        <div class="debug">
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
</style>