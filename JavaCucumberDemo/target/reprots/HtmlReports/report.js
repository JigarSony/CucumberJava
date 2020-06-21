$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeaturewithTags/Tags.feature");
formatter.feature({
  "name": "Feature to demo tags",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "sample3",
  "description": "Given\nWhen\nThen",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@regression"
    }
  ]
});
});