Feature: Test Login Functionality

  Scenario: Check login is successful with valid credentials
    Given browser is open1
    And user is on login page2
    When user enters username and password3
    And user clicks on login button4
    Then user is navigated to the home page5
