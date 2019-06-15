describe("Find elements Radio-button and Check-box", () => {
    beforeEach(() => cy.visit("/buscaelementos/radioecheckbox"));
    it("Find radio button", () => {
    //selecionar o radio button red, não funcionou
        cy.get("[type='radio']").first().check('Red');
    });

    it("Find check-box", () => {
        cy.get("[type='checkbox']  [for='purple']").check();
    //    cy.get("#purple").first().check('purple');
    //    cy.get("[type='checkbox']").first().check();

    });
});