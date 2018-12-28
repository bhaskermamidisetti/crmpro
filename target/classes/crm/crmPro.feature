Feature: Verify COMPANIES tab

@flipkartTestCase
Scenario: Add a company using combined from tab
Given verify user is on CRMPRO site by proving url in browser
 When Title of login page is CRMPRO 
 Then Enter valid usrname and pwd to login
 |bhaskerptg   |bhaskerptg|
 And  click on login button and verify user logged in to CRMPRO site
 Then careat a new company by navigating to Companies and click on New Combined Form tab
Then enter the Company and Employees and Phone and Website and First Name and Last Name
 |sandhyasoftwareltd|300|0234322|www.test2.com|bhasker|mamamam|
Then select option status and priority and Title
Then enter Addresstitle and Address and Country feilds
|3 test|crydon|London|
Then click on the save button in combined form 

Scenario: Add a New Company using new company tab
 Given verify user is on CRMPRO site by proving url in browser
 When Title of login page is CRMPRO 
 Then Enter valid usrname and pwd to login
 |bhaskerptg   |bhaskerptg|
 And  click on login button and verify user logged in to CRMPRO site
 Then careat a new company by navigating to Companies and click on New Company tab
Then enter the Company and Phone and Website 
|sandhyasoftwareltd|0234322|www.test1.com|
Then select option status and priority 
Then enter Addresstitle and Address and Country feilds
|3 test|crydon|London|
Then click on the save button












