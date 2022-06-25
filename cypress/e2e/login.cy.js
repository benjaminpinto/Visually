describe('Test login page', () => {
  before(() => {
    it('Check if cookie policy message is properly shown', () => {
      cy.get('.consent-message').should('be.visible')
      cy.findByRole('button', { name: 'Accept' }).should('be.visible')
    })
  })

  beforeEach(() => {
    cy.visit('/')
    cy.acceptPolicy()
  })

  it('Check the visibility of main elements', () => {
    cy.get('#logo').should('be.visible')
    cy.get('.user-login-logo').should('be.visible')
    cy.contains('Log in to your account').should('be.visible')
    cy.contains('Create one')
      .should('be.visible')
      .and('have.attr', 'href', '/user/register')
    cy.findByText('Click here').should('be.visible')
    cy.get('#edit-name').should('be.visible').and('be.empty')
    cy.get('#edit-pass').should('be.visible').and('be.empty')
    cy.get('#edit-submit').should('be.visible')
  })

  it('Check "forgot password" window exhibition', () => {
    cy.get('.user-reset-password').click()
    cy.get('#forgot-password').should('be.visible')
    cy.get('.contact-style').should('be.empty').and('be.visible')
    cy.get('.submit-forgot').should('be.visible')
  })

  it('Test login without provide credentials', () => {
    cy.get('#edit-submit').click()
    cy.get('#eyebrow-error').should('be.visible')
    cy.contains(
      'Enter your email address or username field is required.'
    ).should('be.visible')
    cy.contains('Password field is required.').should('be.visible')
  })

  it('Test login with wrong credentials', () => {
    cy.get('#edit-name').type('wrong')
    cy.get('#edit-pass').type('wrong')
    cy.get('#edit-submit').click()
    cy.get('#eyebrow-error').should('be.visible')
    cy.contains('Sorry, unrecognized username or password.').should(
      'be.visible'
    )
    cy.contains('Have you forgotten your password?').should('be.visible')
  })

  it('Test login with correct credentials', () => {
    cy.get('#edit-name').type(Cypress.env('email'))
    cy.get('#edit-pass').type(Cypress.env('password'), { log: false })
    cy.get('#edit-submit').click()
    cy.contains(Cypress.env('fName')).should('be.visible')
  })
})
