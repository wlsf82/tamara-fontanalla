describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("widgets/accordion"));

    it("Open First", () => {
        cy.get(".material-icons").first().click();
        cy.get(".collapsible-body").should("contain", "Primeiro Texto.");
    });
    it("Open Second", () => {
        cy.contains('Second').click();
        cy.get(".collapsible-body").should("contain", "Segundo Texto.");
    });
    it("Open Third", () => {
        cy.contains('Third').click();
        cy.get(".collapsible-body").should("contain", "Terceiro Texto.");
    });
});