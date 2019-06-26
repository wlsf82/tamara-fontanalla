describe("Widgets Autocomplete", () => {
    beforeEach(() => cy.visit("/widgets/autocomplete"));
   
    it("Autocomplete", () => {
        cy.get("#autocomplete-input").type("Santa");
        //copiado do google, porém não funciona
        cy.get('iframe').then(($iframe)=>{
            const $input = $iframe.contents().find('body').find('div').find('input');
            let data = cy.wrap($input)
            data.type('JavaS');
            data.type('{downarrow}');
            data.type('{downarrow}').click();
        });
    });
});