var protractor_1 = require("protractor");
var EC = protractor_1.ExpectedConditions;

var loginComponent = require('../components/LoginComponents.js');
var homePageComponent = require('../components/HomePageComponents.js');
var homePage = function(){

    this.clickAdminDropDown = function(){        
        homePageComponent.adminDropDown.click();
        //element(by.css(".dropdown[ng-if='adminToolAccess']")).click();
    };

    this.clickAdminOptionInDropDown = function(){
        homePageComponent.navigateToAdmin.click();
        //element(by.css("[ng-click='navigateToAdmin()']")).click();
    };

    this.clickAddOrganizationButton = function(){
        homePageComponent.addOrganizationBtn.click();
        // element(by.css('.icon.icon-import')).click();
    }

    this.clickAnalyticsOptionInDropDown = function(){
        homePageComponent.navigateToAnalytics.click();
        // element(by.css("[ng-click='navigateToAnalytics()']")).click();
    };

    this.clickOrganisationDropDown = function(){
        homePageComponent.organizationDropDown.click();
        // element(by.css("#organisation-picker")).click();
    };
    
    this.clickSiteDropDown = function(){
        // browser.waitForAngular();
        // var isSiteVisible = EC.visibilityOf(element(by.css('#site-picker')));
        // browser.wait(isSiteVisible,1500000);
        // browser.wait(function(){
        //     return element(by.css('#site-picker')).isDisplayed();
        // },2*60*1000).then(function(){
        //     element(by.css("#site-picker")).click();
        // });
        //browser.sleep(500000);
        // element(by.css("#site-picker")).click();
        homePageComponent.sitePicker.click();
    };

    // This is used for organisation as well as property
    this.selectSiteName = function(text){
        element(by.cssContainingText(homePageComponent.siteName, text)).click();
    };

    this.clickRealTimeData = function(){
        homePageComponent.realTimeData.click();
        // element(by.css("[ng-click='sendToRealTime()']")).click();
    }

    this.clickRealTimeDataDropDown = function(){
        homePageComponent.realTimeDataDropDown.click();
        // element(by.css(".real-time-actions .dropdown-toggle")).click();
    }

    this.clickOccupancyInDropDown = function(){
        element(by.cssContainingText(homePageComponent.dropDown,'Occupancy')).click();
    }
    
    this.getCountOfTotalMarkers = function(){
        return homePageComponent.markers.length;
    };

    this.clickTimeIcon = function(){
        homePageComponent.timeIcon.click();
    }    

    this.clickOptionForTimeinterval = function(text){
        
        element(by.cssContainingText(homePageComponent.optionTimeInterval,text))
    }

    this.clickShowTableButton = function(){
        // element(by.buttonText('Show table')).click();
        homePageComponent.showTableButton.click();
    }

    this.clickHideTableButton = function(){
        homePageComponent.hideTableBtn.click();
    }

    this.getindexOfTableHeaderRealTime = function(text){
        homePageComponent.tableHeaderRealTime.map(function(ele,index){
                if(ele==text){
                return index;
                }
        })
    }

    this.checkIfItemPresentInRealTimeDropDown = function(text){
        homePageComponent.realTimeDropDown.map(function(ele,index){
            if(ele==text){
                return true;
            }
        })
    }

    this.checkNumberOfRowsInRealDataTable = function(){
        return (homePageComponent.noOfRowsInRealData.length());
    }    

    this.getTrafficDropDownBtn = function(){        
        return (homePageComponent.trafficDropDown.get(1));
    }
    this.getPeriodChart = function(){
        return (homePageComponent.selectedPeriodChart);        
    }

    this.clickTrafficDropDown = function(){        
        homePageComponent.trafficDropDown.get(1).click().then(function(){
            console.log("Inside Traffic click Promise");

        });
    }    

    this.getOptionForTraffic = function(){
        return (homePageComponent.optionOnTraffic);
    }

    this.clickOptionForTraffic = function(val){
        homePageComponent.allOptionsOnTraffic.get(val).click();
        //element(by.cssContainingText('.dropdown.kpi-dropdown.btn-group.open .dropdown-menu li a',text)).click();        
    }

    this.getValueFromSummaryContainer = function(){
        return homePageComponent.allValuesFromSummmaryContainer.first().getText();
        
               
    }
    this.getCountOfRowsRealTimeData = function(){
        return (homePageComponent.allRealRowTimeData);
    }
    
    this.getRowsRealTimeData = function(rowNum){
        return homePageComponent.allRealRowTimeData.get(rowNum);
    }

    this.checkRowIsDisplayed = function(rowN){
        return this.getRowsRealTimeData(rowN);
    }
// var hour = String(hour);
    this.clickColumnForSorting = function(text){
        if(text=="hour"){
            element(by.css('.ag-header-cell.ag-header-cell-sortable .ag-header-cell-text')).click();
        }
        else{
        element(by.cssContainingText('.ag-header-cell.ag-header-cell-sortable .ag-header-cell-text',text)).click();
        }
    }

    

    this.getAllColumnValues = function(text){
        let arr = [];
        return element.all(by.css("div.ag-body-container[role='presentation'] [role='row'] [col-id='"+text+"']"))
        .map((ele) => {
            return ele.getText();
        }).then((text)=>{
            return arr.push(text);
        }).then(() => {
            return arr;
        });
            
    
    }

    this.getRightClickOptions = function(text){
        let ele = element(by.css("div.ag-body-container[role='presentation'] [role='row'] [col-id='"+text+"']"));
        ele.sendKeys(protractor_1.Key.chord(protractor_1.Key.SHIFT, protractor_1.Key.F10));
        return element.all(by.css('.ag-theme-balham .ag-menu .ag-menu-list .ag-menu-option #eName'));
    }
};
module.exports = new homePage();