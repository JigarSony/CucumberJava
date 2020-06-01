package StepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features",glue= {"StepDefinitions"},
monochrome= true, //to get formatted output
//plugin= {"pretty","html:target/reprots/HtmlReports"}
//plugin= {"pretty","json:target/reprots/JsonReports/report.json"}
//plugin= {"pretty","junit:target/reprots/JunitReports/report.xml"},
plugin= {"pretty","html:target/reprots/HtmlReports",
		"json:target/reprots/JsonReports/report.json",
		"junit:target/reprots/JunitReports/report.xml"}
//tags="@smoketest" //to run specific cases/features 
)
public class TestRunner {

}
