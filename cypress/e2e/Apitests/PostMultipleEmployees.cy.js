describe("Data Driven Test Suite", () => {
  it("Login to HICSE Portal ", () => {
    cy.fixture("createemployee.json").then((data) => {
      data.forEach((userdata) => {
        cy.request({
          method: "POST",
          url: "http://localhost:3434/api/addemployee",

          body: {
            employee_salary: userdata.employee_salary,
            employee_firstname: userdata.employee_firstname,
            employee_lastname: userdata.employee_lastname,
          },
        }).then((res) => {
          cy.log(JSON.stringify(res));
          expect(res.status).to.eq(200);
          expect(res.body).has.property(
            "employee_salary",
            userdata.employee_salary
          );
          expect(res.body).has.property(
            "employee_firstname",
            userdata.employee_firstname
          );
          expect(res.body).has.property(
            "employee_lastname",
            userdata.employee_lastname
          );
        });
      });
    });
  });
});
