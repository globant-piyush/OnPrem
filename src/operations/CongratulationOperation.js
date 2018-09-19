

var congratsOperation = function(){

    this.clickEditOrganization = function(){
        element(by.cssContainingText(".actions button:nth-child(1)","Edit")).click();        
    };
};

module.exports = new congratsOperation();