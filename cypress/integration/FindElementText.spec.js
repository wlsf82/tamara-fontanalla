describe("Find Text", () => {
    beforeEach(() => cy.visit("buscaelementos/textos"));

    it("Find Text ", () => {
        cy.get("[href='https://medium.com/automa%C3%A7%C3%A3o-com-batista/debugando-com-o-byebug-2257ae37c3e']")
            .should("exist");
    })


});