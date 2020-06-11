const port = 3000
const baseUrl = `http://localhost:${port}`

describe('My First Test', () => {
  it('visit localhost', () => {
    cy.visit(baseUrl)
  })

  it('link to login page', () => {
    cy.visit(baseUrl)
    cy.get('nav').contains('login').click()
    cy.url().should('contain', 'login')
  })

  it('perform cookie', () => {
    cy.visit(`${baseUrl}/login`)
    cy.get('[data-cy="setCookie"]').click()
    cy.get('[data-cy="getCookie"]').click()
    cy.getCookie('value').then((val) => {
      expect(val?.value).to.equal('hogehoge')
    })
    // cy.getCookies()
  })

  // it('Does not do much', () => {
  //   expect(true).to.equal(true)
  // })
  // it('visit cypress.io', () => {
  //   cy.visit('https://example.cypress.io')
  // })
  // it('find the content "type"', () => {
  //   cy.visit('https://example.cypress.io')
  //   cy.contains('type')
  // })
  // it('clicks', () => {
  //   cy.visit('https://example.cypress.io')
  //   cy.contains('blur').click()
  // })
  // it('clicks window and assert', () => {
  //   cy.visit('https://example.cypress.io')
  //   cy.contains('window').click()
  //   cy.url().should('include', '/commands/window')
  // })
  // it('gets, types, and asserts', () => {
  //   cy.visit('https://example.cypress.io')
  //   cy.root().contains('type').click()

  //   cy.url().should('include', '/commands/actions')

  //   cy.get('.action-email')
  //     .type('fake@email.com')
  //     .should('have.value', 'fake@email.com')
  // })
})
