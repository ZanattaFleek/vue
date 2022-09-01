<template>
  <div class="hello">
    <input type="text" v-model="nome" placeholder="Digite Aqui Seu Nome...." />
    <br />
    <br />
    <input type="text" v-model="cep" placeholder="CEP" />
    <br />
    <br />
    <input type="text" v-model="endereco" disabled placeholder="Digite Aqui Seu Endereco...." />

    <br />
    <br />
    Nome Digitado: {{ nome }}

    <br />
    <br />

    <input type="button" @click="buscaCep()" value="Buscar CEP" />
    <br />
    <br />
    {{ debug }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import axios from 'axios'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public nome: string = 'Fleek Cursos'
  public endereco: string = ''
  public cep: string = ''

  public debug: any = ''

  public maiusculo() {
    this.nome = this.nome.toUpperCase()
  }

  public buscaCep() {

    axios.get('http://viacep.com.br/ws/'.concat(this.cep).concat('/json/')).then(rs => {
      //this.debug = rs
      this.endereco = rs.data.logradouro
    })

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
