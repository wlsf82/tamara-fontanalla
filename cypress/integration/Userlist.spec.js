describe("User List", () => {
    beforeEach(() => cy.visit("/users"));
    
    it("View user's profile", () => {
        cy.get(".material-icons").first().click();
        // Neste teste o que pode ser utilizado para comparar os dados que são apresentados?

    });
    it("change first user's email", () => {
        cy.get('.material-icons').contains('edit').first().click();
        cy.get("#user_email").clear();
        const ChangeWithEmail = {
            email: "foo@bar.baz"
        };

        cy.AlterUser(ChangeWithEmail);

        cy.get("#notice").should("contain", "Seu Usuário foi Atualizado!");
    });
    it("delete first user", () => {
        cy.get("[data-method='delete']").first().click();
        cy.get("#notice").should("contain", "Seu Usuário foi removido com sucesso!");
    });

});