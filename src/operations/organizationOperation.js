var orgComponent = require('../components/OrganizationComponents.js');
var organisationPage = function () {

    this.enterSiteName = function (text) {
        orgComponent.siteName.sendKeys(text);
    };

    this.clickEditBtn = function () {
        orgComponent.editBtn.click();
    };

    this.clickExportButton = function(){
        orgComponent.exportBtn.click();
    };

    this.clickAdvancedOption = function () {
        orgComponent.advancedOption.click();
        browser.sleep(3000);
    };

    this.checkIfOccupancyIconIsDisplayed = function () {
        return orgComponent.occupancyIcon.isDisplayed();
    };

    this.validateInfoOnToolTip = function(){
        return orgComponent.occupancyIcon.getAttribute('data-title');
    }

    this.checkOccupancyIsDisabled = function () {        
        let a = element(by.cssContainingText('.disabled-text', 'Occupancy')).isDisplayed().
            then(() => true)
            .catch(err => false);                        
            return a ;
    }

    this.checkRealTimeTrafficExists = function () {
        return element(by.cssContainingText('.option>h3', 'Realtime traffic')).isDisplayed();
    };
    this.checkRealTimeIsOff = function () {
        let ret = false;
        if (orgComponent.realTimeOff.isDisplayed()) {
            ret = true;
        }
    };

    this.checkRealTimeIsOn = function () {
        return orgComponent.realTimeOn.isDisplayed();
    };

    this.switchRealTimeON = function () {
        orgComponent.realTimeOff.click()
            .then(() => console.log("Real Time Switch is Off"))
                    .catch(err => console.log("Element Already Clicked Before"));
    };

    this.switchRealTimeOFF = function () {
        orgComponent.realTimeOn.click().
            then(() => console.log('Real Time Switch is made Off'))
                    .catch(err => console.log('Real Time Switch if already off'));
    };

    this.checkOccupancyIsOff = function () {
        return orgComponent.occupancyOff.isDisplayed();
    };

    this.switchOccupancyON = function () {
        let e = element(by.xpath("//div[contains(@class,'option')]//h3[contains(text(),'Occupancy')]/parent::div//span[@class='ui-switch']"))
        e.click().then(() => console.log("Occupancy Switch is in Off State"))
            .catch(err => console.log("Occupancy Element Already Clicked Before"));
    };

    this.switchOccupancyOFF = function () {
        orgComponent.occupancyOn.click();
    };

    this.checkOccupancyIsOn = function () {        
        return orgComponent.occupancyOn.isDisplayed();
    };

    this.clickSaveBtn = function () {
        element.all(by.css(" button.btn.btn-primary")).map(function (ele, index) {
            if (index == 1) {
                ele.click();
            }
        })
    };

    this.validateToolTipExists = function(){          
        return orgComponent.toolTip.isDisplayed();
    }
};

module.exports = new organisationPage();