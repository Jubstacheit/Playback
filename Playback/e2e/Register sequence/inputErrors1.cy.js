/// <reference types="Cypress" />

describe('Input errors test', () => {
	it('should have input errors', () => {
	  cy.visit('localhost:19006') // Replace with the URL of your form page
  
	  // Check if the input errors are present and have the correct text
	  cy.get('input[id="username"]').type('testusertestusertestusertestusertestusertestusertestusertestusertestusertestusertestusertestuser')
	  cy.get('input[id="password"]').type('test')
	  cy.get('input[id="confirmPassword"]').type('test')
	  cy.get('input[id="email"]').type('test')
	  cy.get("div[id='registerBtn']").click()
	  cy.get("div[id='usernameLong']").should('have.text', 'Username should be at most 20 characters long.')
	  cy.get("div[id='passwordShort']").should('have.text', 'Minimum length is 8.')
	  cy.get("div[id='emailInvalid']").should('have.text', 'Invalid email address.')
	})
  })