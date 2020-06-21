package StepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.loginPage;

import java.util.concurrent.TimeUnit;

public class LoginDemowithExamplesSteps_POM {

    WebDriver driver = null;
    loginPage loginpage;

    @Given("chrome browser is opens")
    public void chrome_browser_is_open() {
        System.out.println("In - browser is open - from POM");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on testproject login pages")
    public void user_is_on_testproject_login_page() {
        driver.navigate().to("https://example.testproject.io/web/");
    }

    @When("^user enters the (.*) ands (.*)$")
    public void user_enters_the_username_and_password(String username, String password) {

        loginpage = new loginPage(driver);
        loginpage.LoginValidUser(username,password);
//        driver.findElement(By.id("name")).sendKeys(username);
//        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("user clicks on login button in forms")
    public void user_clicks_on_login_button_in_form() {
        //driver.findElement(By.id("login")).click();
    }

    @Then("user is navigated to the homes page6")
    public void user_is_navigated_to_the_home_page6() {
        //driver.findElement(By.id("greetings")).getText().contains("Jigar");
        //driver.findElement(By.id("logout")).isDisplayed();
        //driver.quit();

        loginpage.logoutIsDisplayed();
        driver.close();
    }

}
