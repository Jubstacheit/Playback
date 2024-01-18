/// <reference types="Cypress" />

describe('Input errors test', () => {
	it('should have input errors', () => {
	  cy.visit('localhost:19006') // Replace with the URL of your form page
  
	  // Check if the input errors are present and have the correct text
	  cy.get('input[id="username"]').type('Username')
	  cy.get('input[id="password"]').type('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest')
	  cy.get('input[id="confirmPassword"]').type('testtest')
	  cy.get('input[id="email"]').type('testtesttesttesttesttesttesttesttesttesttesttesttest@email.com')
	  cy.get("div[id='registerBtn']").click()
	  cy.get("div[id='passwordLong']").should('have.text', 'Maximum length is 50.')
	  cy.get("div[id='emailLong']").should('have.text', 'Maximum length is 50.')
	})
  })