
var commonOperation = function(){

    this.chooseOptionInSelect = function(dropDown, text, option){
        element(by.css(dropDown)).click();
        element(by.cssContainingtext(text,option)).click();        
    };
};

module.exports = new commonOperation();