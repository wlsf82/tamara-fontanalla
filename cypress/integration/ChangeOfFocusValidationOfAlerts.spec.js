describe("JavaScript Alerts", () => {
    beforeEach(() => cy.visit("/mudancadefoco/alert"));

    it("Js Alert", () => {
        cy.contains('Clique para JS Alert').click();
        //Como ativar a apresentação do alerta no cypress?
    });
    it("Js Confirm", () => {
        cy.contains('Clique para JS Confirm').click();

    });
    it("Js Prompt", () => {
        //Como preencher o prompt?
        cy.contains('Clique para JS Prompt').click();
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('what i want typed into it');
            cy.get('#save-changes-in-gui-button').click();
        });
    });
    
});