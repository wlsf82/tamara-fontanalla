describe("JavaScript Alerts", () => {
    beforeEach(() => cy.visit("/mudancadefoco/alert"));

    it("Js Alert", () => {
        /**
         * Como ativar a apresentação do alerta no cypress?
         * Cypress automatically accepts alerts but you can still assert on the text content.
         * See https://docs.cypress.io/api/events/catalog-of-events.html#Window-Alert
        */
        const stub = cy.stub();

        cy.on("window:alert", stub)

        cy.contains("Clique para JS Alert").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Eu sou um alerta JS!");
        });

        cy.contains("Você clicou no alerta com sucesso!!");
    });

    it("Js Confirm", () => {
        cy.contains("Clique para JS Confirm").click();

        cy.contains("Você clicou: Ok");
    });

    it.skip("Js Prompt", () => {
        /** Como preencher o prompt?
         * I don't know.
        */
        cy.contains("Clique para JS Prompt").click();
    });
    
});