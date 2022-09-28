import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Estado da Aplicação
  // Alterado por mutations
  // Alteração de States geram 'renders'
  state: {
    nome: 'Zanatta',
    empresa: 'Fleek Cursos',
    logado: false
  },
  // Objeto de Somente Leitura da Aplicação
  getters: {

  },
  // Alteração no estado da Aplicação - Somente devem ocorrer alterações dentro das Mutations
  // Execução de Forma Sincrona
  // Acionado através de "commit"
  mutations: {
  },
  // Ação - Que é realizada através de um "dispatch"
  // Pode executar tarefas assíncrona 
  // Encarregado de disparar Mutations caso realize alteração de estado da aplicação
  actions: {
  },
  // 'Construir' divisões dentro da 'store'
  modules: {
  }
})
