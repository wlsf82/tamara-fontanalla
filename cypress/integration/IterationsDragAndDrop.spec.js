describe ("Iterations Drag And Drop", () => {
    beforeEach(() => cy.visit("/iteracoes/draganddrop"));

    it("Iterations Drag And Drop", () => {
        cy.get(".ui-draggable.ui-draggable-handle")
        // Não funcionou
 //       cy.get('[data-cy=draggable]')
     //   .trigger('mouseright', { which: 125, pageX: 120, pageY: 100 })
       // .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
    //    .trigger('mousemove', { which: 1, pageX: 100, pageY: 600 })
        .trigger('mousemove', { which: 125, pageX: 252, pageY: 100 })
        .trigger('mouseup')
    });

});