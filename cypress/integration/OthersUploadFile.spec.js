describe("Upload File", () => {
    beforeEach(() => cy.visit("/outros/uploaddearquivos"));

    it("Upload File", () => {
        cy.get(".file-field.input-field").click();
        //Aqui o click nao realiza a abertura da tela para selecao do local do arquivo
    });
});