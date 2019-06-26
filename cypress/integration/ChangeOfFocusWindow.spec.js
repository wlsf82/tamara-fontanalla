describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("mudancadefoco/janela"));
   
    it.only("Open new window", () => {
        // nao entendi como validar a abertura de uma nova aba, exemplo no documento:
        //https://docs.cypress.io/guides/references/trade-offs.html#Inside-the-browser
     
        cy.get('a[href="/mudancadefoco/newwindow"]').should('target', '_blank')

    });
});