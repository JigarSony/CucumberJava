package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SampleGoogleSearchSteps {
	
	WebDriver driver = null;
	
	@Given("browser is open")
	public void browser_is_open() {
		System.out.println("In - browser is open");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
	}

	@And("user is on google search page")
	public void user_is_on_google_search_page() {
		System.out.println("In - user is on google search page");
		driver.get("https://www.google.co.in/");
	}

	@When("user enters a text in searchbox")
	public void user_enters_a_text_in_searchbox() {
		System.out.println("In - user enters a text in searchbox");
		driver.findElement(By.name("q")).sendKeys("Automation Step by Step");
	}

	@And("hits Enter")
	public void hits_Enter() {
		System.out.println("In - hits Enter");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
	}

	@Then("user is navigated to search result")
	public void user_is_navigated_to_search_result() {
		System.out.println("In - user is navigated to search result");
		driver.getPageSource().contains("Online Courses");
		driver.close();
		driver.quit();
	}
}
