package defination;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CrmProStepDefination {
	WebDriver driver;

    @Given("^verify user is on CRMPRO site by proving url in browser$")
    public void verify_user_is_on_crmpro_site_by_proving_url_in_browser()  {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sandhya\\Documents\\softwares\\chromedriver.exe");
    	driver= new ChromeDriver();
    	driver.get("https://www.freecrm.com");
    	driver.manage().window().maximize();
    	
    }

    @When("^Title of login page is CRMPRO$")
    public void title_of_login_page_is_crmpro() {
    	String title= driver.getTitle();
    	System.out.println(title);
	   
    	assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }

    @Then("^Enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_valid_something_and_something(String username, String password)  {
    	  	driver.findElement(By.name("username")).sendKeys(username);
    		driver.findElement(By.name("password")).sendKeys(password);
        
    }
    @Then("^Enter valid usrname and pwd to login$")
    public void enter_valid_usrname_and_pwd_to_login(DataTable company)  {
    	java.util.List<java.util.List<String>> t1= company.raw();
    	driver.findElement(By.name("username")).sendKeys(t1.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(t1.get(0).get(1));
        
    }
    @And("^click on login button and verify user logged in to CRMPRO site$")
    public void click_on_login_button_and_verify_user_logged_in_to_crmpro_site1() {
    	WebElement login = driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", login);
		
    }

    @Then("^careat a new company by navigating to Companies and click on New Company tab$")
    public void careat_a_new_company_by_navigating_to_companies_and_click_on_new_company_tab() {
    	driver.switchTo().frame("mainpanel");
		Actions action= new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Companies')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Company')]")).click();
    }

    @Then("^enter the Company and Phone and Website$")
    public void enter_company_and_phone_and_website(DataTable company){
    	java.util.List<java.util.List<String>> t1= company.raw();
		driver.findElement(By.id("company_name")).sendKeys(t1.get(0).get(0));
		driver.findElement(By.id("phone")).sendKeys(t1.get(0).get(1));
		driver.findElement(By.id("website")).sendKeys(t1.get(0).get(2));
	   
    }

    @Then("^select option status and priority$")
    public void select_status_and_priority() throws InterruptedException  {
    	Select status = new Select(driver.findElement(By.name("status")));
    	status.selectByVisibleText("Active");
    	status.selectByIndex(1);
    	Thread.sleep(3000);
    	
    	Select stat= new Select(driver.findElement(By.name("priority")));
    	stat.selectByVisibleText("High");
    	status.selectByIndex(1);
    	Thread.sleep(3000);

    }

    @Then("^enter Addresstitle and Address and Country feilds$")
    public void enter_addresstitle_and_address_and_country(DataTable company) {
    	java.util.List<java.util.List<String>> data= company.raw();
     	driver.findElement(By.name("address_title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("address")).sendKeys(data.get(0).get(1));
		driver.findElement(By.name("country")).sendKeys(data.get(0).get(2));
    }

    @Then("^click on the save button$")
    public void enter_save_button()  {
    	WebElement submit = driver.findElement(By.xpath("//*[@id=\"companyForm\"]/table/tbody/tr[1]/td/input"));
		JavascriptExecutor save = (JavascriptExecutor)driver;
		save.executeScript("arguments[0].click();", submit);
    }


    @Then("^careat a new company by navigating to Companies and click on New Combined Form tab$")
    public void careat_a_new_company_by_navigating_to_companies_and_click_on_new_combined_form_tab()  {
    	driver.switchTo().frame("mainpanel");
		Actions action= new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Companies')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'Combined Form')]")).click();
       
    }

    @Then("^enter the Company and Employees and Phone and Website and First Name and Last Name$")
    public void enter_the_company_and_employees_and_phone_and_website_and_first_name_and_last_name(DataTable test)  {
    	java.util.List<java.util.List<String>> t1= test.raw();
		driver.findElement(By.id("company_name")).sendKeys(t1.get(0).get(0));
		driver.findElement(By.id("num_of_employees")).sendKeys(t1.get(0).get(1));
		driver.findElement(By.id("phone")).sendKeys(t1.get(0).get(2));
		driver.findElement(By.id("website")).sendKeys(t1.get(0).get(3));
		driver.findElement(By.id("first_name")).sendKeys(t1.get(0).get(4));
		driver.findElement(By.id("surname")).sendKeys(t1.get(0).get(5));
       
    }

    @Then("^select option status and priority and Title$")
    public void select_option_status_and_priority_and_title() throws InterruptedException {
    	Select status = new Select(driver.findElement(By.name("status")));
    	status.selectByVisibleText("Active");
    	status.selectByIndex(1);
    	Thread.sleep(3000);
    	
    	Select stat= new Select(driver.findElement(By.name("priority")));
    	stat.selectByVisibleText("High");
    	status.selectByIndex(1);
    	Thread.sleep(3000);
    	
    	Select Title= new Select(driver.findElement(By.name("title")));
    	Title.selectByVisibleText("Mr.");
    	Title.selectByIndex(3);
    	Thread.sleep(3000);
          
    }
    @Then("^click on the save button in combined form$")
    public void click_on_the_save_button_in_combined_form() {
    	WebElement submit = driver.findElement(By.xpath("//*[@id=\"companyForm\"]/table/tbody/tr[1]/td/input"));
		JavascriptExecutor save = (JavascriptExecutor)driver;
		save.executeScript("arguments[0].click();", submit);
    }
    
    @Then("^veriy the results$")
    public void veriy_the_results()  {
    	String b1 = driver.getTitle();
    	assertEquals(b1,"CRMPRO :: 2.0");
    	if(b1=="CRMPRO") {
    		System.out.println("Title is:"+b1);
    		
    	}    
    	else
    	{
    		System.out.println("Fail");
    	}
    	
      
    }
   

    
    }


