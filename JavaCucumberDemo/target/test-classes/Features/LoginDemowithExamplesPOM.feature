Feature: Test Login Functionality

  Scenario Outline: Check login is successful with valid credentials
    Given chrome browser is opens
    And user is on testproject login pages
    When user enters the <username> ands <password>
    And user clicks on login button in forms
    Then user is navigated to the homes page6

    Examples:
    | username | password |
    | Raghav | 12345 |
    | ele | 12345 |
