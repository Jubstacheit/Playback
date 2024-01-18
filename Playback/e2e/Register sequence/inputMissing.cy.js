/// <reference types="Cypress" />

describe('Input errors test', () => {
	it('should have input errors', () => {
	  cy.visit('localhost:19006') // Replace with the URL of your form page
  
	  // Check if the input errors are present and have the correct text
	  cy.get("div[id='registerBtn']").click()
	  cy.get("div[id='usernameRequired']").should('have.text', 'Username is required.')
	  cy.get("div[id='passwordRequired']").should('have.text', 'Password is required.')
	  cy.get("div[id='confirmPasswordRequired']").should('have.text', 'Confirmation is required.')
	  cy.get("div[id='emailRequired']").should('have.text', 'Email is required.')
	})
  })