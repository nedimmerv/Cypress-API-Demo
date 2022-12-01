/// <reference types='Cypress' />
const dataJson = require("../../fixtures/createuser.json");

describe("Post User Request", () => {
  let accessToken =
    "453cde7ca9309c43b907a1446c1762bae3fdce5f8818a0ad15f287cdc8f315e2";
  let randomText = "";
  let testEmail = "";

  it("Create a new User Test", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@gmail.com";
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      body: {
        name: dataJson.name,
        gender: dataJson.gender,
        email: testEmail,
        status: dataJson.status,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body).has.property("email", testEmail);
      expect(res.body).has.property("gender", dataJson.gender);
      expect(res.body).has.property("name", dataJson.name);
      expect(res.body).has.property("status", dataJson.status);
    });
  });

  it("Create a new User Test 2 ", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@gmail.com";
    cy.fixture("createuser").then((payload) => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        body: {
          name: payload.name,
          gender: payload.gender,
          email: testEmail,
          status: payload.status,
        },
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body).has.property("email", testEmail);
        expect(res.body).has.property("gender", payload.gender);
        expect(res.body).has.property("name", payload.name);
        expect(res.body).has.property("status", payload.status);
      });
    });
  });
});
