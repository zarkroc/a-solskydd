/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('navigate to inomhus page', () => {
    cy.contains('Produkter').click();
    cy.get('a[href*="inomhus"]:first').click();
    cy.get('h2').should('contain', 'Invändiga produkter');
  });

  it('navigate to utomhus page', () => {
    cy.contains('Produkter').click();
    cy.get('a[href*="utomhus"]:first').click();
    cy.get('h2').should('contain', 'Utvändiga produkter');
  });
});
