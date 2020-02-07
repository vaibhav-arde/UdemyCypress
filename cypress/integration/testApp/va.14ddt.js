/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    before("Prerequisites", ()=>{
        cy.visit("http://eaapp.somee.com/");
        cy.fixture("testData").as("user");
    })
    it("Perform Login", ()=>{
        
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");
        
        cy.get("@user").then((user)=>{
            cy.get('#UserName').type(user.UserName);
            cy.get('#Password').type(user.Password);
        })
        
        // cy.get('p > a').click();
        cy.get('.btn').click();
        cy.contains("Log off");
        
    });
})