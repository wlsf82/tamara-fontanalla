describe("Find elements Radio-button and Check-box", () => {
    beforeEach(() => cy.visit("/buscaelementos/radioecheckbox"));

    it("Find radio button", () => {
        cy.get("[for='red']").click()
    });

    it("Find check-box", () => {
        cy.get("[for='black']").click()
    });
});