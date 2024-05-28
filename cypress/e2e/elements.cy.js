describe('elements test', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');
    cy.get('.card-body').contains('Elements').click();
    cy.url().should('contain', 'https://demoqa.com/elements');
    cy.get('.header-text').contains('Elements').click();
  });
})