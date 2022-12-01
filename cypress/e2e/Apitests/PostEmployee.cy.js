describe("Creating Employees", () => {
  const dataJson = require("../../fixtures/createemployee1.json");
  it("Create a new Employee", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3434/api/addemployee",

      body: {
        employee_salary: 1111111,
        employee_firstname: "Ana",
        employee_lastname: "Baptista",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("employee_salary", 1111111);
      expect(res.body).has.property("employee_firstname", "Ana");
      expect(res.body).has.property("employee_lastname", "Baptista");
    });
  });
  it.only("Create an Employee from Data file ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3434/api/addemployee",

      body: {
        employee_salary: dataJson.employee_salary,
        employee_firstname: dataJson.employee_firstname,
        employee_lastname: dataJson.employee_lastname,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property(
        "employee_salary",
        dataJson.employee_salary
      );
      expect(res.body).has.property(
        "employee_firstname",
        dataJson.employee_firstname
      );
      expect(res.body).has.property(
        "employee_lastname",
        dataJson.employee_lastname
      );
    });
  });
});
