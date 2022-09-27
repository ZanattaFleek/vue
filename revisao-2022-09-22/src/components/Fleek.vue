<template>
    <div class="componenteFleek">
        <label for="txtNome">Nome:</label>
        <input maxlength="15" v-model="nome" type="text" id="txtNome" />
        <br />
        <span v-show="!dadosValidos">Preencha o Campo Nome....</span>
        <br />
        <input type="button" @click="cadastrarCliente()" value="Cadastrar" />
        <br />

        <select name="select" v-model="nome">
            <option  v-for="nome in rsNomes" :value="nome">{{nome}}</option>
        </select>

    </div>
</template>

<style src="./FleekCss.css">

</style>

<script lang="ts">
import a from './FleekCls'
export default a
</script>