package StepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pagefactory.HomePage_PF;
import pagefactory.LoginPage_PF;
import pages.loginPage;

import java.util.concurrent.TimeUnit;

public class LoginDemowithExamplesSteps_PF {

    WebDriver driver = null;
    LoginPage_PF loginpagepf;
    HomePage_PF homepagepf;

    @Given("chrome browser is openss")
    public void chrome_browser_is_open() {
        System.out.println("In - browser is open - from PF");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on testproject login pagess")
    public void user_is_on_testproject_login_page() {
        driver.navigate().to("https://example.testproject.io/web/");
    }

    @When("^user enters the (.*) andss (.*)$")
    public void user_enters_the_username_and_password(String username, String password) {

        loginpagepf = new LoginPage_PF(driver);
        loginpagepf.enterUsername(username);
        loginpagepf.enterPassword(password);
//        driver.findElement(By.id("name")).sendKeys(username);
//        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("user clicks on login button in formss")
    public void user_clicks_on_login_button_in_form() {
        //driver.findElement(By.id("login")).click();
        loginpagepf.clickLogin();
    }

    @Then("user is navigated to the homess page6")
    public void user_is_navigated_to_the_home_page6() {
        //driver.findElement(By.id("greetings")).getText().contains("Jigar");
        //driver.findElement(By.id("logout")).isDisplayed();
        //driver.quit();
        homepagepf = new HomePage_PF(driver);
        homepagepf.logoutIsDisplayed();
        driver.close();
    }

}
