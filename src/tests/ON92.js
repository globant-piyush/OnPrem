var loginPage = require('../Tyco/loginPage.js');
var forgotPass = require('../Tyco/forgotPass.js');
var emailRec = require('../Tyco/emailRec.js');
var dataValues = require('../Tyco/dataValues.js');
var homePage = require('../Tyco/homePage.js');
var organisationPage = require('../Tyco/organisationPage.js')
var protractor_1 = require("protractor");

var EC = protractor_1.ExpectedConditions;
var icon = $(".occupancy-info");
var isIconVisible = EC.visibilityOf(icon);

describe('As a customer, one can see 1 hour intervals Displayed for Real Time Data', function(){
    it('Validating the visibility of 1 hour intervals', function(){

        loginPage.openBrowser();     
        loginPage.enterLogin(credentials.username,credentials.password);
        loginPage.clickSubmitBtn();

        homePage.clickAdminDropDown();
        homePage.clickAnalyticsOptionInDropDown();        
        homePage.clickSiteDropDown();
        homePage.selectSiteName(organisation.propertyName);
        homePage.clickRealTimeData();


        homePage.clickTimeIcon();
        homePage.clickOptionForTimeinterval(timeInterval.minutes);
        expect(homePage.getCountOfTotalMarkers).toBe(1);  
        homePage.clickTimeIcon();
        homePage.clickOptionForTimeinterval(timeInterval.hour);
        expect(homePage.getCountOfTotalMarkers).toBe(1);          


    });
});