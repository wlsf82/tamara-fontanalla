describe("Find Dropdown and Select", () => {
    beforeEach(() => cy.visit("buscaelementos/dropdowneselect"));

    it("Find Dropdown ", () => {
       cy.get(".btn.dropdown-button").click();
       cy.get("#dropdown1").click();
       cy.get("#div1 > h5").should("contain", "Você Clicou no Dropdown Inbox!")
    })
    
    it("Find Selects ", () => {
        cy.get(".select-dropdown").first().click();
        cy.contains('Naruto').click();
    })

    it("Selects second item", () => {
        cy.get(".select-dropdown").eq(2).click();
        cy.contains('Ronaldo').click();
    })
})