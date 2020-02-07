/// <reference types="Cypress" />
describe("Perform Login to webapp", ()=>{
    it("Perform Login", ()=>{
        cy.visit("http://eaapp.somee.com/");
        cy.contains("Login").click();
        cy.url().should("include", "/Account/Login");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click();
        cy.contains("Employee List").click();
        //Below code select all rows in Alias for future reference
        cy.get(".table").find("tr").as("rows");
        cy.get("@rows").then((row)=>{
            cy.wrap(row).click({multiple:true});
        })
        // cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
        // cy.get(".table").contains("Prashanth").parent().contains("Benefits")
        
    });
})