// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("createUser", user => {
  cy.get("#user_name").type(user.firstName);
  cy.get("#user_lastname").type(user.lastName);
  cy.get("#user_email").type(user.email);
  if (user.address) {
    cy.get("#user_address").type(user.address);
  }
  if (user.university) {
    cy.get("#user_university").type(user.university);
  }
  if (user.profile) {
    cy.get("#user_profile").type(user.profile);
  }
  if (user.gender) {
    cy.get("#user_gender").type(user.gender);
  }
  if (user.age) {
    cy.get("#user_age").type(user.age);
  }
  cy.get("input[type='submit']").click();
});

Cypress.Commands.add("AlterUser", change => {
  if (change.name) {
    cy.get("#user_name").type(change.firstName);
  }
  if (change.lastname) {
    cy.get("#user_lastname").type(change.lastName);
  }
  if (change.email) {
    cy.get("#user_email").type(change.email);
  }
  if (change.address) {
    cy.get("#user_address").type(change.address);
  }
  if (change.university) {
    cy.get("#user_university").type(change.university);
  }
  if (change.profile) {
    cy.get("#user_profile").type(change.profile);
  }
  if (change.gender) {
    cy.get("#user_gender").type(change.gender);
  }
  if (change.age) {
    cy.get("#user_age").type(change.age);
  }
  cy.get("input[type='submit']").click();


});