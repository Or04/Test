describe('sfirst', function(){
    it('test',function(){
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > .sc-iwaifL > .fEVoEH')
        cy.get(':nth-child(2) > .sc-iwaifL > .fEVoEH').should('have.text','Countries visited')
        cy.get(':nth-child(3) > .sc-iwaifL > .fEVoEH')
        cy.get('.lclAMv').click()
        cy.get(':nth-child(3) > :nth-child(9) > label > svg').click()
        cy.get(':nth-child(1) > :nth-child(10) > label > svg').click()
        cy.get('.lclAMv').click()
        cy.get(':nth-child(3) > .sc-iwaifL > .sc-cxNIbT').should('not.have.text','0')
        cy.get(':nth-child(2) > .sc-iwaifL > .sc-cxNIbT').should('not.have.text','0')
        



     });
});

