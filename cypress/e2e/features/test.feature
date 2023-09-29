Feature: Test data table

    Background:
        Given I navigate to "https://testpages.herokuapp.com/styled/tag/dynamic-table.html"

    Scenario: Check if data table values are correct
        Given I am on https://testpages.herokuapp.com/styled/tag/dynamic-table.html
        When I expand table data
        And I enter test data
        And I click on "Refresh Table" button
        Then I validate table data


