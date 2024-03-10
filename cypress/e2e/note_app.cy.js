describe('Note app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5173')
    cy.contains('Notes')
  })

  it('login from can be opened', function () {
    cy.visit('http://localhost:5173')
    cy.contains('Open Login').click()
  })
})