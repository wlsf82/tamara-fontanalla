describe("Automação com Batista", () => {
  beforeEach(() => cy.visit("/"));

  it("Web", () => {
    cy.contains("Começar Automação Web").click();

    cy.url().should("be.equal", `${Cypress.config().baseUrl}/treinamento/home`);
  });

  it("API", () => {
    cy.contains("Começar Automação de Api").click();

    cy.url().should("be.equal", `${Cypress.config().baseUrl}/apibatista/sobre_api`);
  });
});