describe('Note app', function() {
  beforeEach(function() {
    // Send POST request to api/testing/reset to empty DB
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const newUser = {
      name: 'Jend Schmidt',
      username: 'testuser',
      password: 'hellluva'
    }

    cy.request('POST', 'http://localhost:3001/api/users', newUser)

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

  it.only('login fails with wrong password', function() {
    cy.contains('Open Login').click()
    cy.get('#username').type('testuser')
    cy.get('#password').type('algm930321')
    cy.get('#login-button').click()
    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Jend Schmidt logged in')

  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains('Open Login').click()
      cy.get('#username').type('testuser')
      cy.get('#password').type('hellluva')
      cy.get('#login-button').click()
    })

    it('a new note can be created', function () {
      cy.contains('Add a Note').click()
      cy.get('#input-note').type('a note created by cypress')
      cy.contains('save note').click()
      cy.contains('a note created by cypress')
    })
  })
})
