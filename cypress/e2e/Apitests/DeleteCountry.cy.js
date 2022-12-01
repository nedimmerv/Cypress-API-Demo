describe("Delete A Country after creation", () => {
  const dataJson = require("../../fixtures/createcountry.json");
  it.skip("Create a country from Data file ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3434/api/addcountry",

      body: {
        countryName: dataJson.countryName,
        countryCapital: dataJson.countryCapital,
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(200);
        expect(res.body).has.property("countryName", dataJson.countryName);
        expect(res.body).has.property(
          "countryCapital",
          dataJson.countryCapital
        );
      })
      .then((res) => {
        const id = res.id;
        cy.log("user id is: " + id);
        //2. delete user (DELETE)
        cy.request({
          method: "DELETE",
          url: "http://localhost:3434/api/deletecountry/" + id,
        }).then((res) => {
          expect(res.status).to.eq(200);
        });
      });
  });
  it.only("Delete existing country by ID", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3434/api/deletecountry/17",
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
