describe("User List", () => {
    beforeEach(() => cy.visit("/users"));
    
    it("change first user's email", () => {
        cy.get(".material-icons").first().click();

        // @TODO: implement the rest.
    });

});