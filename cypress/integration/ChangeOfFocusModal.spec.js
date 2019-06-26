describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("/mudancadefoco/modal"));

    it("Open new Modal", () => {
        cy.get("a.waves-light.btn.modal-trigger").click();
        cy.get(".modal-close.waves-green.btn-flat").click();
    });
});