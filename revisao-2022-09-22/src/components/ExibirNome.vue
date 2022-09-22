<template>
    <div>
        <p>
            O nome é: {{ nome }}
        </p>
        <p>
            <input type="button" value="Exibir Nome" @click="exibirNome()" />
        </p>
    </div>
</template>

<script lang="ts">

import ClsExibirNome from './ClsExibirNome'
export default ClsExibirNome

</script>