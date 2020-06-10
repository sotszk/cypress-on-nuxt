/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true)
  })
  it('visit cypress.io', () => {
    cy.visit('https://example.cypress.io')
  })
  it('find the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
  it('clicks', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('blur').click()
  })
})
