// Cypress autocompletion
/// <reference types="Cypress" />

describe('Form inputs placeholders test', () => {
	it('should have inputs', () => {
	  cy.visit('localhost:19006') // Replace with the URL of your form page
  
	  // Check if the input fields are present and have the correct text
	  cy.get("input[id='username']")
	  cy.get("input[id='password']")
	  cy.get("input[id='confirmPassword']")
	  cy.get("input[id='email']")
	  // Add more assertions for other input fields if needed
	})
  })