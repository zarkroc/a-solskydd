/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("cy.window() - get the global window object", () => {
    cy.window().should("have.property", "top");
  });

  it("cy.document() - get the document object", () => {
    cy.document()
      .should("have.property", "charset")
      .and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    cy.title().should("include", "a-solskydd");
  });

  it("cy.get(h2) - Get the heading", () => {
    cy.get("h2").should("contain", "Om oss");
    cy.get("h2").should("contain", "Offer");
    cy.get("h2").should("contain", "Utvändiga produkter");
    cy.get("h2").should("contain", "Invändiga produkter");
    cy.get("h2").should("contain", "Leverantörer");
    cy.get("h2").should("contain", "Sociala medier");
    cy.get("h2").should("contain", "Kontakta oss");
  });
  it("fill form", () => {
    cy.get("input[type=text").type("Förnamn Efternamn");
    cy.get("input[type=email").type("fornamn@efternamn.se");
    cy.get("textarea").type("Det här är ett meddelande");
  });
});
