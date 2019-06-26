describe("Iterations Mouse Hover", () => {
    beforeEach(() => cy.visit("/iteracoes/mousehover"));
    
    it(" Mouse Hover", () => {
        cy.get(".activator").click();
        cy.get("p").should("contain", "Você usou o mouse hover!");
    });
});