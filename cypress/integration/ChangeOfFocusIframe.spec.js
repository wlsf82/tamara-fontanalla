describe("Working with Iframe", () => {
    beforeEach(() => cy.visit("mudancadefoco/iframe"));

    it("First item in the list", () => {
        cy.get("#id_do_iframe").then($iframe => {
            $iframe.contents().find("#collapsible-header").click();
        });
    });
});