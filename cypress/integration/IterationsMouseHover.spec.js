describe("Iterations Mouse Hover", () => {
    beforeEach(() => cy.visit("/iteracoes/mousehover"));
    
    it("Mouse Hover", () => {
        cy.get(".activator").trigger('mouseover')

        cy.contains("Parábens").should("be.visible");
        cy.contains("Você usou o mouse hover!").should("be.visible");
    });
});