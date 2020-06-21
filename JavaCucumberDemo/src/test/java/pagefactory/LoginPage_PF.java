package pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import java.util.List;

public class LoginPage_PF {

    WebDriver driver;

    public LoginPage_PF(WebDriver driver){
        this.driver =  driver;
        //AjaxElementLocatorFactory factory = new AjaxElementLocatorFactory(driver,30);
        //PageFactory.initElements(factory,this);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver,30),this);
        //PageFactory.initElements(driver,this);
        //PageFactory.initElements(driver,LoginPage_PF.class);
    }

    @FindBy(id="name")
    @CacheLookup
    WebElement txt_username;

    @FindBy(id="password")
    WebElement txt_password;

    @FindBy(id="login")
    WebElement btn_login;

    @FindBy(partialLinkText = "somelink")
    List<WebElement> mylinks;

    @FindBy(how = How.ID, using = "name")
    WebElement abc;

    public void enterUsername(String username){
       txt_username.sendKeys(username);
    }

    public void enterPassword(String password){
        txt_password.sendKeys(password);
    }

    public void clickLogin(){
      btn_login.click();
    }

}
