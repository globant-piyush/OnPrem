
var commonOperation = function(){

    this.chooseOptionInSelect = function(dropDown, text, option){
        element(by.css(dropDown)).click();
        element(by.cssContainingtext(text,option)).click();        
    };

    this.waitForElementVisibility = function(locator) {
        return browser.wait(ExpectedConditions.visibilityOf($('locator')), maxWait, errMsg);
        };
};

module.exports = new commonOperation();