describe ("Iterations Drag And Drop", () => {
    beforeEach(() => cy.visit("/iteracoes/draganddrop"));

    it("Iterations Drag And Drop", () => {
        cy.get("#winston")
            .trigger("mousedown", { which: 1 });

        cy.get("#dropzone")
            .trigger("mousemove");

        cy.get("#winston")
            .trigger("mouseup");
    });

});