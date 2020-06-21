package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class loginPage {

    protected WebDriver driver;

    public loginPage(WebDriver driver){
        this.driver = driver;
        if(!driver.getTitle().equals("TestProject Demo")){
            throw new IllegalStateException("This is not Login Page. The current url is"+driver.getCurrentUrl());
        }
    }

    private By txt_username = By.id("name");
    private By txt_password = By.id("password");
    private By btn_login = By.id("login");
    private By btn_logout = By.id("logout");

    public void enterUsername(String username){
        driver.findElement(txt_username).sendKeys(username);
    }

    public void enterPassword(String password){
        driver.findElement(txt_password).sendKeys(password);
    }

    public void clickLogin(){
        driver.findElement(btn_login).click();
    }

    public void LoginValidUser(String username, String password){
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }

    public void logoutIsDisplayed(){
        driver.findElement(btn_logout).isDisplayed();
    }

}
