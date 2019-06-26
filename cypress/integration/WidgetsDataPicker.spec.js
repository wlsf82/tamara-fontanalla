describe("Widgets DataPicker", () => {
    beforeEach(() => cy.visit("/widgets/datapicker"));

    it("Widgets DataPicker", () => {
        cy.get("#datepicker").click();
        cy.get(".is-today > button.datepicker-day-button").click();
        cy.get(".btn-flat.datepicker-done.waves-effect").click();
    });
});