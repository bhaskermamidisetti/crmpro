$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("crmPro.feature");
formatter.feature({
  "line": 1,
  "name": "Verify COMPANIES tab",
  "description": "",
  "id": "verify-companies-tab",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Add a company using combined from tab",
  "description": "",
  "id": "verify-companies-tab;add-a-company-using-combined-from-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@flipkartTestCase"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "verify user is on CRMPRO site by proving url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter valid usrname and pwd to login",
  "rows": [
    {
      "cells": [
        "bhaskerptg",
        "bhaskerptg"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on login button and verify user logged in to CRMPRO site",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "careat a new company by navigating to Companies and click on New Combined Form tab",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter the Company and Employees and Phone and Website and First Name and Last Name",
  "rows": [
    {
      "cells": [
        "sandhyasoftwareltd",
        "300",
        "0234322",
        "www.test2.com",
        "bhasker",
        "mamamam"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select option status and priority and Title",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter Addresstitle and Address and Country feilds",
  "rows": [
    {
      "cells": [
        "3 test",
        "crydon",
        "London"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on the save button in combined form",
  "keyword": "Then "
});
formatter.match({
  "location": "CrmProStepDefination.verify_user_is_on_crmpro_site_by_proving_url_in_browser()"
});
formatter.result({
  "duration": 7022522318,
  "status": "passed"
});
formatter.match({
  "location": "CrmProStepDefination.title_of_login_page_is_crmpro()"
});
formatter.result({
  "duration": 12634457,
  "status": "passed"
});
formatter.match({
  "location": "CrmProStepDefination.enter_valid_usrname_and_pwd_to_login(DataTable)"
});
formatter.result({
  "duration": 518501410,
  "status": "passed"
});
formatter.match({
  "location": "CrmProStepDefination.click_on_login_button_and_verify_user_logged_in_to_crmpro_site1()"
});
formatter.result({
  "duration": 3592125893,
  "status": "passed"
});
formatter.match({
  "location": "CrmProStepDefination.careat_a_new_company_by_navigating_to_companies_and_click_on_new_combined_form_tab()"
});
formatter.result({
  "duration": 1181574594,
  "status": "passed"
});
formatter.match({
  "location": "CrmProStepDefination.enter_the_company_and_employees_and_phone_and_website_and_first_name_and_last_name(DataTable)"
});
formatter.result({
  "duration": 334487419,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"phone\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QF91GE2\u0027, ip: \u0027192.168.0.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\Sandhya\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57550}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 037c78bb1d22aa2cd7697a7dbc2eb7c3\n*** Element info: {Using\u003did, value\u003dphone}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat defination.CrmProStepDefination.enter_the_company_and_employees_and_phone_and_website_and_first_name_and_last_name(CrmProStepDefination.java:121)\r\n\tat ✽.Then enter the Company and Employees and Phone and Website and First Name and Last Name(crmPro.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CrmProStepDefination.select_option_status_and_priority_and_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CrmProStepDefination.enter_addresstitle_and_address_and_country(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CrmProStepDefination.click_on_the_save_button_in_combined_form()"
});
formatter.result({
  "status": "skipped"
});
});