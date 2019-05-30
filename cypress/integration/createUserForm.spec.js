describe("Create user", () => {
  beforeEach(() => cy.visit("/users/new"));

  it("by only filling full name and email", () => {
    cy.get("#user_name").type("Tamara");
    cy.get("#user_lastname").type("Fontanella");
    cy.get("#user_email").type("foo@bar.baz");
    cy.get("input[type='submit']").click();

    cy.get("#notice").should("contain", "Usuário Criado com sucesso");
  });

  it("by only filling full name and email - using support command", () => {
    cy.createUser("Tamara", "Fontanella", "foo@bar.baz");

    cy.get("#notice").should("contain", "Usuário Criado com sucesso");
  });

  it.only("user creation error - wrong email", () => {
    cy.createUser("Tamara", "Fontanella", "foo@bar");

    cy.get("#error_explanation").should("contain", "Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid");
  });

  it("register all fields", () => {
    cy.createUser("Tamara", "Fontanella", "foo@bar.baz", "Brasil", "FURB", "analista de teste", "feminino", "26");

    cy.get("#notice").should("contain", "Usuário Criado com sucesso");
  });
});