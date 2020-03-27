describe('My First Test', function() {
    it('Visits the page', function() {
      cy.visit('/')

      cy.contains('Test').click()
      cy.url().should('include', '/test')

      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })

    it('Checks 404', function() {
      cy.visit('/')

      cy.contains('404').click()
      cy.url().should('include', '/404.php')
      cy.contains("Not Found")
    })
  })