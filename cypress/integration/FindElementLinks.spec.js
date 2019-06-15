describe("Find Elements Links", () => {
    beforeEach(() => cy.visit("/buscaelementos/links"));

    it("Links - OK 200 SUCCESS", () => {
        cy.get("[href='/buscaelementos/success']").click();
    });

    it("Links Erro 400 - Bad Request", () => {
        cy.get("[href='/buscaelementos/badrequest']").click();
    });

    it("Links Erro 404 - Page not found", () => {
        cy.get("[href='/buscaelementos/notfound']").click();
    });

    it("Links Erro 500 - Internal Server Error", () => {
        cy.get("[href='/buscaelementos/internalservererror']").click();
    });


});