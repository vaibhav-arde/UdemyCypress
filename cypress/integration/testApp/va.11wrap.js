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
        //Below line select all td in the tr
        cy.get(".table").find("tr > td");

        // cy.get(".table").contains("Prashanth").parent().contains("Benefits")
        // cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
        cy.get('.table').find('tr > td').then(($td)=>{
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        })
    })

    it("Explore wrap",()=>{
        cy.wrap({name:'VaibhaV'}).should('have.property', 'name').and('eq','VaibhaV');
    })
})