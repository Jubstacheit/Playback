/// <reference types="Cypress" />

describe('Register button test', () => {
	it('should have a register button', () => {
	  cy.visit('localhost:19006') // Replace with the URL of your form page
  
	  // Check if the register button is present and has the correct text
	  cy.get("div[id='registerBtn']").should('have.text', 'Register');
	})
  })