Feature: Test Login Functionality with Examples and PF

  Scenario Outline: Check login is successful with valid credentials
    Given chrome browser is openss
    And user is on testproject login pagess
    When user enters the <username> andss <password>
    And user clicks on login button in formss
    Then user is navigated to the homess page6

    Examples:
    | username | password |
    | Raghav | 12345 |
    | ele | 12345 |
