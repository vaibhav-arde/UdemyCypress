/// <reference types="Cypress" />
describe("Testing Implicit and Explicit assertions", ()=>{
    it("Implicit assertion", ()=>{
        cy.visit("http://www.executeautomation.com/site");
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should('have.class','ls-nav-active');
    })

    it("Explicit assertion", ()=>{
        cy.visit("http://www.executeautomation.com/site");
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should((cls)=>{
            expect(cls).to.have.class('ls-nav-active');
        })
    })
})