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
    const userWithOnlyMandatoryFields = {
      firstName: "Tamara",
      lastName: "Fontanella",
      email: "foo@bar.baz"
    };

    cy.createUser(userWithOnlyMandatoryFields);

    cy.get("#notice").should("contain", "Usuário Criado com sucesso");
  });

  it("user creation error - wrong email", () => {
    const userWithInvalidEmail = {
      firstName: "Tamara",
      lastName: "Fontanella",
      email: "foo@bar"
    };

    cy.createUser(userWithInvalidEmail);

    cy.get("#error_explanation").should("contain", "Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid");
  });

  it("register all fields", () => {
    const userWithAllData = {
      firstName: "Tamara",
      lastName: "Fontanella",
      email: "foo@bar.baz",
      address: "Some address here",
      university: "FURB",
      profile: "some profile here",
      gender: "feminino",
      age: "26"
    };

    cy.createUser(userWithAllData);

    cy.get("#notice").should("contain", "Usuário Criado com sucesso");
  });
});