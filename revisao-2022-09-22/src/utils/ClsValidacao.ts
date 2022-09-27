export default class ClsValidacao {

    /**
     * Testa se uma string é vazia ou Nula ou Undefined
     * @param oque String a ser Testada
     * @returns {Boolean} - Verdadeiro caso seja Vazio, Nula ou Undefined
     */
    public eVazio(oque: string): boolean {

        let retorno: boolean = false

        if (oque == null) retorno = true
        if (oque == undefined) retorno = true
        if (typeof oque == "string" && oque.length == 0) retorno = true

        return retorno

    }
}