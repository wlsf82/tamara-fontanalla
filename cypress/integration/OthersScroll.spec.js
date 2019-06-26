describe("Others Scroll", () => {
    beforeEach(() => cy.visit("/outros/scroll"));

    it("Others Scroll", () => {
        cy.scrollTo('bottom');
    });
});