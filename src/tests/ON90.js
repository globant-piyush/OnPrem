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

        // Validating Occupancy markers Starts
        sizeBeforeOccupancy = homePage.getCountOfTotalMarkers();
        homePage.clickRealTimeDataDropDown();
        homePage.clickOccupancyInDropDown();
        sizePostOccupancy = homePage.getCountOfTotalMarkers();
        expect(sizePostOccupancy).toBeGreaterThan(sizeBeforeOccupancy);
        // Validating Occupancy markers Ends

        // Validate time interval Starts
        homePage.clickTimeIcon();
        homePage.clickOptionForTimeinterval(timeInterval.minutes);
        expect(homePage.getCountOfTotalMarkers).toBe(2);              
        // Validate time interval Ends


        // Start 
        homePage.clickShowTableButton();
        index_traffic = homePage.getindexOfTableHeaderRealTime(tableHeader.traffic);
        index_occupancy = homePage.getindexOfTableHeaderRealTime(tableHeader.occupancy);
        index_sales = homePage.getindexOfTableHeaderRealTime(tableHeader.sales);
        expect(index_sales).toBe(index_occupancy+1);
        expect(index_occupancy).toBe(index_traffic+1);
        // End

        // Removing Occupancy to off and Checking it now 
        homePage.clickAdminDropDown();
        homePage.clickAdminOptionInDropDown();
        organisationPage.enterSiteName(organisation.sitename);
        organisationPage.clickEditBtn();
        browser.sleep(15000);
        organisationPage.clickAdvancedOption();
        browser.wait(isIconVisible,150000);


        organisationPage.switchOccupancyOFF();
        organisationPage.switchRealTimeOFF();
        organisationPage.clickSaveBtn();
        browser.sleep(5000);
       
        homePage.clickAdminDropDown();
        homePage.clickAnalyticsOptionInDropDown();        
        homePage.clickSiteDropDown();
        homePage.selectSiteName(organisation.propertyName);
        homePage.clickRealTimeData();

        homePage.clickRealTimeDataDropDown();
        expect(homePage.checkIfItemPresentInRealTimeDropDown('Occupancy')).toBe(false);




    });
});