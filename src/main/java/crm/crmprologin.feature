Feature: verify the login functioanlity of CRMPRO site

Scenario Outline: To test the login functionality

Given verify user is on CRMPRO site by proving url in browser
 When Title of login page is CRMPRO 
 Then Enter valid "<username>" and "<password>"
 And  click on login button and verify user logged in to CRMPRO site
 Then veriy the results
 
  
 Examples:
 |username|password|
 |bhaskerptg|bhaskerptg|
 |bhaskerptg|bhaskerptg3|
