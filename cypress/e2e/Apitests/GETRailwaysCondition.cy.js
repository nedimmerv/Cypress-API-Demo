///<reference types="Cypress"/>

describe("GET Request", () => {
  it("GET Railway Condition", () => {
    cy.request({
      method: "GET",
      url: "/api/Assets/railwayconditions",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body[0].description).to.eq("Standard, minimal perturbation");
      expect(res.body[1].description).to.eq("Medium perturbation");
      expect(res.body[2].description).to.eq("High perturbation");
      expect(res.body[3].description).to.eq(
        "Bad weather and high perturbation"
      );
      expect(res.body[4].description).to.eq("Timetable testing with no delays");
    });
  });

  it.skip("GET Railway Condition By ID", () => {
    cy.request({
      method: "GET",
      url: "/api/Assets/railwayconditions",
    }).then((res) => {
      expect(res.body[0].description).to.eq("Standard, minimal perturbation");
      expect(res.body[1].description).to.eq("Medium perturbation");
      expect(res.body[2].description).to.eq("High perturbation");
      expect(res.body[3].description).to.eq(
        "Bad weather and high perturbation"
      );
      expect(res.body[4].description).to.eq("Timetable testing with no delays");
    });
  });
});
