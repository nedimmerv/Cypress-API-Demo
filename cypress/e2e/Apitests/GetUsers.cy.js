/// <reference types= "Cypress" />
describe("get api user tests", () => {
  let accessToken =
    "453cde7ca9309c43b907a1446c1762bae3fdce5f8818a0ad15f287cdc8f315e2";
  it("get users", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("get user by ID test", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/4181",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eq("Balaaditya Mukhopadhyay");
      expect(res.body.email).to.eq(
        "mukhopadhyay_balaaditya@windler-vandervort.name"
      );
      expect(res.body.gender).to.eq("female");
    });
  });
});
