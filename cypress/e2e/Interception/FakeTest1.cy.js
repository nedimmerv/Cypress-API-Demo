/// <reference types='Cypress' />

describe("Fake Date Test", () => {
  it("test 1", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RobotFramework",
            isbn: "121456",
            aisle: "982053",
          },
          {
            book_name: "Learning Appium Automation with Java",
            isbn: "RS214",
            aisle: "80234456",
          },

          {
            book_name: "Life of Author Nedim ",
            isbn: "RS21428",
            aisle: "282828",
          },
        ],
      }
    ).as("getBook");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@getBook");
  });
});
