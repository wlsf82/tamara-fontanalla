describe("User List", () => {
    beforeEach(() => cy.visit("/users/"));
    
    it.only("change a user's email", () => {
        cy.get("tr.material-icons").click();


    });

});