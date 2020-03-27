describe('My First Test', function() {
    it('Visits the page', function() {
      cy.visit('/')
      cy.contains('Test').click()
      cy.url().should('include', '/test')

      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })