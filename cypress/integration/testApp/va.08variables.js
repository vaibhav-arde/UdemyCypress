/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    var loginText;
    it("Perform Login", ()=>{
        // let loginText;
        cy.visit("http://eaapp.somee.com/");
        cy.get("#loginLink").then((link)=>{
            // let loginText= link.text();
            loginText= link.text();
            expect(loginText).is.eql('Login');
        }).click();
        // below code line shows loginText variable can not be used outside then
        //expect(loginText).is.eql('Login');
    });
})