describe("User List", () => {
    beforeEach(() => cy.visit("/users"));
    
//    it("change first user's email", () => {
//        cy.get(".material-icons").first().click();

        // @TODO: implement the rest.
//    });

    it("change first user's email", () => {
     // Como selecionar o segundo item de edição, com o ícone lápis? o first é a lupa.
     //   cy.get("[href='/users/8552/edit']").click();
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