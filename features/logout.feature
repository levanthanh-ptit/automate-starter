@wip
Feature: logout
  Background: login
    Given userName and passWord
    When input userName and passWord
    And click on login
    Then redirect to Dashboard

  Scenario: logout successfull
    When click btn logout
    Then back to login page