import {
  Given,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";

before(() => {
  cy.fixture("example.json").as("data");
});

Given("I navigate to {string}", (url) => {
  cy.visit(url);
});

Given(/^I am on (.*?)$/, (url) => {
  cy.url().should("contain", url);
});

When("I search for {string}", (value) => {
  cy.get('[title="Search"]').type(value + "{enter}");
});

When("I expand table data", () => {
  cy.get("summary").click();
});

And("I enter test data", () => {
  cy.get("@data").then((tableData) => {
    cy.get("#jsondata")
      .clear()
      .type(JSON.stringify(tableData), { parseSpecialCharSequences: false });
  });
});

And("I click on {string} button", (btnName) => {
  cy.contains(btnName).click();
});

Then("I validate table data", () => {
  cy.get("@data").then((tableData) => {
    cy.get("table tr").each(($row, index) => {
      if (index > 0) {
        expect($row).to.contain(tableData[index - 1].name);
        expect($row).to.contain(tableData[index - 1].age);
        expect($row).to.contain(tableData[index - 1].gender);
      }
    });
  });
});
