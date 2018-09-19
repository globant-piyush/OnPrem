var loginPage =  require('../pages/loginPage.js');
var forgotPass = require('../Tyco/forgotPass.js');
var emailRec = require('../Tyco/emailRec.js');
var dataValues = require('../Tyco/dataValues.js');
var homePage = require('../pages/homePage.js');
var organisationPage = require('../pages/organisationPage.js');
var protractor_1 = require("protractor");

var EC = protractor_1.ExpectedConditions;
var icon = $(".occupancy-info");
var isIconVisible = EC.visibilityOf(icon);

describe('As a customer, one can see Occupancy Metric for Real Time Data', function(){

    it('Validating the visibility of Occupancy Metric', function(){
        loginPage.openBrowser();     
        loginPage.enterLogin(credentials.username,credentials.password);
        loginPage.clickSubmitBtn();

        homePage.clickAdminDropDown();
        homePage.clickAdminOptionInDropDown();

        organisationPage.enterSiteName(organisation.sitename);
        organisationPage.clickEditBtn();
        browser.sleep(15000);
        organisationPage.clickAdvancedOption();
        browser.wait(isIconVisible,150000);


        expect(organisationPage.checkIfOccupancyIsDisplayed).toBe(true); 

        if(organisationPage.checkRealTimeIsOff()){
            organisationPage.switchRealTimeON();
        }
        if(organisationPage.checkOccupancyIsOff()){
            organisationPage.switchOccupancyON();
        }

        organisationPage.clickSaveBtn();

        browser.sleep(5000);
        homePage.clickAdminDropDown();
        homePage.clickAnalyticsOptionInDropDown();        
        homePage.clickSiteDropDown();
        homePage.selectSiteName(organisation.propertyName);
        homePage.clickRealTimeData();
        sizeBeforeOccupancy = homePage.getCountOfTotalMarkers();

        homePage.clickTrafficDropDown();
        homePage.clickOccupancyInDropDown();
        sizePostOccupancy = homePage.getCountOfTotalMarkers();

        expect(sizePostOccupancy).toBeGreaterThan(sizeBeforeOccupancy);

        //Add the code for Removing the occupancy metric and then check whether markers has become less


    });
});