describe("Find elements Buttons", () => {
    beforeEach(() => cy.visit("/buscaelementos/botoes"));

    it("Button Raised", () => {
       cy.get("[onclick='ativaedesativa1()']").click();

       cy.contains("Você Clicou no Botão!");
    });

    it("Button Floating", () => {
        cy.get(".btn-floating.btn-large.waves-light.red").click();

        cy.contains("Você Clicou no Botão!");
    });

    it("Button Flat", () => {
        cy.get(".waves-teal.btn-flat").click();

        cy.contains("Você Clicou no Botão!");
    });

    it("Button Submmit", () => {
        cy.get("[onclick='ativaedesativa4()']").click();

        cy.contains("Você Clicou no Botão!");
    });

    it("Button Disable", () => {
        //Existe este tipo de teste?
    });

    
});