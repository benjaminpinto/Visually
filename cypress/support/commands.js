import '@testing-library/cypress/add-commands'

Cypress.Commands.add('acceptPolicy', () => {
  cy.get('.accept-button').click()
})
