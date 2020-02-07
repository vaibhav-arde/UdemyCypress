/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    it("Perform Login", ()=>{
        cy.visit("http://eaapp.somee.com/");
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        // cy.get('p > a').click();
        cy.get('.btn').click();
        
    });
})