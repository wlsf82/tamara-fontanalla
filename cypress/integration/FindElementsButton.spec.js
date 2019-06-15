describe("Find elements Buttons", () => {
    beforeEach(() => cy.visit("/buscaelementos/botoes"));

    it("Button Raised", () => {
       cy.get("[onclick='ativaedesativa1()']").click();
       cy.get("#div1 > h5").first().should("contain", "Você Clicou no Botão!");
    });

    it("Button Floating", () => {
        cy.get(".btn-floating.btn-large.waves-light.red").click();
        cy.get("#div2 > h5").first().should("contain", "Você Clicou no Botão!");
    });

    it("Button Flat", () => {
        cy.get(".waves-teal.btn-flat").click();
        cy.get("#div3 > h5").first().should("contain", "Você Clicou no Botão!");
    });
    it("Button Submmit", () => {
        cy.get("[onclick='ativaedesativa4()']").click();
        cy.get("#div4 > h5").first().should("contain", "Você Clicou no Botão!");
    
    });
    it("Button Disable", () => {
        //Existe este tipo de teste?
    });

    
});