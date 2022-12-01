describe("Creating Countries", () => {
  const dataJson = require("../../fixtures/createcountry.json");
  it("Create a new county", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3434/api/addcountry",

      body: {
        countryName: "Peru",
        countryCapital: "Lima",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("countryName", "Peru");
      expect(res.body).has.property("countryCapital", "Lima");
    });
  });
  it.only("Create a country from Data file ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3434/api/addcountry",

      body: {
        countryName: dataJson.countryName,
        countryCapital: dataJson.countryCapital,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("countryName", dataJson.countryName);
      expect(res.body).has.property("countryCapital", dataJson.countryCapital);
    });
  });
});
