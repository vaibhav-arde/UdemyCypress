/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    before("Prerequisites", ()=>{
        // below line has only / , this take url from baseUrl setting done in cypress.json
        cy.visit("/");
        cy.fixture("testData").as("user");

        cy.get("@user").then((user)=>{
            // Below login is the custom command defined in cypress/support/commands.js
            cy.login(user.UserName, user.Password);
        })
        
    })
    it("Perform Login", ()=>{
        
        cy.contains("Employee List").click();
        
    });
})