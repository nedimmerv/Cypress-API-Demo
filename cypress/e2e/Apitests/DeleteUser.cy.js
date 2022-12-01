/// <reference types="Cypress" />

describe("Delete user request", () => {
  let accessToken =
    "453cde7ca9309c43b907a1446c1762bae3fdce5f8818a0ad15f287cdc8f315e2";

  it.only("create user test", () => {
    //1. create user (POST)
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      body: {
        name: "Test API With Cypress",
        gender: "male",
        email: "cyapi11111@gmail.com",
        status: "active",
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body.data).has.property("email", "cyapi11111@gmail.com");
        expect(res.body.data).has.property("name", "Test API With Cypress");
      })
      .then((res) => {
        const userId = res.body.data.id;
        cy.log("user id is: " + userId);
        //2. delete user (DELETE)
        cy.request({
          method: "DELETE",
          url: "https://gorest.co.in/public/v1/users/" + userId,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }).then((res) => {
          expect(res.status).to.eq(204);
        });
      });
  });
});
