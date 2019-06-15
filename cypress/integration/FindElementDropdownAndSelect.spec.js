describe("Find Dropdown and Select", () => {
    beforeEach(() => cy.visit("buscaelementos/dropdowneselect"));

    it("Find Dropdown ", () => {
       cy.get(".btn.dropdown-button").click();
       cy.get("#dropdown1").click();
       cy.get("#div1 > h5").should("contain", "Você Clicou no Dropdown Inbox!")
    })
    
    it("Find Selects ", () => {
    //  cy.get(".select-dropdown").click();
        cy.get(".select-dropdown").select('Naruto').click(); 
    })
})