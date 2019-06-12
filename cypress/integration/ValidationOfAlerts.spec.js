describe("JavaScript Alerts", () => {
    beforeEach(() => cy.visit("/mudancadefoco/alert"));

    it("Js Alert", () => {
        cy.contains('Clique para JS Alert').click();
        //Como ativar a apresentação do alerta no cypress?

    //  cy.on('window:alert', 'Eu sou um alerta JS!');
   //   cy.on('window:confirm',);
  //    cy.confirm()

    });
});