package StepDefinitions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/FeaturewithTags",glue= {"StepDefinitions"},
monochrome= true, //to get formatted output
//plugin= {"pretty","html:target/reprots/HtmlReports"}
//plugin= {"pretty","json:target/reprots/JsonReports/report.json"}
//plugin= {"pretty","junit:target/reprots/JunitReports/report.xml"},
plugin= {"pretty","html:target/reprots/HtmlReports",
		"json:target/reprots/JsonReports/report.json",
		"junit:target/reprots/JunitReports/report.xml"},
//tags="@smoketest" //to run specific cases/features
		tags={"@smoketest and @regression"}
)
public class TestRunnerwithTags {

}
