describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("/mudancadefoco/modal"));

    it("Open new Modal", () => {
        cy.contains("Abrir").click();
        cy.contains("Fechar").click();
    });
});