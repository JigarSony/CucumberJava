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