/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    it("Perform Login", ()=>{
        cy.visit("http://eaapp.somee.com/");

        // Long way to work with promise using Promise (Closure)
        cy.get("#loginLink").then((link)=>{
            return link.text();
        }).as("loginText");
        
        cy.get("@loginText").then((lText)=>{
            expect(lText).is.eql('Login');
        });
        // Shorthand way of working with promise using invoke
        cy.get("#loginLink").invoke('text').as("iLoginText");

        cy.get("@iLoginText").then((lText)=>{
            expect(lText).is.eql('Login');
        });
    })

    it("Use Alias in another it", ()=>{
        // Below code fails which shows we can not use one alias in another it()
        cy.get("@loginText").then((lText)=>{
            expect(lText).is.eql('Login');
        })
    })
})