describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("mudancadefoco/janela"));
   
    it("Opens on a new tab", () => {
        /**
         * Nao entendi como validar a abertura de uma nova aba.
         * O comportamento padrão de qualquer navegador web é que
         * se um elemento to tipo anchor o qual possua um atributo
         * target igual ao valor '_blank', este irar abrir o link
         * em uma nova aba. Sem este valor o link é aberto na mesma
         * página.
         * Portanto, basta testar que o link possui o valor '_blank'
         * para o atributo 'target' do link.
         */
        cy.contains("Clique aqui").invoke("attr", "target")
            .should("be.eq", "_blank");
    });
});