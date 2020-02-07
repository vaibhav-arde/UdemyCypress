/// <reference types="Cypress" />
describe("Testing Implicit and Explicit assertions", () => {

    beforeEach("Launch app", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    // after("Close app", ()=>{
    //     cy.visit("http://www.google.com");
    // })

    it("Implicit assertion", () => {
        // cy.visit("http://www.executeautomation.com/site");
        cy.get("[aria-label='jump to slide 2']", { timeout: 20000 }).should('have.class', 'ls-nav-active');
        cy.get('[title="Courses"] > strong').click();
        // cy.contains("LOGIN").click();
    })

    it("Explicit assertion", () => {
        // cy.visit("http://www.executeautomation.com/site");
        cy.get("[aria-label='jump to slide 2']", { timeout: 20000 }).should((cls) => {
            expect(cls).to.have.class('ls-nav-active');
        })
    })
})