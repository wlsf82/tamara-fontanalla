describe("Find element table", () => {
    beforeEach(() => cy.visit("buscaelementos/table"));
   
    it("First item in the list", () => {
        cy.get('td').should('contain', 'Arroz','1','$2.87');
    });
});