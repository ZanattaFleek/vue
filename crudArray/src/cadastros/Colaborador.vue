<template>
    <div>
        <div class="formulario">
            <h3>Cadastro de Colaborador</h3>
            <label for="txtNome">Nome:</label>
            <input type="text" ref="txtNome" id="txtNome" value="" v-model="rsColaborador.nome">
            <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

            <label for="txtEndereco">Endereço:</label>
            <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco">
            <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>

            <input type="button" @click="confirmarDados()"
                :value="statusForm == StatusFormEnum.INCLUINDO ? 'Cadastrar' : 'Alterar'" />
                
        </div>

        <div class="tabelaDados">
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                </tr>
                <tr v-for="(colaborador, indice) in rsColaboradores">
                    <td>{{colaborador.nome}}</td>
                    <td>{{colaborador.endereco}}</td>
                    <td>
                        <i @click="excluir(indice)" class="material-icons botaoacao">close</i>
                        <i @click="alterar(indice)" class="material-icons botaoacao">edit</i>
                    </td>
                </tr>
            </table>
        </div>

        <div class="debug" v-if="exibirDebug">
            {{ rsColaborador }}
        </div>

    </div>
</template>

<script lang="ts">
import ColaboradorCls from './ColaboradorCls'
export default ColaboradorCls
</script>

<style scoped src="./ColaboradorCss.css">

</style>