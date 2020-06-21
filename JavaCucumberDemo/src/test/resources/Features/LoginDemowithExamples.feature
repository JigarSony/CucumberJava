Feature: Test Login Functionality with Examples

  Scenario Outline: Check login is successful with valid credentials
    Given chrome browser is open
    And user is on testproject login page
    When user enters the <username> and <password>
    And user clicks on login button in form
    Then user is navigated to the home page6

    Examples:
    | username | password |
    | Raghav | 12345 |
    | ele | 12345 |
