describe("Widgets Autocomplete", () => {
    beforeEach(() => cy.visit("/widgets/autocomplete"));
   
    it("Autocomplete", () => {
        cy.get("#autocomplete-input").type("Santa C{downarrow}{enter}");
    });
});