/// <reference types="Cypress" />

describe('Initial test', () => {
  it('should have the correct title', () => {
    cy.visit('localhost:19006')
    cy.get("div[id='title']").should('have.text', 'Register on Playback');
  })
})