@smokeFeature
Feature: feature to test google search functionality

  @smoketest
  Scenario: validate google search is working
    Given browser is open
    And user is on google search page
    When user enters a text in searchbox
    And hits Enter
    Then user is navigated to search result
