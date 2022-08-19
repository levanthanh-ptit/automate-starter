Feature: Login

  Scenario: Login Pass
    Given userName and passWord
    When input userName and passWord
    And click on login
    Then redirect to Dashboard