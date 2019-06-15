describe("Find Text", () => {
    beforeEach(() => cy.visit("buscaelementos/textos"));

    it.only("Find Text ", () => {
   //    cy.get("[href='https://medium.com/automa%C3%A7%C3%A3o-com-batista/debugando-com-o-byebug-2257ae37c3e']").click();
        cy.get(".btn-floating.halfway-fab.waves-light.red").first().click();
    })


});