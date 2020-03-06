/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("navigate to inomhus page", () => {
    cy.get("a")
      .contains("Produkter")
      .click();
    cy.get('a[href*="inomhus"]')
      .contains("Invändiga")
      .click();
    cy.get("h2").should("contain", "Invändiga produkter");
  });

  it("navigate to utomhus page", () => {
    cy.get("a")
      .contains("Produkter")
      .click();
    cy.get('a[href*="utomhus"]')
      .contains("Utvändiga")
      .click();
    cy.get("h2").should("contain", "Utvändiga produkter");
  });
});
