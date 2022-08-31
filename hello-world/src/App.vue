<template>
  <div id="app">
    <p>Aplicação Aula</p>
    <exibir-nome v-for="(cliente, chave) in rsClientes" :nome="cliente.nome"></exibir-nome>
  </div>
</template>

<script lang="ts">

import AppCls from './AppCls'
export default AppCls

</script>

