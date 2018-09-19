var commonOperation = require("../operations/CommonOperation.js");
var createOrganizationCom = require('../components/CreateOrgComponents.js');

var createOrganization = function(){

    this.enterOrganizationName = function(text){
        createOrganizationCom.orgName.sendKeys(text);
    }

    this.enterOrganizationId = function(text){
        createOrganizationCom.orgId.sendKeys(text);
    }

    this.selectOrganizationType = function(text){
        createOrganizationCom.orgType.click();
        commonOperation.chooseOptionInSelect(createOrganizationCom.orgTypeCommon,text);
        // element(by.cssContainingtext(".cdk-overlay-connected-position-bounding-box span",text)).click();
    }

    this.clickSingleSite = function(){
        createOrganizationCom.singleSite.click();
    }

    this.clickMultiSite = function(){
        createOrganizationCom.multiSite.click();
    }

    this.selectDateFormat = function(text){
        createOrganizationCom.dateFormat.click();
        commonOperation.chooseOptionInSelect(createOrganizationCom.optionsCss,text);
    }

    this.selectCalendarFormat = function(text){
        createOrganizationCom.calendarFormat.click();
        commonOperation.chooseOptionInSelect(createOrganizationCom.optionsCss,text);
    }

    this.selectLocale = function(text){
        createOrganizationCom.locale.click();
        commonOperation.chooseOptionInSelect(createOrganizationCom.optionsCss,text);
    }

    this.click12HourFormat = function(){
        createOrganizationCom.time12Hr.click();
    }

    this.click24HourFormat = function(){
        createOrganizationCom.time24Hr.click();
    }

    this.clickNumber1Format = function(){}

};