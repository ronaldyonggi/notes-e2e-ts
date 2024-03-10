describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', function() {
    cy.contains('Notes')
  })

  it('login from can be opened', function () {
    cy.contains('Open Login').click()
  })
})