package StepDefinitions;

import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginDemowithExamplesSteps {

    WebDriver driver = null;

    @Given("chrome browser is open")
    public void chrome_browser_is_open() {
        System.out.println("In - browser is open");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on testproject login page")
    public void user_is_on_testproject_login_page() {
        driver.navigate().to("https://example.testproject.io/web/");
    }

    @When("^user enters the (.*) and (.*)$")
    public void user_enters_the_username_and_password(String username, String password) {
        driver.findElement(By.id("name")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("user clicks on login button in form")
    public void user_clicks_on_login_button_in_form() {
        driver.findElement(By.id("login")).click();
    }

    @Then("user is navigated to the home page6")
    public void user_is_navigated_to_the_home_page6() {
        //driver.findElement(By.id("greetings")).getText().contains("Jigar");
        driver.findElement(By.id("logout")).isDisplayed();
        //driver.quit();
        driver.close();
    }

}
