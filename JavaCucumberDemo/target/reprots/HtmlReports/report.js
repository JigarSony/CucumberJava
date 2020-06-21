$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginDemo.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open1",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps.browser_is_open1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page2",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps.user_is_on_login_page2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password3",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps.user_enters_username_and_password3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button4",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps.user_clicks_on_login_button4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page5",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps.user_is_navigated_to_the_home_page4()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/LoginDemowithExamples.feature");
formatter.feature({
  "name": "Test Login Functionality with Examples and POM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on testproject login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button in form",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page6",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Raghav",
        "12345"
      ]
    },
    {
      "cells": [
        "ele",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.chrome_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on testproject login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_is_on_testproject_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Raghav and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button in form",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_clicks_on_login_button_in_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page6",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_is_navigated_to_the_home_page6()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.chrome_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on testproject login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_is_on_testproject_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the ele and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button in form",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_clicks_on_login_button_in_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page6",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps.user_is_navigated_to_the_home_page6()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/LoginDemowithExamplesPOM.feature");
formatter.feature({
  "name": "Test Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is opens",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on testproject login pages",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003cusername\u003e ands \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button in forms",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the homes page6",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Raghav",
        "12345"
      ]
    },
    {
      "cells": [
        "ele",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is opens",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.chrome_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on testproject login pages",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_is_on_testproject_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Raghav ands 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button in forms",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_clicks_on_login_button_in_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the homes page6",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_is_navigated_to_the_home_page6()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "chrome browser is opens",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.chrome_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on testproject login pages",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_is_on_testproject_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the ele ands 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button in forms",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_clicks_on_login_button_in_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the homes page6",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemowithExamplesSteps_POM.user_is_navigated_to_the_home_page6()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/SampleGoogleSearch.feature");
formatter.feature({
  "name": "feature to test google search functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smokeFeature"
    }
  ]
});
formatter.scenario({
  "name": "validate google search is working",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeFeature"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.SampleGoogleSearchSteps.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SampleGoogleSearchSteps.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a text in searchbox",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.SampleGoogleSearchSteps.user_enters_a_text_in_searchbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hits Enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SampleGoogleSearchSteps.hits_Enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SampleGoogleSearchSteps.user_is_navigated_to_search_result()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Samplelogin.feature");
formatter.feature({
  "name": "feature to test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smokeFeature"
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeFeature"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.SampleloginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.SampleloginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.SampleloginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.SampleloginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});