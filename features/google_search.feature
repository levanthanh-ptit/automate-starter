Feature: Google search
  Scenario: Finding some cheese
    Given I am on the Google search page
    When I search for "Cheese!"
    Then the page title should start with "Cheese!"

  Scenario: Finding some cheese2
    Given I am on the Google search page
    When I search for "Cheese!2"
    Then the page title should start with search keyword