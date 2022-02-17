describe("User can visit website and view the main page.", () => {
  before(() => {
    cy.intercept("GET", "*/content.viaplay.se*", {
      fixture: "viaplay_responce.json"
    });
    cy.visit("/");
  });

  describe("Header", () => {
    it("is expected to see image in the header", () => {
      cy.get("[cy-data=image-header]").should("exist");
    });
  });

  describe("Main feed", () => {
    it("is expected to see several program covers on the main page", () => {
      cy.get("[cy-data=program-feed]").should("exist");
    });
  });
});
