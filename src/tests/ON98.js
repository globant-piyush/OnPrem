const loginPage = require('D:/Git/Tyco/OnPrem/pages/loginPage.js');
const homePage = require('../pages/homePage.js');
const organisationPage = require('../pages/organisationPage.js');
const dataValues = require('../data/dataValues.js');

describe("As a customer, one can see max occupancy in Real Time Screen", function () {
    it("Validating the visibility of Max Occupancy", function () {

        loginPage.openBrowser();
        loginPage.enterLogin(credentials.username, credentials.password);
        loginPage.clickSubmitBtn();

        browser.sleep(2000);

        homePage.clickAdminDropDown();
        homePage.clickAdminOptionInDropDown();

        organisationPage.enterSiteName(organisation.sitename);
        organisationPage.clickEditBtn();
        browser.sleep(2000);
        organisationPage.clickAdvancedOption();
        browser.sleep(15000);
        organisationPage.switchRealTimeON();
        organisationPage.switchOccupancyON();
       
        organisationPage.clickSaveBtn();
        browser.sleep(10000);
        // browser.

    });
});