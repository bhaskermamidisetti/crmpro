package crm.pro.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/Sandhya/Documents/old java wokrplace/crmProject/src/main/java/crm",	
		glue={"defination"}, //the path of the step definition files
				tags = {"@flipkartTestCase"},
				format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
				monochrome = true, //display the console output in a proper readable format
				strict = true,
				dryRun = false //it will check if any step is not defined in step definition file
				//to check the mapping is proper between feature file and step def file
				//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}	
		)
public class CrmProRunner {
	

}
	


	


