var loginComponents = require('../components/LoginComponents.js');
var loginData = require('../resources/LoginData.json')

var loginPage = function(){

    this.openBrowser = function(url){
        browser.driver.manage().window().maximize();
        console.log("Inside Login Opeation :"+url);
        
        browser.get(url);  
    };
            
        this.enterLogin = function(username, password){
            loginComponents.userName.sendKeys(username);
            loginComponents.password.sendKeys(password);
        };

        this.enterLoginControlPanel = function(username, password){
            loginComponents.userNameCP.sendKeys(username);
            loginComponents.passwordCP.sendKeys(password);
        };
    
        this.clickSubmitBtn = function(){
            loginComponents.submitbtn.click();
            
            // Add Expected COndition For Wait - Analytics Element
        };

        this.clickLoginBtn = function(){
            loginComponents.loginCP.click();           
        };
    
    };
    module.exports = new loginPage();
    