// const loginPage = require('D:/Git/Tyco/OnPrem/pages/loginPage.js');
// const homePage = require('../pages/homePage.js');
const organisationPage = require('../pages/organisationPage.js');
// const dataValues = require('../data/dataValues.js');
// promise.USE_PROMISE_MANAGER = false;
// SELENIUM_PROMISE_MANAGER: false;

describe("As a customer, one can see Occupancy Metric for Real Time Screen", function () {
  it("Validating the visibility of Occupancy Metric", function () {

    homePage.clickAdminDropDown();
    homePage.clickAdminOptionInDropDown();

    organisationPage.enterSiteName(organisation.sitename);
    organisationPage.clickEditBtn();
    browser.sleep(2000);
    organisationPage.clickAdvancedOption();
    browser.sleep(15000000000);
    browser.wait(isIconVisible, 150000);

    // try{
    //   new Promise(function(resolve, reject){
    //     organisationPage.switchRealTimeON();
    //   })      
    // }
    // catch(){

    // }

    
    organisationPage.switchOccupancyON();
    organisationPage.clickSaveBtn();
  });
});
// homePage.clickAdminDropDown();
// homePage.clickAdminOptionInDropDown();

// organisationPage.enterSiteName(organisation.sitename);
// organisationPage.clickEditBtn();
// browser.sleep(2000);
// organisationPage.clickAdvancedOption();
// browser.sleep(15000000000);
//browser.wait(isIconVisible,150000);
// await organisationPage.switchRealTimeON();
// organisationPage.switchOccupancyON();



// organisationPage.clickSaveBtn();
