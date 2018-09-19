const loginPage = require('../operations/LoginOperations.js');
const data = require('../resources/ON702.json');
const cong = require('../operations/CongratulationOperation.js');
const createOrganization = require('../operations/CreateOrganizationOperation.js')

describe("Scenario to test flow from Create Organization", function () {
    it("Create Organization and Create Site", function () {

        browser.get("http://tgl-onprem11.rctanalytics.com/control-panel/en-us/login");  

        loginPage.enterLoginControlPanel(data.credentials.valid.user,data.credentials.valid.password);
        browser.sleep(5000);
        loginPage.clickLoginBtn();
        browser.sleep(10000);

        cong.clickEditOrganization();

        createOrganization.enterOrganizationName();

        


        


        

    })
})