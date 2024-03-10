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

  it('user can login', function() {
    cy.contains('Open Login').click()
    // cy.get('input:first').type('testuser')
    // cy.get('input:last').type('hellluva')
    cy.get('#username').type('testuser')
    cy.get('#password').type('hellluva')
    cy.get('#login-button').click()
    cy.contains('Jend Schmidt logged in')
  })
})