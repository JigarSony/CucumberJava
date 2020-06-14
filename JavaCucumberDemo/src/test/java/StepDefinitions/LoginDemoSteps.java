package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginDemoSteps {

    WebDriver driver = null;

    @Given("browser is open1")
    public void browser_is_open1() {
        System.out.println("In - browser is open");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on login page2")
    public void user_is_on_login_page2() {
        driver.navigate().to("https://example.testproject.io/web/");
    }

    @When("user enters username and password3")
    public void user_enters_username_and_password3() {

        driver.findElement(By.id("name")).sendKeys("Raghav");
        driver.findElement(By.id("password")).sendKeys("12345");
    }

    @And("user clicks on login button4")
    public void user_clicks_on_login_button4() {
        driver.findElement(By.id("login")).click();
    }

    @Then("user is navigated to the home page5")
    public void user_is_navigated_to_the_home_page4() {
        driver.findElement(By.id("greetings")).getText().contains("Jigar");
        driver.findElement(By.id("logout")).isDisplayed();
        //driver.quit();
        driver.close();
    }
}
